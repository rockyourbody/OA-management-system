import axios from 'axios'
//restful api get post put delete
// 这里面封装的是各种请求方法
var host = "http://api.netallin.com/"

function request(params) {
	
	if(params.method == 'get'){
		return new Promise((resolve, reject) => {
			console.log('request. ',params)
			axios.get(host + params.url, {params:params.params})
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		})
	}
	
	if(params.method == 'post'){
		return new Promise((resolve, reject) => {
			axios.post(host + params.url, params.params)
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		})
	}
	
	if(params.method == 'put'){
		return new Promise((resolve, reject) => {
			axios.put(host + params.url, params.params)
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		})
	}
	
	if(params.method == 'delete'){
		return new Promise((resolve, reject) => {
			console.log('request. ',params)
			axios.delete(host + params.url, {data:params.params})
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		})
	}
}

export default{
	request
}
