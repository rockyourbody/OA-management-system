<template>
	<div class="finance-out">
		<div class="top-btns">
			<el-button type="primary" @click="active_page = 0" plain>新增支出/查询支出</el-button>
			<el-button type="primary" @click="active_page = 1"  plain>支出统计</el-button>
		</div>
		
		<div v-if="active_page == 0">
			<finance-out-list></finance-out-list>
		</div>
		
		<div v-if="active_page == 1">
			<finance-out-statistics></finance-out-statistics>
		</div>
		
	</div>
</template>

<script>
	import FinanceOutList from '@/components/finance/FinanceOutList.vue'
	import FinanceOutStatistics from '@/components/finance/FinanceOutStatistics.vue'
	
	export default {
		name: 'HelloWorld',
		data() {
			return {
				active_page:0
			}
		},
		methods: {
			
		},
		components:{
			'finance-out-list':FinanceOutList,
			'finance-out-statistics':FinanceOutStatistics
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.finance-out{
		padding: 20px;
		box-sizing: border-box;
	}
</style>
