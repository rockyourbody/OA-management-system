<template>
  <div class="hello">

    <button @click="dealShow">hello world</button>
		<div><router-link to="/StudentAdd">StudentAdd</router-link></div>
   <div><router-link to="/t1">t1</router-link></div>
    <div><router-link to="/t2">t2</router-link></div>
    <div><router-link to="/t3">t3</router-link></div>
    <div><router-link to="/t4">t4</router-link></div>

    <div><router-link to="/t5">t5</router-link></div>
    <div><router-link to="/t6">t6</router-link></div>
    <div><router-link to="/t7">t7</router-link></div>
    <div><router-link to="/t8">t8</router-link></div>

    <div><router-link to="/t9">t9</router-link></div>
    <div><router-link to="/t10">t10</router-link></div>
    <div><router-link to="/t11">t11</router-link></div>
    <div><router-link to="/t12">t12</router-link></div>

    <div><router-link to="/t13">t13</router-link></div>
    <div><router-link to="/t14">t14</router-link></div>
    <div><router-link to="/t15">t15</router-link></div>
    <div><router-link to="/t16">t16</router-link></div>

    <div><router-link to="/t17">t17</router-link></div>
    <div><router-link to="/t18">t18</router-link></div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    dealShow(){

      this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            
          }
        });


    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
