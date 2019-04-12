<template>
	<div class="left_nav">

		<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @select="handleSelect" :collapse="$store.state.isFlex"
		 background-color="#001529" text-color="#fff" active-text-color="#ffd04b">
			<router-link to="/main/welcome">
				<el-menu-item index="1">
					<i class="el-icon-menu"></i>
					<span slot="title">首页</span>
				</el-menu-item>
			</router-link>

			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">学员管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="2-1">学员查询</el-menu-item>
					<el-menu-item index="2-2">添加学员</el-menu-item>
					<el-menu-item index="2-3">导出学员</el-menu-item>
					<el-menu-item index="2-4">学分管理</el-menu-item>
					<el-menu-item index="2-5">末班管理</el-menu-item>
					<el-menu-item index="2-6">就业信息</el-menu-item>
				</el-menu-item-group>
			</el-submenu>

			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">财务管理</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="3-1">学员查询</el-menu-item>
					<el-menu-item index="3-2">欠费查询</el-menu-item>
					<el-menu-item index="3-3">学费统计</el-menu-item>
					<el-menu-item index="3-4">缴费</el-menu-item>
					<el-menu-item index="3-5">支出</el-menu-item>
				</el-menu-item-group>
			</el-submenu>

			<el-menu-item index="4">
				<i class="el-icon-setting"></i>
				<span slot="title">关于</span>
			</el-menu-item>
		</el-menu>

	</div>
</template>

<script>
	export default {
		name: 'LeftNav',
		data() {
			return {
				isCollapse: false
			}
		},
		methods: {
			handleSelect(key, keyPath){
				console.log('handleClose', key, keyPath);

				var dict = {
					"2-1": "/main/student_list",
					"2-2": "/main/student_add",
					"2-3": "/main/student_export",
					"2-4": "/main/student_score",
					"2-5": "/main/student_down",
					"2-6": "/main/student_employment",
					"3-5": "/main/finance_out"
				}

				var path = dict[key];
				if (path != undefined) {
					this.$router.push(path)
				}
			}

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
		height: 1000px;
		background-color: #001529;
	}



	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}

	.el-container {
		height: 100%;
	}

	.left_nav {
		height: 100%;
		background-color: #1890ff !important;
	}

	.el-menu {
		height: 100%;
	}



	.is-active {
		background-color: #1890ff !important;
		color: #fff !important;
	}
</style>
