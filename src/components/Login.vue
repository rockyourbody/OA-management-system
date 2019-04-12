<template>
	<div class="Login">

		<!-- 核心:  :model=ruleForm2  -->
		<div class="login-box">
			<h3 class="title">东时OA系统</h3>
			<el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="pass">
					<el-input  v-model="ruleForm2.acount" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="checkPass">
					<el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
				</el-form-item>
				
				<el-form-item  label="验证码" prop="age" class="show-coder-wrap" >
					<el-input  v-model="ruleForm2.code"></el-input>
					<div class="show-code" @click="creatShowCode">{{showCode}}</div>
				</el-form-item>
					
				<el-form-item>
					<el-button type="primary" @click="submitForm">提交</el-button>
					<el-button @click="resetForm">重置</el-button>
				</el-form-item>
			</el-form>
		</div>

	
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				ruleForm2: {
					acount: '',
					password: '',
					code: ''
				},
				showCode:""
			}
		},
		created:function(){
			if(localStorage.getItem('islogin') == 1){
				this.$message({
					type:"success",
					message:"您已登录，无需重新登录"
				});
				
				
				this.$router.push({path: '/main'})
				return
			}
			
			
			this.creatShowCode()
		},
		methods: {
			creatShowCode:function(){
					this.showCode = parseInt(Math.random() * 10)+""+parseInt(Math.random() * 10)+""+parseInt(Math.random() * 10)+""+parseInt(Math.random() * 10)
			},
			submitForm:async function(){
				if(this.ruleForm2.code != this.showCode){
					this.$message({
						type:"error",
						message:"验证码错误"
					});
					return
				}
				
				var dict = {
					username:this.ruleForm2.acount,
					password:this.ruleForm2.password
				}
				var res = await this.interfc.studentApi.logIn(dict)
				
					//登录失败
				if(res.code != 1){
					this.$message({
						type:"error",
						message:"登录失败，"+ res.msg
					});
					
					return
				}
				
				//登录成功
				window.localStorage.setItem('islogin', '1');
				window.localStorage.setItem('token', res.token);
				window.localStorage.setItem('user',JSON.stringify(res.user));
				
				//将classlist存入store中
				this.$store.commit('setClassList',res.classlist)
				
				this.$message({
					type:"success",
					message:"登录成功"
				});
				
				this.$router.push({path: '/main'})
				
				
				
				
			},
			resetForm:function(){
				this.ruleForm2.acount = this.ruleForm2.code = this.ruleForm2.password = ""
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login-box {
		border: 1px solid #ccc;
		border-radius: 10px;
		padding: 20px;
		margin: 100px auto;
		width: 400px;
	}
	.el-form-item__content{
		display: flex;
		
	}

	.title {
		text-align: center;
	}
	.show-coder-wrap .el-input{
		width: 150px;
		
	}
	.show-code{
		display: inline-block;
		width: 80px;
		height: 30px;
		background-color: #eee;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
		margin-top: 10px;
	}
</style>
