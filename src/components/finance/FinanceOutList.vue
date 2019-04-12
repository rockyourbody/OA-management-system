<template>
	<div class="finance-out-list">

		<el-form ref="search_from" size="mini" :model="search_from" label-width="180">
			<div class="search-form-row">
				<el-form-item label="姓名">
					<el-input v-model="search_from.name"></el-input>
				</el-form-item>
				<el-form-item label="支出类型">
					<el-select v-model="search_from.type" placeholder="请选择活动区域">
						<el-option label="全部" value="-1"></el-option>
						<el-option label="管理费用-办公用品" value="0"></el-option>
						<el-option label="管理费用-房租/科技经营管理学院" value="1"></el-option>
						<el-option label="管理费用-房租/赋腾" value="2"></el-option>
						<el-option label="管理费用-房租/其它" value="3"></el-option>
						<el-option label="管理费用-工资" value="4"></el-option>
						<el-option label="管理费用-个税" value="5"></el-option>
						<el-option label="管理费用-增值税" value="6"></el-option>
						<el-option label="管理费用-交通费" value="7"></el-option>
						<el-option label="管理费用-招待费" value="8"></el-option>
						<el-option label="管理费用-住宿费" value="9"></el-option>
						<el-option label="管理费用-加油费" value="10"></el-option>
						<el-option label="退费/住宿押金" value="11"></el-option>
						<el-option label="退费/电脑押金" value="12"></el-option>
						<el-option label="退费/学费" value="13"></el-option>
						<el-option label="退费/学历费" value="14"></el-option>
						<el-option label="学历费" value="15"></el-option>
						<el-option label="财务费用" value="16"></el-option>
						<el-option label="贷款保证金" value="17"></el-option>
						<el-option label="宿舍押金" value="18"></el-option>
						<el-option label="床/被褥/桌椅" value="19"></el-option>
						<el-option label="印刷费/快递费" value="20"></el-option>
						<el-option label="电脑租金/购买/通讯费" value="21"></el-option>
						<el-option label="市场工资" value="22"></el-option>
						<el-option label="其它" value="23"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="el-icon-search" @click="dealSearchFinanceOut">搜索</el-button>
				</el-form-item>
			</div>

			<div class="search-form-row">
				<el-form-item label="时间" label-width="190">
					<el-date-picker v-model="search_from.time" style="width: 180px;" type="datetimerange" value-format="yyyyMMdd"
					 range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
					</el-date-picker>
				</el-form-item>

				<el-form-item label="支付方式">
					<el-select v-model="search_from.way" placeholder="请选择活动区域">
						<el-option label="全部" value="-1"></el-option>
						<el-option label="现金" value="0"></el-option>
						<el-option label="刘卡" value="1"></el-option>
						<el-option label="名博-BB" value="2"></el-option>
						<el-option label="名博-CMB" value="3"></el-option>
						<el-option label="万众" value="4"></el-option>
						<el-option label="微信" value="5"></el-option>
						<el-option label="支付宝" value="6"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" class="el-icon-plus" @click="isShowAddDlg = true">添加</el-button>
				</el-form-item>
			</div>
		</el-form>


		<el-table size="mini" :data="show_list" border style="width: 100%">
			<el-table-column prop="_id" label="ID">
			</el-table-column>
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="money" label="金额">
			</el-table-column>
			<el-table-column prop="type" label="支出类型">
			</el-table-column>
			<el-table-column prop="way" label="支出方式">
			</el-table-column>
			<el-table-column prop="day" label="支出日期">
			</el-table-column>
			<el-table-column prop="ctime" label="录入时间">
			</el-table-column>
			<el-table-column prop="invoice" label="发票">
			</el-table-column>
			<el-table-column label="编辑" width="180">
				<template slot-scope="scope">
					<el-button type="primary" @click="dealShowDialog(scope.$index)">修改</el-button>
					<el-button type="primary" @click="dealShowDeleteDialog(scope.$index)">删除</el-button>
				</template>
				<el-button type="primary">删除</el-button>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 50, 100]"
		 :page-size='page_size' layout="total, sizes, prev, pager, next, jumper" :total="out_list_length">
		</el-pagination>

		<!-- 修改支出的对话框 -->
		<el-dialog class="modify-dlg" title="修改" :visible.sync="isShowModifyDlg">
			<el-form :model="current_out_item" size="medium" label-width="200px">
				<el-form-item label="姓名">
					<el-input v-model="current_out_item.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="费用类型">
					<el-select v-model="current_out_item.type" placeholder="请选择费用类型">
						<el-option label="全部" value="-1"></el-option>
						<el-option label="管理费用-办公用品" value="0"></el-option>
						<el-option label="管理费用-房租/科技经营管理学院" value="1"></el-option>
						<el-option label="管理费用-房租/赋腾" value="2"></el-option>
						<el-option label="管理费用-房租/其它" value="3"></el-option>
						<el-option label="管理费用-工资" value="4"></el-option>
						<el-option label="管理费用-个税" value="5"></el-option>
						<el-option label="管理费用-增值税" value="6"></el-option>
						<el-option label="管理费用-交通费" value="7"></el-option>
						<el-option label="管理费用-招待费" value="8"></el-option>
						<el-option label="管理费用-住宿费" value="9"></el-option>
						<el-option label="管理费用-加油费" value="10"></el-option>
						<el-option label="退费/住宿押金" value="11"></el-option>
						<el-option label="退费/电脑押金" value="12"></el-option>
						<el-option label="退费/学费" value="13"></el-option>
						<el-option label="退费/学历费" value="14"></el-option>
						<el-option label="学历费" value="15"></el-option>
						<el-option label="财务费用" value="16"></el-option>
						<el-option label="贷款保证金" value="17"></el-option>
						<el-option label="宿舍押金" value="18"></el-option>
						<el-option label="床/被褥/桌椅" value="19"></el-option>
						<el-option label="印刷费/快递费" value="20"></el-option>
						<el-option label="电脑租金/购买/通讯费" value="21"></el-option>
						<el-option label="市场工资" value="22"></el-option>
						<el-option label="其它" value="23"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="金额">
					<el-input v-model="current_out_item.money" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="实际支出日期">
					<el-date-picker v-model="current_out_item.day" type="date" placeholder="选择日期">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="支付方式">
					<el-select v-model="current_out_item.way" placeholder="请选择活动区域">
						<el-option label="全部" value="-1"></el-option>
						<el-option label="现金" value="0"></el-option>
						<el-option label="刘卡" value="1"></el-option>
						<el-option label="名博-BB" value="2"></el-option>
						<el-option label="名博-CMB" value="3"></el-option>
						<el-option label="万众" value="4"></el-option>
						<el-option label="微信" value="5"></el-option>
						<el-option label="支付宝" value="6"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="备注">
					<el-input v-model="current_out_item.remark" autocomplete="off"></el-input>
				</el-form-item>

			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="dealModifyOut">修改</el-button>
			</div>

		</el-dialog>

		<!-- 删除支出的对话框 -->
		<el-dialog title="确认删除" :visible.sync="isShowDeleteDlg" width="30%">
			<span slot="footer" class="dialog-footer">
				<el-button @click="isShowDeleteDlg = false">取 消</el-button>
				<el-button type="primary" @click="dealDeleteOut()">确 定</el-button>
			</span>
		</el-dialog>
	
		<!-- 添加支出对话框 -->
		<el-dialog class="modify-dlg" title="添加" :visible.sync="isShowAddDlg">
			<el-form :model="add_out_item" size="medium" label-width="200px">
				<el-form-item label="姓名">
					<el-input v-model="add_out_item.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="费用类型">
					<el-select v-model="add_out_item.type" placeholder="请选择费用类型">
						<el-option label="全部" value="-1"></el-option>
						<el-option label="管理费用-办公用品" value="0"></el-option>
						<el-option label="管理费用-房租/科技经营管理学院" value="1"></el-option>
						<el-option label="管理费用-房租/赋腾" value="2"></el-option>
						<el-option label="管理费用-房租/其它" value="3"></el-option>
						<el-option label="管理费用-工资" value="4"></el-option>
						<el-option label="管理费用-个税" value="5"></el-option>
						<el-option label="管理费用-增值税" value="6"></el-option>
						<el-option label="管理费用-交通费" value="7"></el-option>
						<el-option label="管理费用-招待费" value="8"></el-option>
						<el-option label="管理费用-住宿费" value="9"></el-option>
						<el-option label="管理费用-加油费" value="10"></el-option>
						<el-option label="退费/住宿押金" value="11"></el-option>
						<el-option label="退费/电脑押金" value="12"></el-option>
						<el-option label="退费/学费" value="13"></el-option>
						<el-option label="退费/学历费" value="14"></el-option>
						<el-option label="学历费" value="15"></el-option>
						<el-option label="财务费用" value="16"></el-option>
						<el-option label="贷款保证金" value="17"></el-option>
						<el-option label="宿舍押金" value="18"></el-option>
						<el-option label="床/被褥/桌椅" value="19"></el-option>
						<el-option label="印刷费/快递费" value="20"></el-option>
						<el-option label="电脑租金/购买/通讯费" value="21"></el-option>
						<el-option label="市场工资" value="22"></el-option>
						<el-option label="其它" value="23"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="金额">
					<el-input v-model="add_out_item.money" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="实际支出日期">
					<el-date-picker v-model="add_out_item.day"  value-format="yyyyMMdd" type="date" placeholder="选择日期">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="支付方式">
					<el-select v-model="add_out_item.way" placeholder="请选择活动区域">
						<el-option label="全部" value="-1"></el-option>
						<el-option label="现金" value="0"></el-option>
						<el-option label="刘卡" value="1"></el-option>
						<el-option label="名博-BB" value="2"></el-option>
						<el-option label="名博-CMB" value="3"></el-option>
						<el-option label="万众" value="4"></el-option>
						<el-option label="微信" value="5"></el-option>
						<el-option label="支付宝" value="6"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="备注">
					<el-input v-model="add_out_item.remark" autocomplete="off"></el-input>
				</el-form-item>
		
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="dealAddOut">添加</el-button>
			</div>
		
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			var now_date = this.getNowFormatDate();
			return {
				search_from: {
					name: "",
					type: "0",
					way: "0",
					time: [
						"20170101",
						now_date
					]
				},

				current_out_item: {},
				//要添加的支出对象
				add_out_item:{
					day: '',
					money: '',
					name: "",
					paytime: "",
					type: "",
					way: "",
					remark:""
				},

				out_list: [],
				show_list: [],
				page_size: 10,
				page_index: 1,

				//是否显示修改对话框
				isShowModifyDlg: false,
				//是否显示删除对话框
				isShowDeleteDlg: false,
				//是否显示添加对话框
				isShowAddDlg:false,

				token: "",

			}
		},
		created: function() {
			this.token = window.localStorage.getItem("token");
			this.downloadData()
		},
		methods: {

			downloadData: async function() {
				var dict = {
					results: 20,
					size: 500,
					token: this.token
				}
				var res = await this.interfc.financeApi.financeList(dict);
				if (res.code == 1) {
					this.out_list = res.list
					console.log(this.out_list)
					this.getShowList()
				}
			},

			dealSearchFinanceOut: async function() {
				var dict = {
					name: this.search_from.name,
					from: this.search_from.time[0],
					to: this.search_from.time[1]
				}
				if (this.search_from.type != -1) {
					dict.type = this.search_from.type
				}
				if (this.search_from.way != -1) {
					dict.way = this.search_from.way
				}

				var res = await this.interfc.financeApi.searchFinanceOut(dict)

				if (res.code == 1) {
					this.out_list = res.list
					this.$message({
						message: '搜索成功',
						type: 'success'
					});
					this.getShowList()
				} else {
					this.$message({
						message: '搜索失败',
						type: 'error'
					});
				}

			},

			//显示修改弹窗
			dealShowDialog: function(index) {
				
				var current_out_item = {}
				
				for (var attr in this.show_list[index]){
					current_out_item[attr] = this.show_list[index][attr]
				}
				
				console.log(current_out_item)
				
				var day = current_out_item.day + '';
				
				var temp_day = day.substring(0,4) + '-' + day.substring(4,6) + '-' +  day.substring(6,8)
				
				
				
				current_out_item.day = temp_day
				
				current_out_item.remark = ''
				this.current_out_item = current_out_item

				console.log(this.current_out_item)

				this.isShowModifyDlg = true
			},

			//修改支出
			dealModifyOut: async function() {
				var dict = this.current_out_item
				var res = await this.interfc.financeApi.modifyFinanceOut(dict)
				
				
				if (res.code == 1) {
					this.$message({
						message: '修改成功',
						type: 'success'
					});
				}


				this.isShowModifyDlg = false;
			},

			//显示是否删除的对话框
			dealShowDeleteDialog: function(index) {
				var current_out_item = this.show_list[index]
				current_out_item.remark = ''
				this.current_out_item = current_out_item

				console.log(this.current_out_item)

				this.isShowDeleteDlg = true
			},

			//确认删除
			dealDeleteOut: async function(index) {
				var dict = this.current_out_item
				var res = await this.interfc.financeApi.deleteFinanceOut(dict)
				if(res.code == 1){
					this.$message({
						message: '删除成功',
						type: 'success'
					});
					
					this.downloadData()
				}
				
				this.isShowDeleteDlg = false;
			},
			
			//添加支出
			dealAddOut: async function(){
				var dict = this.add_out_item;
				dict.paytime = new Date()
				
				console.log(dict)
				var res = await this.interfc.financeApi.addFinanceOut(dict)
				if(res.code == 1){
					this.$message({
						message: '添加成功',
						type: 'success'
					});
					this.downloadData()
					this.isShowAddDlg = false
					
				}else{
					this.$message({
						message: '删除失败',
						type: 'error'
					});
				}
			},


			//根据当前 当前页面的大小 和 当前是第几个页面 切分数据
			getShowList: function() {
				var page_size = this.page_size;
				var page_index = this.page_index;
				this.show_list = this.out_list.slice((page_index - 1) * page_size, page_index * page_size);
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


			//获取当前时间，格式YYYY-MM-DD
			getNowFormatDate: function() {
				var date = new Date();
				var seperator1 = "";
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var strDate = date.getDate();
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				}
				var currentdate = year + seperator1 + month + seperator1 + strDate + '';
				return currentdate;
			}
		},
		computed: {
			out_list_length: function() {
				return this.out_list.length
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-form {
		background-color: white;
		margin-top: 20px;
	}

	.search-form-row {
		display: flex;
		align-items: center;
		padding: 10px;
		box-sizing: border-box;
	}

	.search-form-row .el-form-item {
		display: flex;
		margin-left: 20px;
	}

	.modify-dlg .el-form {
		width: 70%;
	}
</style>
