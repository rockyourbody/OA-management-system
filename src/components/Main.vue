<template>
	<div class="Mian">


		<el-container>
			<!-- 左侧导航 -->
			<left-nav></left-nav>

			<el-container>
				<!-- 头部 -->
				<el-header>
					<header-nav></header-nav>
				</el-header>

				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>

		</el-container>


	</div>
</template>

<script>
	import LeftNav from '@/components/LeftNav'
	import HeaderNav from '@/components/HeaderNav'

	export default {
		name: 'HelloWorld',
		data() {
			return {}
		},
		methods: {

		},
		components: {
			"left-nav": LeftNav,
			"header-nav": HeaderNav
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Mian {
		height: 100%;
	}

	.el-container {
		height: 100%;
	}

	.el-main {
		padding: 0;
	}

	.el-main {
		background-color: #E9EEF3;
	}

</style>
