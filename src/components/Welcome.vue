<template>
	<div class="welcome">
		<div class="block">
			<el-carousel height="100%">
				<el-carousel-item v-for="item in list" :key="item" >
					<img :src="item" alt="">
				</el-carousel-item>
			</el-carousel>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Welcome',
		data() {
			return {
				list:[
					'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide1.jpg?raw=true',
					'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide2.jpg?raw=true',
					'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide3.jpg?raw=true',
					'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide4.jpg?raw=true'
				]
			}
		},
		methods: {

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}


	.welcome {
		width: 100%;
		height: 100%;
	}

	.block,
	.block img {
		width: 100%;
		height: 100%;
	}

	.el-carousel,
	.el-carousel-item {
		width: 100%;
		height: 100%;
	}
	
</style>
