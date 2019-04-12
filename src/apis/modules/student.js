import request from './request.js'


var studentUrl = "apis/student"
var paymentUrl = "apis/student/payment"


//搜索学生学分的接口
//GET
var searchScoreUrl = 'apis/student/scores'
//http://api.netallin.com/apis/student/scores?name=%09%E6%BD%87%E6%BD%87vxzczxc&id=&classId=&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTQwODMxODQsImV4cCI6NzIwMDAwMH0%3D.smm9NAyl0wqvY7KYD8iDqP8U0fRqYwDnm3Xm6kz%2FdZg%3D

//按时间排序的查询接口
var scoreMinusUrl = 'apis/student/score/minus'
//http://api.netallin.com/apis/student/score/minus?from=20190401&to=20190501&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTQxMDIwNjUsImV4cCI6NzIwMDAwMH0%3D.Ud9lAotOgprbM5h0%2BH5nX4x852zJkuAwDZRDkT5qK2c%3D

//按学生下载学分列表的地址
var scoreByStudentUrl = 'apis/student/scores'

//扣分记录中点击查看扣分记录的
//GET
var studentScoreRecordUrl = 'apis/student/score'
// var dict = {
// 	_id:591,
// 	term:6,
// 	name:%E9%A9%AC%E5%BD%AA,
// 	classId:1901,
// 	enroller:%E5%A7%9C%E6%98%8E%E6%98%9F,
// 	id:mb1903131800590,
// 	ctime:2019-03-13T10:10:50.924Z,
// 	score:-41,
// 	uid:591,
// 	token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM5MDYxNzYsImV4cCI6NzIwMDAwMH0%3D.8kzWz5Vgp9dPLC1hqWR4Gbcsk26n1rbso7g%2F0glrKcE%3D'
// }

//添加扣分的接口
//POST
var studentAddWrongUrl = 'apis/student/score'
//参数
// {
// 	classId: "1901"
// 	ctime: "2019-03-30T03:07:06.080Z"
// 	day: "20190330"
// 	enroller: ""
// 	id: "mb1903301101318"
// 	minus: 3
// 	name: "213"
// 	term: 6
// 	token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM5MDYxNzYsImV4cCI6NzIwMDAwMH0=.8kzWz5Vgp9dPLC1hqWR4Gbcsk26n1rbso7g/0glrKcE="
// 	uid: 1319
// 	way: "0"
// 	_id: 1319
// }


// 获取学生列表的接口
//get
var studentListUrl = 'apis/student?results=20&size=500&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0%3D.bCWpCikQafJMCqMl6UaYoNXDH%2F%2Bp84%2BofoHqm98HC9c%3D'

//学生列表搜索接口
//get
var ListSerachUrl = 'apis/student/searchStudents'
//参数:
/*
{
    "page":1,
    "condition":{
        "name":"李雷",
        "id":"",
        "classId":"软工B班",
        "paystate":-1,
        "status":"",
        "idcard":""},
        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0=.bCWpCikQafJMCqMl6UaYoNXDH/+p84+ofoHqm98HC9c="
    }
*/

//获取费用接口: 点击查看执行
//类型: GET
var feeUrl = "apis/student/fee/"
//http://api.netallin.com/apis/student/fee/?uid=622&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0%3D.bCWpCikQafJMCqMl6UaYoNXDH%2F%2Bp84%2BofoHqm98HC9c%3D
//参数1:  uid=      注意, 这个uid是用户的id
//范例:  http://api.netallin.com/apis/student/fee/?uid=622


//登录接口
//POST
var loginUrl = "apis/user/login"
//参数:
//  username:""
//  password:""


//=============添加学生start===============================
//添加学费计划的方法
function addPayment(params) {
  return request.request({
    url: paymentUrl,
    method: 'post',
    params: params
  })
}

//添加学生的方法
function addUser(params) {
    return request.request({
        url: studentUrl,
        method: 'post',
        params: params
    })
}
//=============添加学生end===============================

//=============学生评分statr===============================
//按学生下载学分列表的方法
function scoreByStudent(params){
	return request.request({
	  url: scoreByStudentUrl,
	  method: 'get',
	  params: params
	})
}


//学分列表中 搜索方法
function searchScore(params){
	return request.request({
	  url: searchScoreUrl,
	  method: 'get',
	  params: params
	})
} 
// 学分列表中 按时间进行查找的方法
function scoreByTime(params){
	return request.request({
	  url: scoreMinusUrl,
	  method: 'get',
	  params: params
	})
}

function studentScoreRecord(params){
	return request.request({
	  url: studentScoreRecordUrl,
	  method: 'get',
	  params: params
	})
}
//添加扣分的接口
function studentAddWrong(params){
	return request.request({
	  url: studentAddWrongUrl,
	  method: 'post',
	  params: params
	})
}
//=============学生评分end===============================
//登录方法
function logIn(params){
	return request.request({
	  url: loginUrl,
	  method: 'post',
	  params: params
	})
}

//=========学生列表start================
//获取学生列表
function studentList(params){
	return request.request({
	  url: studentListUrl,
	  method: 'get',
	  params: params
	})
}
//学生列表搜索
function ListSerach(params){
	return request.request({
	  url: ListSerachUrl,
	  method: 'post',
	  params: params
	})
}
//获取费用信息接口
function fee(params){
	return request.request({
	  url: feeUrl,
	  method: 'get',
	  params: params
	})
}

//=========学生列表end================

export default {
    addUser, addPayment,searchScore,
	scoreByTime, scoreByStudent, studentScoreRecord,
	studentAddWrong, logIn, studentList,
	ListSerach, fee, 
}