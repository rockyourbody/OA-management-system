<template>
	<div class="student-score">
		<div class="score-btns">
			<el-button @click="switchPage1">按学生统计</el-button>
			<el-button @click="downloadDateMinus">按时间统计</el-button>
		</div>

		<div v-if="active_page == 0">
			<student-score-sort-by-student></student-score-sort-by-student>
		</div>
		
		<div v-if="active_page == 1">
			<student-score-sort-by-time></student-score-sort-by-time>
		</div>
		
	</div>
</template>

<script>
	import StudentScoreSortByStudent from '@/components/student/StudentScoreSortByStudent.vue'
	import StudentScoreSortByTime from '@/components/student/StudentScoreSortByTime.vue'
	export default {
		name: 'HelloWorld',
		components:{
			'student-score-sort-by-student':StudentScoreSortByStudent,
			'student-score-sort-by-time':StudentScoreSortByTime
		},
		data() {
			return {

				//界面切换
				active_page: 0,

				token: "",


			}
		},
		created: function() {
			this.token = window.localStorage.getItem("token")
		},
		methods: {
			switchPage1:function(){
				this.active_page = 0
			},

			downloadDateMinus: function() {
				this.active_page = 1
			},

			
		},

		
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.student-score {
		padding: 20px;
		box-sizing: border-box;
	}

	
</style>
