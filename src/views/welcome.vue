<template>
  <div class="main">
    <div class="title">
      <img src="../assets/register-title_06.jpg" width="70%">
      <h2>注册账号</h2>
    </div>
    <div class="form">
      <component :is="view"></component>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import register from '../components/welcome/register.vue';
export default {
  data() {
    return {
      view:'register'
    }
  },
  components: {
    register,
  }
}
</script>

<style scoped lang="less">
.main{
  .title{
    text-align: center;
    h2{
      padding: 20px 0;
      color: #fc8d59;
    }
  }
  width: 30%;
  height: 500px;
  margin: 70px auto;
  //box-shadow:0 0 10px 0 rgb(255, 192, 109);
}
</style>
