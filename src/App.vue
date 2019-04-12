<template>
	<div id="app">
		
		<!-- login / main -->
		<router-view />
		
	</div>


</template>

<script>

	export default {
		name: 'App',
		data: function() {
			return {
				
			}
		},
		
		created:function(){
			
// 			//判断是否已经登录，若是没有登录，则跳转登录
// 			if(localStorage.getItem('islogin') == 1){
// 				this.$router.push({path: '/main'})
// 				return
// 			}else{
// 				this.$router.push({path: '/login'})
// 				return
// 			}
		},
		
		methods: {
			
		}
	}
</script>

<style>
	#app {
		height: 100%;
	}
	a{
		text-decoration: none;
	}
	html {
		height: 100%;
	}

	body {
		margin: 0;
		height: 100%;
	}
	

</style>
