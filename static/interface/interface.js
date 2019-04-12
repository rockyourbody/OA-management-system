/**
 * 废弃的文件
 * 
 */




var host = "http://api.netallin.com/"


//登陆接口
//类型: POST
//Content-Type:application/json;charset=utf-8
var loginUrl = host + "apis/user/login"
//参数:
//  username:""
//  password:""


//获取班级列表
//类型: GET
var classListUrl = host + "apis/class"
//参数:
//  username:""
//  password:""
//范例: http://api.netallin.com/apis/class

//获取用列表
//类型: GET
var userListUrl = host +
	"apis/student?results=20&size=500&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0%3D.bCWpCikQafJMCqMl6UaYoNXDH%2F%2Bp84%2BofoHqm98HC9c%3D"
//参数:
//  默认参数results和size
//范例:  http://api.netallin.com/apis/student?results=20&size=500&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0%3D.bCWpCikQafJMCqMl6UaYoNXDH%2F%2Bp84%2BofoHqm98HC9c%3D

//用户搜索接口
//类型: POST
//Content-Type:application/json;charset=utf-8
var serachUrl = host + "apis/student/searchStudents"
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
var feeUrl = host + "apis/student/fee/"
//http://api.netallin.com/apis/student/fee/?uid=622&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0%3D.bCWpCikQafJMCqMl6UaYoNXDH%2F%2Bp84%2BofoHqm98HC9c%3D
//参数1:  uid=      注意, 这个uid是用户的id
//范例:  http://api.netallin.com/apis/student/fee/?uid=622


//添加学员接口
//类型: POST
//Content-Type:application/json;charset=utf-8


//====================  关于学分 ==================================
//获取学分列表接口
//类型 Get
var scoreUrl = host + "apis/student/scores"

//获取学分列表按时间排序接口
var scoreMinusUrl = host + 'apis/student/score/minus?from=20190329&to=20190428'

//获取单个学生的扣分记录的接口
//类型:GET
var studentScore = host + 'apis/student/score'
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

// http://api.netallin.com/apis/student/score?_id=591&term=6&name=%E9%A9%AC%E5%BD%AA&classId=1901&enroller=%E5%A7%9C%E6%98%8E%E6%98%9F&id=mb1903131800590&ctime=2019-03-13T10:10:50.924Z&score=-41&uid=591&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM5MDYxNzYsImV4cCI6NzIwMDAwMH0%3D.8kzWz5Vgp9dPLC1hqWR4Gbcsk26n1rbso7g%2F0glrKcE%3D


//添加违纪接口
//POST
var studentAddWrongUrl = host + '/apis/student/score'
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










var addUserUrl = host + "apis/student"
//参数:
/*
{
    "term":"6",
    "tuition_way":"1",
    "course":"1",
    "cuppon_way":"0",
    "tuitionOrigin":22800,
    "tuitionMinus":0,
    "tuition":22800,
    "room_way":"2",
    "room_rent":3600,
    "room_deposit":600,
    "room_manage":300,
    "room_net":180,
    "pc_way":"1",
    "pc_rent":0,
    "pc_buy":1700,
    "pc_deposit":0,
    "cloth":300,
    "blanket":200,
    "clothflag":"1",
    "blanketflag":"1",
    "fee":6880,
    "feeTotal":29680,
    "name":"潇潇",
    "phone":"13800000000",
    "idcard":"110100201101010001",
    "address":"山西太原",
    "edu_level":"3",
    "edu_school":"",
    "edu_profession":"",
    "classId":"1901",
    "sex":"0",
    "father":"",
    "mother":"mom",
    "fatherPhone":"",
    "motherPhone":"13000000001",
    "source":"3",
    "traffic":"1",
    "enroller":"",
    "consultant":"",
    "remark":"",
    "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM3MzkxNjEsImV4cCI6NzIwMDAwMH0=.bCWpCikQafJMCqMl6UaYoNXDH/+p84+ofoHqm98HC9c="
}
*/

//更改缴费计划的接口
//POST
var paymentUrl = host + 'apis/student/payment'
// var dict = {
// 	{
// 		"term": "10",
// 		"tuition_way": "1",
// 		"course": "1",
// 		"cuppon_way": "0",
// 		"tuitionOrigin": 33800,
// 		"tuitionMinus": 0,
// 		"tuition": 33800,
// 		"room_way": "2",
// 		"room_rent": 6000,
// 		"room_deposit": 600,
// 		"room_manage": 700,
// 		"room_net": 300,
// 		"pc_way": "1",
// 		"pc_rent": 0,
// 		"pc_buy": 1700,
// 		"pc_deposit": 0,
// 		"cloth": 300,
// 		"blanket": 200,
// 		"clothflag": "1",
// 		"blanketflag": "1",
// 		"fee": 9800,
// 		"feeTotal": 43600,
// 		"name": "1",
// 		"phone": "13800000000",
// 		"idcard": "110100201101010253",
// 		"address": "山西太原",
// 		"edu_level": "3",
// 		"edu_school": "",
// 		"edu_profession": "1",
// 		"classId": "软工B班",
// 		"sex": "1",
// 		"father": "",
// 		"mother": "mom",
// 		"fatherPhone": "",
// 		"motherPhone": "13000000001",
// 		"source": "3",
// 		"traffic": "1",
// 		"enroller": "",
// 		"consultant": "",
// 		"remark": "",
// 		"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTM5MzYxNzMsImV4cCI6NzIwMDAwMH0=.2yzTKD+3TNPAB5U6lMJucIoq5E5hXcZOwJqS7figENU=",
// 		"uid": 1589,
// 		"tuitionList": [{
// 				"key": 0,
// 				"deadline": "2019-03-30",
// 				"money": 338,
// 				"paid": 0,
// 				"left": 338,
// 				"tranId": "190330170008591494"
// 			},
// 			{
// 				"key": 1,
// 				"deadline": "2019-04-29",
// 				"money": 33462,
// 				"tranId": "1903301700187321027",
// 				"paid": 0,
// 				"left": 33462
// 			}
// 		],
// 		"feeList": [{
// 				"key": 0,
// 				"deadline": "2019-03-30",
// 				"money": 980,
// 				"paid": 0,
// 				"left": 980,
// 				"tranId": "190330170008641241"
// 			},
// 			{
// 				"key": 1,
// 				"deadline": "2019-04-29",
// 				"money": 8820,
// 				"tranId": "1903301700252441137",
// 				"paid": 0,
// 				"left": 8820
// 			}
// 		]
// 	}
// }
// 




export default {
	loginUrl,
	classListUrl,
	userListUrl,
	serachUrl,
	feeUrl,
	addUserUrl,
	scoreUrl,
	scoreMinusUrl,
	studentAddWrongUrl, //添加违纪的接口
	//单人的获取学分扣分记录的接口
	studentScore,

	paymentUrl, //更改缴费计划的接口
}
