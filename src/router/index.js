import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import StudentAdd from '@/components/student/StudentAdd'
import StudentScore from '@/components/student/StudentScore'
import StudentEmployment from '@/components/student/StudentEmployment'
import Login from '@/components/Login'
import Main from '@/components/Main'
import StudentList from '@/components/StudentList'
import StudentDown from '@/components/StudentDown'
import StudentExport from '@/components/StudentExport'
import Welcome from '@/components/Welcome'

import FinanceOut from '@/components/finance/FinanceOut'


Vue.use(Router)
var r = new Router({
	routes: [

		//在刚打开页面的时候，这个重定向是不起作用的，因为在app.vue中已经进行了相关跳转。

		{
			path: '/',
			name: 'HelloWorld',
			redirect: '/main'
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}, 
		{
			path: '/main',
			name: 'main',
			component: Main,
			redirect: "/main/welcome",
			children: [{
					path: '/main/student_add',
					name: 'StudentAdd',
					component: StudentAdd
				}, {
					path: '/main/student_list',
					name: 'StudentList',
					component: StudentList
				}, {
					path: '/main/welcome',
					name: 'Welcome',
					component: Welcome
				}, {
					path: '/main/student_export',
					name: 'StudentExport',
					component: StudentExport
				}, {
					path: '/main/student_score',
					name: 'StudentScore',
					component: StudentScore
				}, {
					path: '/main/student_down',
					name: 'StudentDown',
					component: StudentDown
				}, {
					path: '/main/student_employment',
					name: 'StudentDown',
					component: StudentEmployment
				}, {
					path: '/main/finance_out',
					name: 'FinanceOut',
					component: FinanceOut
				}
				



			]
		}
	]
})


//router定义的下面, 每个路由跳转之前, 执行回调函数
r.beforeEach((to, from, next) => {
	// console.log("beforeEach");
	// console.log("\tfrom.path=" + from.path);
	// console.log("\tto.path=" + to.path);

	console.log("beforeEach")

	//是否要进入login的布尔flag值
	var isShowLogin = false
	if (to.path != "/login") {
		//检测是否已经登录
		if (localStorage.islogin == undefined || localStorage.islogin != 1) {
			
			isShowLogin = true
		}
	}

	if (isShowLogin == true) { //如果需要跳入登录界面，则跳入登录界面
		r.push("/login")
	} else {//若不需要跳转登录，则继续跳转
		//继续跳转
		next();
	}

});

export default r;
