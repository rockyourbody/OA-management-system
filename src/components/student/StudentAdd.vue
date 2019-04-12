<template>
	<div class="student_add_all">

		<!-- 面包屑导航 -->
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>输入</el-breadcrumb-item>
			<el-breadcrumb-item>学员管理</el-breadcrumb-item>
			<el-breadcrumb-item>新建</el-breadcrumb-item>
		</el-breadcrumb>

		<div class="form_main">
			<div class="form_tile">学生添加</div>
			<!-- 进度条 -->
			<el-steps :active="active" finish-status="success">
				<el-step title="录入学生基本信息"></el-step>
				<el-step title="录入费用信息"></el-step>
				<el-step title="确定缴费时间"></el-step>
				<el-step title="完成"></el-step>
			</el-steps>

			<!-- 表格第一个部分 -->
			<div v-if="active == 0">
				<student-basic-info></student-basic-info>
			</div>

			<!-- 表格第二个部分 -->
			<div v-if="active == 1">
				<student-add-fee></student-add-fee>
			</div>
			
			<!-- 表格第三个部分 -->
			<div v-if="active == 2" class="from3">
				<student-add-fee-plan></student-add-fee-plan>
			</div>
			<!-- 表格第四个部分 -->
			<div style="text-align: center; font-size: 30px; padding: 30px;" v-if="active == 3">
				添加完成
				<i style="width: 50px; height: 50px; color: green;" class="el-icon-success"></i>
			</div>

			<div class="deal-btns">
				<el-button v-if="this.active != 0 && this.active != 3" style="margin-top: 12px;" @click="prev">上一步</el-button>
				<el-button v-if="this.active != 2 && this.active != 3" style="margin-top: 12px;" @click="next">下一步</el-button>
				<el-button v-if="this.active == 2 && this.active != 3" style="margin-top: 12px;" type="primary" @click="onSubmit">提交</el-button>
			</div>
		</div>


	</div>


</template>

