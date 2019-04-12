import request from './request.js'

//支出列表获取接口
//GET
var financeListUrl = 'apis/finance/expense'
//results=20
//size=500
//token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTQyNzYwNjAsImV4cCI6NzIwMDAwMH0%3D.5CShRm06dXedBdfZ4fNvZJzMt3SC4DSmWu4%2FRmoTOCU%3D

//搜索支出接口
//GET
var searchFinanceOutUrl = 'apis/finance/expense'
//name=wq
// type=0
// way=0
// from=20170403
// to=20190503
// token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTQyNzYwNjAsImV4cCI6NzIwMDAwMH0%3D.5CShRm06dXedBdfZ4fNvZJzMt3SC4DSmWu4%2FRmoTOCU%3D

//修改支出接口
//PUT
var modifyFinanceOutUrl = 'apis/finance/expense'
// day: 20190403
// money: 121
// name: "wq"
// paytime: "2019-04-03T09:37:07.955Z"
// remark: "2121"
// token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTQyNzYwNjAsImV4cCI6NzIwMDAwMH0=.5CShRm06dXedBdfZ4fNvZJzMt3SC4DSmWu4/RmoTOCU="
// type: "9"
// way: "5"
// _id: 1

//删除支出接口
//delete
var deleteFinanceOutUrl = 'apis/finance/expense'
// ctime: "2019-03-16T12:51:30.315Z"
// day: 20190403
// invoice: null
// money: 121
// name: "wq"
// remark: "2121"
// token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTQyNzYwNjAsImV4cCI6NzIwMDAwMH0=.5CShRm06dXedBdfZ4fNvZJzMt3SC4DSmWu4/RmoTOCU="
// type: 9
// utime: "2019-04-03T09:37:23.468Z"
// way: 5
// _id: 1

//添加支出接口
//post
var addFinanceOutUrl = 'apis/finance/expense'
// day: 20190403
// money: 123
// name: "lianlian"
// paytime: "2019-04-03T12:47:59.667Z"
// token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTQyOTU2MTAsImV4cCI6NzIwMDAwMH0=.sGjoTohCZOChyU66IwBrcfsOybbqa0UuP9FML+E+p6w="
// type: "9"
// way: "5"

//获取支出统计的接口
//GET
var getOutStatisticeUrl = 'apis/finance/expense/stat'
//statby=1
// from=20190305
// to=20190405
// token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVpZCI6Miwic3R1Tm8iOiIyIn0sImNyZWF0ZWQiOjE1NTQzNDIxNTEsImV4cCI6NzIwMDAwMH0%3D.dHoiPIwDN2h67ipUANXFsiboyOdMRtdkj8SL0raYTPU%3D



//获取支出列表
function financeList(params) {
  return request.request({
    url: financeListUrl,
    method: 'get',
    params: params
  })
}

//搜索支出
function searchFinanceOut(params) {
  return request.request({
    url: searchFinanceOutUrl,
    method: 'get',
    params: params
  })
}

//修改支出
function modifyFinanceOut(params) {
  return request.request({
    url: modifyFinanceOutUrl,
    method: 'put',
    params: params
  })
}

//删除支出
function deleteFinanceOut(params){
	return request.request({
	  url: deleteFinanceOutUrl,
	  method: 'delete',
	  params: params
	})
}

//添加支出
function addFinanceOut(params) {
  return request.request({
    url: financeListUrl,
    method: 'post',
    params: params
  })
}

//获取支出统计的接口
function getOutStatistice(params) {
  return request.request({
    url: getOutStatisticeUrl,
    method: 'get',
    params: params
  })
}

export default {
    financeList, searchFinanceOut, modifyFinanceOut, 
	deleteFinanceOut, addFinanceOut, getOutStatistice,
	
}