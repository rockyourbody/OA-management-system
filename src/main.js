// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//表格下载
import JsonExcel from 'vue-json-excel'
Vue.component('downloadExcel', JsonExcel)

//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/store.js'


//因为在项目开发初期没有用到模块化思想进行 接口文件的创建  使用api的时候 用了原始的请求方式  api中只有请求地址
//interfc 中有模块化思想的接口文件
import api from '../static/interface/interface.js'
import interfc from '@/apis/index.js'
Vue.prototype.interfc= interfc;

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>',
	mounted(){
		// 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
// 		window.onbeforeunload = function (e) {
// 			var storage = window.localStorage;
// 			storage.clear()
// 		}
	}
})
