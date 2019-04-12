<template>
	<div class="hello">
		<div class="time-picker">
			<el-date-picker v-model="timer" format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期"
			 end-placeholder="结束日期">
			</el-date-picker>
			<el-button type="primary" @click="dealScoreByTime">搜索</el-button>
		</div>
		
		<div class="mian-table">
			<el-table :data="show_list" border style="width: 100%">
				<el-table-column prop="_id" label="id">
				</el-table-column>
				<el-table-column prop="uid" label="学号">
				</el-table-column>
				<el-table-column prop="name" label="姓名">
				</el-table-column>
				<el-table-column prop="classId" label="班级">
				</el-table-column>
				<el-table-column prop="ctime" label="违纪日期">
				</el-table-column>
				<el-table-column prop="way" label="原因">
				</el-table-column>
				<el-table-column prop="minus" label="扣分">
				</el-table-column>
				<el-table-column prop="90" label="剩余学分">
				</el-table-column>
			</el-table>
			
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[10, 20, 50, 100]"
			 :page-size='page_size' layout="total, sizes, prev, pager, next, jumper" :total="score_list_length">
			</el-pagination>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			var now_date = this.getNowFormatDate(new Date())
			return {
				//存储时间选择器的数据
				timer: '',
				//日期起始
				from_time: '20170101',
				//日期截止
				to_time: now_date,
				
				score_list:[],
				
				show_list:[],
				
				//一页信息的条数
				page_size: 10,
				//当前的页码数
				page_index: 1,
			}
		},
		created:function(){
			this.dealScoreByTime()
		},
		methods: {
			dealScoreByTime:async function() {
				var dict = {
					from: this.from_time,
					to: this.to_time
				}
				var res = await this.interfc.studentApi.scoreByTime(dict)
				console.log(res)
				if(res.code == 1){
					this.score_list = res.list
					this.getShowList();
					this.$message({
						message: '加载成功',
						type: 'success'
					});
				}else{
					this.$message({
						message: '加载失败',
						type: 'error'
					});
				}
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
			
			


			//获取当前时间，格式YYYY-MM-DD
			getNowFormatDate: function(date) {
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
				var currentdate = year + seperator1 + month + seperator1 + strDate;
				return currentdate;
			},

		},
		computed: {
			score_list_length: function() {
				return this.score_list.length
			},
		},

		watch: {
			timer: function() {
				this.from_time = this.getNowFormatDate(this.timer[0])
				this.to_time = this.getNowFormatDate(this.timer[1])
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		box-sizing: border-box;
	}

	.time-picker {
		padding: 20px;
		background-color: #fff;
		margin-top: 20px;
	}
	.mian-table{
		background-color: #fff;
		padding: 20px;
		margin-top: 20px;
	}
</style>
