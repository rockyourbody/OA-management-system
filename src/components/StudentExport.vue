<template>
	<div class="student-list">
		<div class="search-box">
			<el-form ref="form" :model="form" label-width="80px" class="search-form">
				<div>
					<el-form-item label="姓名:">
						<el-input size="mini" placeholder="请输入姓名" v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="学号:">
						<el-input size="mini" placeholder="请输入学号" v-model="form.student_id"></el-input>
					</el-form-item>
					<el-form-item label="证件:">
						<el-input size="mini" placeholder="请输入身份证号" v-model="form.id_num"></el-input>
					</el-form-item>
				</div>
				<div>
					<el-form-item label="班级">
						<el-select v-model="form.class" size="mini" placeholder="请选择班级">
							<el-option label="全部" value="all"></el-option>
							<el-option label="软工B班" value="软工B班"></el-option>
							<el-option label="软工A班" value="软工A班"></el-option>
							<el-option label="1901" value="1901"></el-option>
							<el-option label="1808" value="1808"></el-option>
							<el-option label="1807" value="1807"></el-option>
							<el-option label="1806" value="1806"></el-option>
							<el-option label="1805" value="1805"></el-option>
							<el-option label="1804" value="1804"></el-option>
							<el-option label="1803" value="1803"></el-option>
							<el-option label="1802" value="1802"></el-option>
							<el-option label="1801" value="1801"></el-option>
							<el-option label="1710" value="1710"></el-option>
							<el-option label="1709" value="1709"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="缴费状态">
						<el-radio-group v-model="form.paystate">
							<el-radio label="-1">欠费</el-radio>
							<el-radio label="1">缴清</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="状态">
						<el-select v-model="form.state" size="mini" placeholder="请选择状态">
							<el-option label="全部" value="-1"></el-option>
							<el-option label="预报名" value="0"></el-option>
							<el-option label="在读" value="1"></el-option>
							<el-option label="毕业" value="2"></el-option>
							<el-option label="休学" value="3"></el-option>
							<el-option label="退学" value="4"></el-option>
						</el-select>
					</el-form-item>
				</div>
			</el-form>
			<div class="search-btns">
				<el-button type="primary" class="el-icon-search" @click="dealSearch">搜索</el-button>
				<el-button type="primary" class="el-icon-plus" @click="$router.push('/main/student_add')">新建</el-button>
			</div>
		</div>


		<div>
			<el-table :data="show_list" border style="width: 100%">
				<el-table-column prop="name" label="姓名" width="180">
				</el-table-column>
				<el-table-column prop="classId" label="班级" width="180">
				</el-table-column>
				<el-table-column prop="phone" label="手机号">
				</el-table-column>
				<el-table-column prop="ctime" label="入学日期">
				</el-table-column>
				<el-table-column prop="term" label="学制">
				</el-table-column>
				<el-table-column prop="motherPhone" label="家长电话">
				</el-table-column>
				<el-table-column prop="enroller" label="招生老师">
				</el-table-column>
				<el-table-column prop="tuition" label="学费">
				</el-table-column>
				<el-table-column prop="tuitionPaid" label="已缴学费">
				</el-table-column>
				<el-table-column prop="fee" label="杂费">
				</el-table-column>
				<el-table-column prop="feePaid" label="已缴杂费">
				</el-table-column>
				<el-table-column prop="paystateStr" label="缴费状态">
				</el-table-column>
				<el-table-column prop="edu_level" label="学历">
				</el-table-column>
			</el-table>

			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 50, 100]"
			 :page-size='page_size' layout="total, sizes, prev, pager, next, jumper" :total="student_list_length">
			</el-pagination>
		</div>

		<download-excel class="export-excel-wrapper" :data="show_list"  name="学员信息.xls">
			<!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
			<el-button type="primary" size="small">导出EXCEL</el-button>
		</download-excel>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				form: {
					name: '',
					student_id: '',
					id_num: "",
					class: "all",
					paystate: "-1",
					state: "-1"
				},

			
				//总数据
				student_list: [],
				//要展示的数据
				show_list: [],

				//当前页面大小
				page_size: 10,
				//当前页码
				page_index: 1,

				token: "",

				//是否弹出信息窗口
				alert_box: false,
				//弹窗口选项卡激活
				alert_box_active: 0,

				//下载下来的关于费用弹框的对象
				fee: {},

				//缴费计划列表
				fee_plan: [],

				//弹框学生信息
				student_item: {}
			}
		},
		created: function() {
			this.downloadStudentList()
			this.token = window.localStorage.getItem("token")
		},
		methods: {
			downloadStudentList: async function() {

				var res = await this.interfc.studentApi.studentList({})
				for (var item of res.list) {
					if (item.paystate == 0) {
						item.paystateStr = "欠费"
					} else {
						item.paystateStr = "缴清"
					}
				}
				this.student_list = res.list
				this.getShowList()

			},

			//根据当前 当前页面的大小 和 当前是第几个页面 切分数据
			getShowList: function() {
				var page_size = this.page_size;
				var page_index = this.page_index;
				this.show_list = this.student_list.slice((page_index - 1) * page_size, page_index * page_size);
			},

			//分页器页面大小变化
			handleSizeChange: function(current_size) {
				this.page_size = current_size;
				this.getShowList()
			},
			//分页器当前页改变
			handleCurrentChange: function(current_page) {
				this.page_index = current_page;
				this.getShowList()
			},

			//搜索功能
			dealSearch: async function() {
				var dict = {
					"page": 1,
					"condition": {
						"name": this.form.name,
						"id": this.form.student_id,
						"classId": this.form.class,
						"paystate": this.form.paystate,
						"status": this.form.state,
						"idcard": this.form.id_num
					},
					"token": this.token
				}
				var res = await this.interfc.studentApi.ListSerach(dict)


				if (res.code == 1) {
					this.student_list = res.list
					this.getShowList()
					this.$message({
						message: '搜索成功',
						type: 'success'
					});
				} else {
					this.$message({
						message: '搜索失败',
						type: 'error'
					});
				}


			},



		},
		computed: {
			student_list_length: function() {
				return this.student_list.length
			},
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.student-list {
		padding: 20px;
		box-sizing: border-box;
	}

	.search-box {
		display: flex;
		background-color: #fff;
		margin-bottom: 30px;
	}

	.search-form {
		display: flex;
		flex-direction: column;
		width: 70%;
		justify-content: space-around;
		align-items: center;
	}

	.search-form>div {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 10px;
	}

	.el-form-item {
		width: 33.333%;
	}

	.search-btns {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: 30%;
	}

	.search-btns button {
		width: 30%;
		margin: 0;
	}

	.el-pagination {
		text-align: right;
		margin-top: 20px;
	}

	/* 关于弹窗 */
	.alert-box {}



	/* 关于选项卡 */
	.student_add_all {
		padding: 20px;
	}

	.form_main {
		background-color: #fff;
		margin-right: 20px;
		box-sizing: border-box;
		padding: 20px;
	}

	.el-form {
		margin-top: 6px;
	}

	.el-form>div:not(.el-form-item) {
		display: flex;
		justify-content: center;
	}

	.el-form>div>div {
		width: 40%;
	}

	.el-form-item {
		width: 100%;
		margin-bottom: 10px !important;
	}

	.remark {
		margin: 0 auto;
		width: 80%;
	}

	.remark .el-input {
		display: block;
		/* height: 100px!important; */
	}

	.el-input__inner {
		height: 100%;
	}

	.el-breadcrumb {
		height: 30px;
	}

	.form_tile {
		width: 100%;
		border-bottom: 1px solid #e8e8e8;
		height: 30px;
		box-sizing: border-box;
		padding: 0 20px;
	}

	.el-steps {
		height: auto;
		width: 75%;
		margin: 0 auto;
		margin-top: 20px;
	}

	.el-button {
		display: block;
		margin: 0 auto;
	}

	.form2 {
		padding: 20px;
		box-sizing: border-box;
	}

	.form2-item:not(.form2-item-except) {
		border-bottom: 2px solid #eee;
		display: flex;
		margin-top: 15px;
	}

	.form2-item-except {
		border-bottom: 2px solid #eee;
		margin-top: 15px;
		display: block !important;
		padding-left: 50px;
		box-sizing: border-box;

	}

	.form2-item-except-in {
		width: 80% !important;
	}

	.form2-item-except>div {
		display: flex;

	}

	.form2-item-left,
	.form2-item-right {
		width: 50%;
	}


	.from3 {
		margin-top: 20px;
	}

	.form3-item-title {
		text-align: center;
		margin-top: 30px;
		margin-bottom: 20px;
	}

	.form3-table {
		border: 1px solid #eee;
		border-bottom: none;
		border-right: none;

		padding-bottom: -1px;
		width: 70%;
		margin: 0 auto;
	}

	.form3-table-row {
		border-bottom: 1px solid #eee;
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
	}

	.form3-table-row:nth-last-child {
		border: none;
	}

	.form3-table-block {
		width: 33%;
		border-right: 1px solid #eee;
		text-align: center;
		height: 40px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.form3-table-block:nth-last-child {
		border: none;
	}

	.form3-table-block>i {
		background-color: #36bafb;
		border-radius: 50%;
		display: block;
		width: 25px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		color: #fff;
	}

	.deal-btns {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
