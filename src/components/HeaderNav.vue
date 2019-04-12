<template>
	<div class="header-nav">

		<div>
			<i class="el-icon-arrow-left" v-if="!isCollapse" @click="() => {isCollapse = !isCollapse}"></i>
			<i class="el-icon-arrow-right" v-if="isCollapse" @click="() => {isCollapse = !isCollapse}"></i>
		</div>
		<div class="icon-left">
			<i class="el-icon-rank"></i>
			<el-badge :value="12" class="item">
				<i class="el-icon-bell"></i>
			</el-badge>
			<div class="user-header">
				<img src="http://api.netallin.com/static/media/04.541539c2.jpg" alt="">
				
				<div class="header-hover">
					<div class="hover-item">
						<div class="hover-item-title">用户中心</div>
						<div class="hover-item-content">你好-{{user.username}}</div>
						<div class="hover-item-content">个人信息</div>
						<div class="hover-item-content" @click="dealLogout">退出登录</div>
					</div>
					<div class="hover-item">
						<div class="hover-item-title">设置中心</div>
						<div class="hover-item-content">个人设置</div>
						<div class="hover-item-content">系统设置</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				isCollapse: false,
				user:{}
			}
		},

		created: function() {
			this.user = JSON.parse(localStorage.getItem('user'))
		},


		methods: {
			dealLogout:function(){
				localStorage.removeItem('user')
				localStorage.removeItem('islogin')
				localStorage.removeItem('token')
				this.$router.push({path: '/login'})
			}
		},
		watch: {
			isCollapse: function(newValue, oldValue) {

				if (newValue == false) {
					this.$store.commit("setisFlex", false)
				} else {
					this.$store.commit("setisFlex", true)
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-icon-arrow-left,
	.el-icon-arrow-right
	 {
		margin-top: 19px;
	}

	.el-icon-arrow-left:before,
	.el-icon-arrow-right:before,
	.el-icon-bell:before,
	.el-icon-rank:before {
		display: block;
		transform: scale(1.5);
		text-align: center;
	}

	.header-nav {
		display: flex;
		justify-content: space-between;
		height: 100%;
	}
	.icon-left{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.icon-left>* {
		margin-right: 40px;
	}
	.user-header{
		position: relative;
	}
	.user-header:hover .header-hover{
		display: block;
	}
	.header-hover{
		display: none;
		width: 140px;
		height: 220px;
		position: absolute;
		border: 1px solid #eee;
		border-radius: 5px;
		left: -96px;
		top: 30px;
		z-index: 999;
		background-color: #fff;
		padding: 8px;
		box-sizing: border-box;
	}
	.hover-item-title{
		color: #E9E9E9;
		height: 28px;
		line-height: 28px;
	}
	.hover-item-content{
		cursor: pointer;
		color: #919191;
		height: 28px;
		box-sizing: border-box;
		line-height: 28px;
		padding-left: 18px;
	}
	.hover-item-content:hover{
		background-color: #eee;
	}
	.user-header img{
		width: 30px;
		height: 30px;
		border-radius: 50%;
		
	}
</style>
