<template>
	<div class="main">

		<div class="search-box">
			<el-form ref="search_from" size="mini" :model="search_from" label-width="180">
				<el-form-item label="时间" label-width="100" style="width: 400px;">
					<el-date-picker v-model="search_from.time" style="width: 180px;" type="datetimerange" value-format="yyyyMMdd"
					 range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
					</el-date-picker>
				</el-form-item>

				<el-form-item label="周期" label-width="100" style="width: 600px;">
					<el-radio v-model="search_from.radio" label="1">按日</el-radio>
					<el-radio v-model="search_from.radio" label="2">按月</el-radio>
					<el-radio v-model="search_from.radio" label="3">按支出类型</el-radio>
					<el-radio v-model="search_from.radio" label="4">按支出方式</el-radio>
				</el-form-item>
				<el-form-item label-width="190">
					<el-button type="primary" class="el-icon-search" @click="dealStatisticsOut">统计</el-button>
				</el-form-item>
			</el-form>
		</div>

		<div style="margin: 0 auto;" class="echarts-box" v-if="is_show_echars">
			<v-chart :options="bar" />
		</div>

	</div>
</template>

<script>
	import ECharts from 'vue-echarts'
	import 'echarts/lib/chart/bar'


	export default {
		name: 'HelloWorld',
		components: {
			'v-chart': ECharts
		},
		data() {

			var now_date = this.getNowFormatDate();

			let data = []

			for (let i = 0; i <= 360; i++) {
				let t = i / 180 * Math.PI
				let r = Math.sin(2 * t) * Math.cos(2 * t)
				data.push([r, i])
			}

			return {
				search_from: {
					time: [
						"20170101",
						now_date
					],
					radio: "",
				},

				//是否显示echarts
				is_show_echars: false,


				//echartsd数据
				bar: {
					title: {
						text: '统计'
					},
					tooltip: {},
					xAxis: {
						// data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]

						data: []
					},
					yAxis: {},
					series: [{
						name: '支出',
						type: 'bar',
						// data: [5, 20, 36, 10, 10, 20]
						data: []
					}]
				},

				token: ""


			}
		},
		methods: {
			//统计支出数据
			dealStatisticsOut: async function() {
				var dict = {
					statby: this.search_from.radio,
					from: this.search_from.time[0],
					to: this.search_from.time[1],
					token: this.token
				}
				var res = await this.interfc.financeApi.getOutStatistice(dict)
				
				this.bar.xAxis.data = []
				this.bar.series[0].data = []
				
				if (res.code == 1) {
					if (res.list != 0) {
						for (var item of res.list) {
							this.bar.xAxis.data.push(item._id)
							this.bar.series[0].data.push(item.sum)
						}
						
						this.is_show_echars = true


						this.$message({
							message: '查询成功',
							type: 'success'
						});
					} else {
						this.is_show_echars = false
						this.$message({
							message: '没有相关数据',
							type: 'warning'
						});
					}
				} else {
					this.is_show_echars = false
					this.$message({
						message: '查询失败',
						type: 'error'
					});
				}
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

		created: function() {
			this.token = window.localStorage.getItem("token")
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.main {
		padding: 20px;
		box-sizing: border-box;
	}

	.search-box {
		background-color: #fff;
	}

	.search-box .el-form {
		padding-top: 17px;
		padding-left: 20px;
		box-sizing: border-box;

		display: flex;
		align-items: center;
	}

	.search-box .el-form .el-form-item {
		margin-right: 30px;
	}
	.echarts-box>div{
		margin: 0 auto;
	}
</style>