<script>
	import StudentAddBasicInfo from '@/components/student/StudentAddBasicInfo.vue'
	import StudentAddFee from '@/components/student/StudentAddFee.vue'
	import StudentAddFeePlan from '@/components/student/StudentAddFeePlan.vue'
	
	export default {
		name: 'HelloWorld',
		components:{
			'student-basic-info':StudentAddBasicInfo,
			'student-add-fee':StudentAddFee,
			'student-add-fee-plan':StudentAddFeePlan
		},
		
		data() {
			return {
				
				//步骤条数据
				active: 0,

				//token
				token: window.localStorage.getItem("token"),

				user: JSON.parse(window.localStorage.getItem("user"))

			}
		},
		methods: {
			async onSubmit() {
				var dict = {
					"term": this.$store.state.StudentFeeForm.length_of_schooling,
					"tuition_way": this.$store.state.StudentFeeForm.pay_method,
					"course": this.$store.state.StudentFeeForm.major,
					"cuppon_way": this.$store.state.StudentFeeForm.sale_method,
					"tuitionOrigin": this.$store.state.StudentFeeForm.tuition,
					"tuitionMinus": this.$store.state.StudentFeeForm.cash_discount,
					"tuition": this.$store.state.StudentFeeForm.tuition,
					"room_way": this.$store.state.StudentFeeForm.accommodation,
					"room_rent": this.$store.state.StudentFeeForm.accommodation_money,
					"room_deposit": this.$store.state.StudentFeeForm.accommodation_deposit,
					"room_manage": this.$store.state.StudentFeeForm.management,
					"room_net": this.$store.state.StudentFeeForm.net_money,
					"pc_way": this.$store.state.StudentFeeForm.computer,
					"pc_rent": this.$store.state.StudentFeeForm.computer_rent,
					"pc_buy": this.$store.state.StudentFeeForm.computer_buy,
					"pc_deposit": this.$store.state.StudentFeeForm.computer_deposit,
					"cloth": this.$store.state.StudentFeeForm.uniform_money,
					"blanket": this.$store.state.StudentFeeForm.quilt_money,
					"clothflag": this.$store.state.StudentFeeForm.uniform,
					"blanketflag": this.$store.state.StudentFeeForm.quilt,
					"fee": this.$store.state.StudentExtras,
					"feeTotal": this.$store.state.StudentAllIn,
					"name": this.$store.state.StudentBasicInfoForm.name,
					"phone": this.$store.state.StudentBasicInfoForm.phone,
					"idcard": this.$store.state.StudentBasicInfoForm.id_num,
					"address": this.$store.state.StudentBasicInfoForm.address,
					"edu_level": this.$store.state.StudentBasicInfoForm.education,
					"edu_school": this.$store.state.StudentBasicInfoForm.graduate_school,
					"edu_profession": this.$store.state.StudentBasicInfoForm.graduate_time,
					"classId": this.$store.state.StudentBasicInfoForm.enter_class,
					"sex": this.$store.state.StudentBasicInfoForm.gender,
					"father": this.$store.state.StudentBasicInfoForm.father,
					"mother": this.$store.state.StudentBasicInfoForm.mother,
					"fatherPhone": this.$store.state.StudentBasicInfoForm.father_phone,
					"motherPhone": this.$store.state.StudentBasicInfoForm.mother_phone,
					"source": this.$store.state.StudentBasicInfoForm.msg_from,
					"traffic": this.$store.state.StudentBasicInfoForm.transportation,
					"enroller": this.$store.state.StudentBasicInfoForm.msg_person,
					"consultant": this.$store.state.StudentBasicInfoForm.msg_teacher,
					"remark": this.$store.state.StudentBasicInfoForm.remarks,
					"token": this.token
				}
				
				var addUserRes = await this.interfc.studentApi.addUser(dict)
				
				
				var dict2 = {
					uid : addUserRes.student._id,
					tuitionList: this.$store.state.tuitionList,
					feeList:this.$store.state.feeList
				}
				
				var paymentRes = await this.interfc.studentApi.addPayment(dict2)
				
				if(addUserRes.code == 1 && paymentRes.msg){
					this.$message({
						message: '添加成功',
						type: 'success'
					});
					this.active = 3
				}else{
					this.$message({
						message: '添加失败',
						type: 'error'
					});
				}
				
				
				console.log(addUserRes)
				console.log(paymentRes)
				
			},

			

			//步骤条方法
			next() {
				
				var boolFlag = this.$store.state.isStudentAddBasicInfoTrue
				
				if(boolFlag){
					// 跳转
					if (this.active++ > 3) this.active = 0;
				}else{
					this.$message({
						type: "error",
						message: "请填入必填信息",
					});
					return
				}
				
// 				console.log('next')
// 				if (!this.$store.state.StudentBasicInfoForm.name) {
// 					this.$message({
// 						type: "error",
// 						message: "请填入姓名"
// 					});
// 					return
// 				}
// 
// 				if (!this.$store.state.StudentBasicInfoForm.phone) {
// 					this.$message({
// 						type: "error",
// 						message: "请填入手机号"
// 					});
// 					return
// 				}
// 
// 				if (!this.$store.state.StudentBasicInfoForm.id_num) {
// 					this.$message({
// 						type: "error",
// 						message: "请填入身份证号"
// 					});
// 					return
// 				}
// 
// 				if (!this.$store.state.StudentBasicInfoForm.address) {
// 					this.$message({
// 						type: "error",
// 						message: "请填入家庭住址"
// 					});
// 					return
// 				}
// 
// 				if (!this.$store.state.StudentBasicInfoForm.gender) {
// 					this.$message({
// 						type: "error",
// 						message: "请填入性别"
// 					});
// 					return
// 				}
// 
// 				if (this.$store.state.StudentBasicInfoForm.mother == "") {
// 					this.$message({
// 						type: "error",
// 						message: "请填入母亲姓名"
// 					});
// 					return
// 				}
// 
// 				if (this.$store.state.StudentBasicInfoForm.mother_phone == "") {
// 					this.$message({
// 						type: "error",
// 						message: "请填入母亲手机号"
// 					});
// 					return
// 				}
// 

				
			},

			prev: function() {

				if (this.active-- < 0) {
					this.active = 0
				}
			},

			
		},
		computed: {
			
		},
		
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
