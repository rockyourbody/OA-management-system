<template>
	<div class="hello">
		<el-form class="form2" ref="form2" :model="form2" label-width="100px">
			<div class="form2-item">
				<div class="form2-item-left">
					<el-form-item label="学制">
						<el-select v-model="form2.length_of_schooling" placeholder="请选择学历" @change="dealSelectLengthTime">
							<el-option label="6个月" value="6"></el-option>
							<el-option label="10个月" value="10"></el-option>
							<el-option label="16个月" value="16"></el-option>
							<el-option label="30个月" value="30"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="学费缴纳方式">
						<el-radio v-model="form2.pay_method" label="1">全款</el-radio>
						<el-radio v-model="form2.pay_method" label="2">贷款</el-radio>
						<el-radio v-model="form2.pay_method" label="3">分期</el-radio>
					</el-form-item>
					<el-form-item label="优惠方式">
						<el-radio v-model="form2.sale_method" label="1">无</el-radio>
						<el-radio v-model="form2.sale_method" label="2">活动</el-radio>
						<el-radio v-model="form2.sale_method" label="3">预报名</el-radio>
						<el-radio v-model="form2.sale_method" label="4">特批</el-radio>
					</el-form-item>
				</div>
				<div class="form2-item-right">
					<el-form-item label="专业">
						<el-select v-model="form2.major" placeholder="请选择专业">
							<el-option label="Python+人工智能" value="1"></el-option>
							<el-option label="JavaEE+大数据" value="2"></el-option>
							<el-option label="UI全链路" value="3"></el-option>
							<el-option label="新媒体+电商" value="4"></el-option>
							<el-option label="云计算+运维" value="5"></el-option>
							<el-option label="Python+人工智能" value="6"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="学费： ">
						<el-input placeholder="请输入内容" v-model="form2.tuition" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="现金优惠">
						<el-input placeholder="请输入内容" v-model="form2.cash_discount"></el-input>
					</el-form-item>


				</div>
			</div>


			<div class="form2-item">
				<div class="form2-item-left">
					<el-form-item label="住宿: ">
						<el-radio-group v-model="form2.accommodation" @change="dealAccommodationChange">
							<el-radio label="1">校内</el-radio>
							<el-radio label="2">赋腾</el-radio>
							<el-radio label="3">自理</el-radio>
						</el-radio-group>
					</el-form-item>
				</div>


				<div class="form2-item-right">
					<el-form-item label="住宿押金">
						<el-input placeholder="请输入内容" v-model="form2.accommodation_deposit"></el-input>
					</el-form-item>
					<el-form-item label="宿舍租金">
						<el-input placeholder="请输入内容" v-model="form2.accommodation_money"></el-input>
					</el-form-item>
					<el-form-item label="管理费">
						<el-input placeholder="请输入内容" v-model="form2.management"></el-input>
					</el-form-item>
					<el-form-item label="网费">
						<el-input placeholder="请输入内容" v-model="form2.net_money"></el-input>
					</el-form-item>

				</div>
			</div>


			<div class="form2-item">
				<div class="form2-item-left">
					<el-form-item label="电脑: ">
						<el-radio-group v-model="form2.computer" @change="dealComputerChange">
							<el-radio label="1">购买</el-radio>
							<el-radio label="2">租用</el-radio>
							<el-radio label="3">自理</el-radio>
						</el-radio-group>
					</el-form-item>
				</div>


				<div class="form2-item-right">
					<el-form-item label="电脑购买费">
						<el-input placeholder="请输入内容" v-model="form2.computer_buy"></el-input>
					</el-form-item>
					<el-form-item label="电脑租金">
						<el-input placeholder="请输入内容" v-model="form2.computer_rent"></el-input>
					</el-form-item>
					<el-form-item label="电脑押金">
						<el-input placeholder="请输入内容" v-model="form2.computer_deposit"></el-input>
					</el-form-item>
				</div>
			</div>

			<div class="form2-item">
				<div class="form2-item-left">
					<el-form-item label="校服: ">
						<el-radio-group v-model="form2.uniform" @change="dealUniformChange">
							<el-radio label="1">购买</el-radio>
							<el-radio label="2">不购买</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="被褥: ">
						<el-radio-group v-model="form2.quilt" @change="dealQuiltChange">
							<el-radio label="1">购买</el-radio>
							<el-radio label="2">自理</el-radio>
						</el-radio-group>
					</el-form-item>
				</div>
				<div class="form2-item-right">
					<el-form-item label="校服:">
						<el-input placeholder="请输入内容" v-model="form2.uniform_money"></el-input>
					</el-form-item>
					<el-form-item label="被褥: ">
						<el-input placeholder="请输入内容" v-model="form2.quilt_money"></el-input>
					</el-form-item>
				</div>
			</div>

			<div class="form2-item form2-item-except">
				<div class="form2-item-except-in">
					<el-form-item label="应缴学费:">
						<el-input placeholder="请输入内容" v-model="form2.tuition" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="杂费合计:">
						<el-input placeholder="请输入内容" v-model="extras" :disabled="true"></el-input>
					</el-form-item>
				</div>
				<div class="form2-item-except-in">
					<el-form-item label="学杂费合计:">
						<el-input placeholder="请输入内容" v-model="allin" :disabled="true"></el-input>
					</el-form-item>
				</div>
			</div>


		</el-form>


	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				// 表格2的数据
				form2: {
					//学制
					length_of_schooling: "6",
					//学费缴费方式
					pay_method: '1',
					//优惠方式
					sale_method: '1',
					major: "1",

					//学费
					tuition: 22800,
					//现金优惠
					cash_discount: 0,

					//住宿
					accommodation: '1',
					//住宿押金
					accommodation_deposit: 600,
					//宿舍租金
					accommodation_money: 3600,
					//管理费
					management: 300,
					//网费
					net_money: 0,
					computer: '1',
					//电脑购买价格
					computer_buy: 1700,
					//电脑租用
					computer_rent: 0,
					//电脑押金
					computer_deposit: 0,
					//校服
					uniform: '1',
					//校服价格
					uniform_money: 300,
					//被褥
					quilt: '1',
					//被褥价格
					quilt_money: 200
				},
			}
		},
		methods: {
			//学习时长改变触发的方法
			dealSelectLengthTime: function(value) {
				console.log(value)

				if (value == 6) {
					//设置住宿信息
					this.form2.accommodation_money = 3600;
					this.form2.management = 300
					
					//设置网费
					if(this.form2.accommodation == 2){
						this.form2.net_money = 160;
					}else{
						this.form2.net_money = 0;
					}

					//设置电脑租用信息
					if (this.form2.computer == 2) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 720
					}
				}
				if (value == 10) {
					//设置住宿信息
					this.form2.accommodation_money = 6000;
					this.form2.management = 700
					
					//设置网费
					if(this.form2.accommodation == 2){
						this.form2.net_money = 300;
					}else{
						this.form2.net_money = 0;
					}

					//设置电脑租用信息
					if (this.form2.computer == 2) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 1200
					}
				}
				if (value == 16) {
					//设置住宿信息
					this.form2.accommodation_money = 9600;
					this.form2.management = 1000
					
					//设置网费
					if(this.form2.accommodation == 2){
						this.form2.net_money = 400;
					}else{
						this.form2.net_money = 0;
					}

					//设置电脑租用信息
					if (this.form2.computer == 2) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 1920
					}
				}
				if (value == 30) {
					//设置住宿信息
					this.form2.accommodation_money = 18000;
					this.form2.management = 2500
					
					//设置网费
					this.form2.net_money = 0;

					//设置电脑租用信息
					if (this.form2.computer == 2) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 3600
					}
				}

			},

			//住宿方式改变
			dealAccommodationChange: function(index) {
				console.log(index)
				if (index == 3) {
					this.form2.accommodation_deposit = 0;
					this.form2.accommodation_money = 0;
					this.form2.management = 0;
					this.form2.net_money = 0;
				} else if(index == 2){
					this.form2.accommodation_deposit = 600;
					if (this.form2.length_of_schooling == 6) {
						this.form2.accommodation_money = 3600;
						this.form2.management = 300
						this.form2.net_money = 160;
					}
					if (this.form2.length_of_schooling == 10) {
						this.form2.accommodation_money = 6000;
						this.form2.management = 700
						this.form2.net_money = 300;
					}
					if (this.form2.length_of_schooling == 16) {
						this.form2.accommodation_money = 9600;
						this.form2.management = 1000
						this.form2.net_money = 480;
					}
					if (this.form2.length_of_schooling == 30) {
						this.form2.accommodation_money = 18000;
						this.form2.management = 2500
						this.form2.net_money = 0;
					}
				}else if(index == 1){
					this.form2.accommodation_deposit = 600;
					if (this.form2.length_of_schooling == 6) {
						this.form2.accommodation_money = 3600;
						this.form2.management = 300
						this.form2.net_money = 0;
					}
					if (this.form2.length_of_schooling == 10) {
						this.form2.accommodation_money = 6000;
						this.form2.management = 700
						this.form2.net_money = 0;
					}
					if (this.form2.length_of_schooling == 16) {
						this.form2.accommodation_money = 9600;
						this.form2.management = 1000
						this.form2.net_money = 0;
					}
					if (this.form2.length_of_schooling == 30) {
						this.form2.accommodation_money = 18000;
						this.form2.management = 2500
						this.form2.net_money = 0;
					}
				}
			},

			//电脑方式改变
			dealComputerChange: function(index) {
				if (index == 1) {
					this.form2.computer_buy = 1700
					this.form2.computer_deposit = 0;
					this.form2.computer_rent = 0
				}
				if (index == 2) {
					if (this.form2.length_of_schooling == 6) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 720
					}
					if (this.form2.length_of_schooling == 10) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 1200
					}
					if (this.form2.length_of_schooling == 16) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 1920
					}
					if (this.form2.length_of_schooling == 30) {
						this.form2.computer_deposit = 1700
						this.form2.computer_rent = 3600
					}
				}
				if (index == 3) {
					this.form2.computer_buy = 0
					this.form2.computer_deposit = 0;
					this.form2.computer_rent = 0
				}
			},

			//校服状态改变
			dealUniformChange: function(index) {
				if (index == 1) {
					this.form2.uniform_money = 300
				} else {
					this.form2.uniform_money = 0
				}
			},

			//被褥状态改变
			dealQuiltChange: function(index) {
				if (index == 1) {
					this.form2.quilt_money = 200
				} else {
					this.form2.quilt_money = 0
				}
			},
		},
		computed: {
			//杂费
			extras() {
				return this.form2.accommodation_deposit + this.form2.accommodation_money + this.form2.management + this.form2.net_money +
					this.form2.computer_buy + this.form2.computer_rent + this.form2.uniform_money + this.form2.quilt_money
			},
			//总费用
			allin() {
				return this.extras + this.form2.tuition - this.form2.cash_discount
			}
		},
		created:function(){
			this.form2 = this.$store.state.StudentFeeForm
			
			this.$store.commit("SetStudentExtras",this.extras)
			this.$store.commit("SetStudentAllIn",this.allin)
		},
		beforeUpdate:function(){
			this.$store.commit("SetStudentFeeForm",this.form2)
		},
		watch:{
			extras(newValue,oldValue){
				this.$store.commit("SetStudentExtras",newValue)
			},
			allin(newValue,oldValue){
				this.$store.commit("SetStudentAllIn",newValue)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
