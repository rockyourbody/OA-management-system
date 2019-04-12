import Vue from 'vue'

//vuex
import Vuex from 'vuex'

//引入interface文件
// import api from '@/interface/interface.js'

//加载Vuex
Vue.use(Vuex)

//导入axios VueAxios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const store = new Vuex.Store({
	//state,表示状态，作用是储存各个组件共用的数据
	state: {
		//记录首页的竖向导航栏是否折叠
		isFlex: false,
		//班级列表
		classList: [],

		//======学生添加的数据=========
		//基本信息
		StudentBasicInfoForm: {},
		//费用信息
		StudentFeeForm: {

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
		//费用计划
		StudentFeePlan: {},
		//总金额
		StudentAllIn: '',
		//杂费金额
		StudentExtras: '',
		
		//费用计划的总费用计划列表
		tuitionList:[
			
		],
		//费用计划的杂费计划列表
		feeList:[
			
		],
		
		//记录 studentAddBasicInfo 中的数据是否验证成功
		isStudentAddBasicInfoTrue:false
		//======学生添加的数据=========
	},


	//getters,表示获取定时器，添加一个函数，用于获取state中的数据
	//调用方式
	// {{ $store.getters.getNavTitle }}
	// this.$store.getters.getNavTitle
	getters: {
		getNavTitle: function(state) { //***注意这个参数***
			return state.navTitle
		},
		
		getTuitionList:function(state){
			state.tuitionList.push({key: 0, deadline: "2019-03-30", money: state.StudentAllIn, paid: 0, left: state.StudentAllIn, timeinput:false, moneyinput:false})
			return state.tuitionList
		},
		
		getFeeList:function(state){
			state.feeList.push({key: 0, deadline: "2019-03-30", money: state.StudentExtras, paid: 0, left: state.StudentExtras, timeinput:false, moneyinput:false})
			return state.feeList
		}
	},


	//3.mutations ，修改state中的数据，  需要在这里写函数
	// 调用方式
	// this.$store.commit("setNavTitle","book")
	mutations: {
		
		
		
		//设置，左侧导航栏是否折叠
		setisFlex: function(state, title) {
			state.isFlex = title
		},

		//班级列表
		setClassList: function(state, title) {
			state.classList = title
		},

		SetStudentBasicInfoForm: function(state, title) {
			state.StudentBasicInfoForm = title
			console.log(123)
		},
		SetStudentFeeForm: function(state, title) {
			state.StudentFeeForm = title
			console.log(456)
		},
		SetStudentFeePlan: function(state, title) {
			state.StudentFeePlan = title
			console.log(789)
		},
		SetStudentAllIn: function(state, title) {
			state.StudentAllIn = title
		},
		SetStudentExtras: function(state, title) {
			state.StudentExtras = title
		},
		
		//设置总费用计划列表
		SettuitionList: function(state, title) {
			state.tuitionList = title
		},
		//设置杂费计划列表
		SetfeeList: function(state, title) {
			state.feeList = title
		},
		
		//设置 StudentAddBasic中的数据
		SetIsStudentAddBasicInfoTrue:function(state, title){
			state.isStudentAddBasicInfoTrue = title
		}
	},

	//4.action 表示动作， 要求异步修改state中的值, 需要在这里编写函数
	actions: {
		requestBookList: function() {
			var url = api.bookListUrl
			axios.get(url).then(res => {

				//调用mutations中的方法
				this.commit("setBookList", res.data.result)
			}).catch(error => {
				console.log(error)
			})
		}
	}
})


export default store;
