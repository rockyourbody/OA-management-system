<template>
	<div class="hello">
		
		<!-- 学费 -->
		<div class="form3-item-title">学费-缴费时间(总额：{{this.$store.state.StudentAllIn}})</div>
		<div class="form3-table">
			<div class="form3-table-row">
				<div class="form3-table-block">缴费时间</div>
				<div class="form3-table-block">金额</div>
				<div class="form3-table-block">操作</div>
			</div>
			<div class="form3-table-row" v-for="(item,index) in tuitionList" :key="index">
				<div class="form3-table-block">
					<span v-if="!item.timeinput" @click="item.timeinput = !item.timeinput" autofocus="autofocus">{{item.deadline}}</span>
					<el-input v-if="item.timeinput" @blur="item.timeinput = !item.timeinput" v-model="item.deadline" autofocus></el-input>
				</div>
				<div class="form3-table-block">
					<span v-if="!item.moneyinput" @click="item.moneyinput = !item.moneyinput" autofocus="autofocus">{{item.left}}</span>
					<el-input v-if="item.moneyinput" @blur="item.moneyinput = !item.moneyinput" v-model="item.left" autofocus></el-input>
				</div>
				<div class="form3-table-block"><i class="el-icon-delete" @click="dealDeleteAllInItem(index)"></i> <i class="el-icon-plus" @click="dealAddAllInItem(index)"></i></div>
			</div>
		</div>
		
		<!-- 杂费 -->
		<div class="form3-item-title">杂费-缴费时间(总额：{{this.$store.state.StudentExtras}})</div>
		<div class="form3-table">
			<div class="form3-table-row">
				<div class="form3-table-block">缴费时间</div>
				<div class="form3-table-block">金额</div>
				<div class="form3-table-block">操作</div>
			</div>
			
			<div class="form3-table-row" v-for="(item,index) in feeList" :key="index">
				<div class="form3-table-block">
					<span v-if="!item.timeinput" @click="item.timeinput = !item.timeinput" autofocus="autofocus">{{item.deadline}}</span>
					<el-input v-if="item.timeinput" @blur="item.timeinput = !item.timeinput" v-model="item.deadline" autofocus></el-input>
				</div>
				<div class="form3-table-block">
					<span v-if="!item.moneyinput" @click="item.moneyinput = !item.moneyinput" autofocus="autofocus">{{item.left}}</span>
					<el-input v-if="item.moneyinput" @blur="item.moneyinput = !item.moneyinput" v-model="item.left" autofocus></el-input>
				</div>
				<div class="form3-table-block"><i class="el-icon-delete" @click="dealDeleteExtrasItem"></i> <i class="el-icon-plus" @click="dealAddExtrasItem"></i></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				//表格3的数据
				form3: {
					//四个input框的状态
					input1: false,
					input2: false,
					input3: false,
					input4: false
				},
				
				tuitionList:[
					
				],
				
				feeList:[
					
				],
				
				allin : '',
				extras : ''
				
			}
		},
		created:function(){
			this.allin = this.$store.state.StudentAllIn
			this.extras = this.$store.state.StudentExtras
			
			
			this.tuitionList = this.$store.getters.getTuitionList
			this.feeList = this.$store.getters.getFeeList
			
			// this.tuitionList.push({key: 0, deadline: "2019-03-30", money: this.allin, paid: 0, left: this.allin, timeinput:false, moneyinput:false})
			
			// this.feeList.push({key: 0, deadline: "2019-03-30", money: this.extras, paid: 0, left: this.extras, timeinput:false, moneyinput:false})
		},
		
		beforeUpdate:function(){
			this.$store.commit("SettuitionList",this.tuitionList)
			this.$store.commit("SetfeeList",this.feeList)
		},
		methods: {
			dealDeleteAllInItem:function(index){
				if(this.tuitionList.length == 0){
					return
				}else{
					this.tuitionList.splice(index,1)
				}
			},
			dealAddAllInItem:function(index){
				var temp = 0;
				for(var item of this.tuitionList){
					temp = parseInt(temp) + parseInt(item.left)
				}
				
				console.log('temp',temp)
				
				if(temp == this.allin){
					return
				}else{
					var key = this.tuitionList.length
					var left = parseInt(this.allin) - parseInt(temp)
					this.tuitionList.push({key: key, deadline: "2019-03-30", money: this.allin, paid: 0, left: left, timeinput:false, moneyinput:false})
				}
			},
			dealDeleteExtrasItem:function(){
				if(this.feeList.length == 0){
					return
				}else{
					this.feeList.splice(index,1)
				}
			},
			dealAddExtrasItem:function(){
				var temp = 0;
				for(var item of this.feeList){
					temp = parseInt(temp) + parseInt(item.left)
				}
				
				console.log('temp',temp)
				
				if(temp == this.extras){
					return
				}else{
					var key = this.feeList.length
					var left = parseInt(this.extras) - parseInt(temp)
					this.feeList.push({key: key, deadline: "2019-03-30", money: this.extras, paid: 0, left: left, timeinput:false, moneyinput:false})
				}
			},
			
			
			//获取当前时间，格式YYYY-MM-DD
			getNowFormatDate: function() {
				var date = new Date();
				var seperator1 = "-";
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
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
