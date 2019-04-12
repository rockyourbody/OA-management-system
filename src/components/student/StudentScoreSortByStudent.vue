<template>
	<div class="hello">
		<div class="search-box">
			<el-form ref="form1" :model="form1" label-width="80px">
				<el-form-item label="姓名:">
					<el-input size="mini" v-model="form1.name" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="学号:">
					<el-input size="mini" v-model="form1.id" placeholder="请输入学号"></el-input>
				</el-form-item>

				<el-form-item label="班级">
					<el-select v-model="form1.classId" size="mini" placeholder="请选择班级">
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

				<el-button style="margin-left: 20px;" type="primary" class="el-icon-search" @click="dealScoreSearch">搜索</el-button>
			</el-form>
		</div>

		<div class="main-box">
			<el-table size="mini" :data="show_list" border style="width: 100%">
				<el-table-column prop="date" label="id">
				</el-table-column>
				<el-table-column prop="id" label="学号">
				</el-table-column>
				<el-table-column prop="name" label="姓名">
				</el-table-column>
				<el-table-column prop="classId" label="班级">
				</el-table-column>
				<el-table-column prop="term" label="学制">
				</el-table-column>
				<el-table-column prop="enroller" label="招生老师">
				</el-table-column>
				<el-table-column prop="ctime" label="时间">
				</el-table-column>
				<el-table-column prop="score" label="学分">
				</el-table-column>
				<el-table-column label="添加扣分记录" width="180">

					<template slot-scope="scope">
						<el-button type="primary" @click="dealShowDialog(scope.$index)">查看</el-button>
						<el-button type="primary" @click="dealSubScoreDialog(scope.$index)">扣分</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 50, 100]"
		 :page-size='page_size' layout="total, sizes, prev, pager, next, jumper" :total="score_list_length">
		</el-pagination>

		<!-- 查看扣分记录的对话框 -->
		<div class="alert-student-score">
			<el-dialog :title="'扣分详情'" :visible.sync="student_score">
				<el-table :data="socre_item" style="width: 100%">
					<el-table-column prop="_id" label="id">
					</el-table-column>
					<el-table-column prop="name" label="姓名">
					</el-table-column>
					<el-table-column prop="utime" label="录入时间">
					</el-table-column>
					<el-table-column prop="ctime" label="违纪日期">
					</el-table-column>
					<el-table-column prop="way" label="原因">
					</el-table-column>
					<el-table-column prop="minus" label="扣分">
					</el-table-column>
					<el-table-column prop="left" label="剩余">
					</el-table-column>
				</el-table>
			</el-dialog>
		</div>

		<!-- 添加扣分的对话框 -->
		<div class="alert-add-subscore">
			<el-dialog :title="'添加扣分'" :visible.sync="add_subscore">
				<el-form :model="form2">

					<el-form-item label="违纪日期">
						<el-date-picker value-format="yyyyMMdd" v-model="form2.time" type="date" placeholder="选择日期"></el-date-picker>
					</el-form-item>

					<el-form-item label="违纪原因">
						<el-select v-model="form2.wrong_type" placeholder="请选择违纪原因">
							<el-option label="睡觉" value="0"></el-option>
							<el-option label="手机游戏/视频" value="1"></el-option>
							<el-option label="电脑游戏/视频" value="2"></el-option>
							<el-option label="迟到" value="3"></el-option>
							<el-option label="旷课" value="4"></el-option>
							<el-option label="顶撞老师" value="5"></el-option>
							<el-option label="打架" value="6"></el-option>
							<el-option label="酗酒" value="7"></el-option>
							<el-option label="夜不归宿" value="8"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="扣分">
						<el-input v-model="form2.sub_score" style="width: 220px; margin-left: 30px;"></el-input>
					</el-form-item>

					<el-button type="primary" @click="dealAddSubScore">添加</el-button>
				</el-form>
			</el-dialog>
		</div>


	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				//搜索区域的from
				form1: {
					name: "",
					id: "",
					classId: ""
				},
				//扣分的from
				form2: {
					time: '',
					wrong_type: "",
					sub_score: 3
				},



				score_list: [],

				show_list: [],

				//一页信息的条数
				page_size: 10,
				//当前的页码数
				page_index: 1,

				//存储某个学生的扣分记录,用以展示某个学生的扣分记录
				socre_item: [],
				//是否弹出扣分记录对话框
				student_score: false,

				//是否弹出添加扣分的对话框
				add_subscore: false,

				//当前被点击扣分的 score 项，用以发起添加扣分的请求
				current_score_item: {},

				token: ""
			}
		},
		created: function() {
			this.downloadDate()

			this.token = window.localStorage.getItem("token")
		},
		methods: {
			downloadDate: async function() {
				this.active_page = 0


				var res = await this.interfc.studentApi.scoreByStudent({})
				this.score_list = res.list
				this.getShowList();

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

			//通分页器的数据获取需要展示的数据
			getShowList: function() {
				var page_size = this.page_size;
				var page_index = this.page_index;

				this.show_list = this.score_list.slice((page_index - 1) * page_size, page_index * page_size);
			},

			//点击查看
			dealShowDialog: async function(index) {
				this.student_score = true
				var score_item = this.show_list[index]

				score_item.uid = score_item._id
				score_item.token = this.token;

				console.log(score_item)


				var res = await this.interfc.studentApi.studentScoreRecord(score_item)
				if (res.code == 1) {
					this.socre_item = res.list
					console.log(res.list)
				}

			},
			//处理扣分
			dealSubScoreDialog: function(index) {
				console.log(index)
				var score_item = this.show_list[index]
				score_item.token = this.token;
				score_item.uid = score_item._id
				this.current_score_item = score_item

				console.log(score_item)

				this.add_subscore = true

			},
			//点击添加扣分的按钮
			dealAddSubScore: async function() {
				var dict = this.current_score_item
				dict.day = this.form2.time
				dict.minus = this.form2.sub_score
				dict.way = this.form2.wrong_type
				dict.uid = this.current_score_item._id
				dict.token = this.token

				var res = await this.interfc.studentApi.studentAddWrong(dict)

				if (res.code == 1) {
					this.$message({
						message: '添加成功',
						type: 'success'
					});

					this.add_subscore = false

					this.downloadDate()
				} else {
					this.$message({
						message: '添加失败',
						type: 'error'
					});
				}


			},

			//点击搜索按钮的时候触发
			dealScoreSearch: async function() {
				var dict = {
					name: this.form1.name,
					id: this.form1.id,
					classId: this.form1.classId
				}
				var res = await this.interfc.studentApi.searchScore(dict)
				if (res.code == 1) {
					this.score_list = res.list
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
			}
		},
		computed: {
			score_list_length: function() {
				return this.score_list.length
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.score-btns {
		margin-top: 20px;
	}

	.search-box .el-form {
		background-color: #fff;
		display: flex;
		align-items: center;
		height: 80px;
		margin-top: 20px;
	}

	.main-box {
		margin-top: 20px;
	}

	.search-box .el-form .el-form-item {
		margin: 0;
	}
</style>
