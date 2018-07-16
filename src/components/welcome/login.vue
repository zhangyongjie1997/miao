<template>
  <div class="container">
    <el-form :model="loginForm" class="input" :rules="rules">
      <el-form-item prop="email">
        <el-row class="row">
          <el-col class="label" :span="4">邮箱</el-col>
          <el-col :span="20">
            <el-input v-model="loginForm.email" type="email" placeholder="请输入您的常用邮箱"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item prop="password">
        <el-row class="row">
          <el-col class="label" :span="4">密码</el-col>
          <el-col :span="20">
            <el-input v-model="loginForm.password" type="password" placeholder="请输入6位以上的密码"></el-input>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <div class="login-foot">
      <div class="login-info">
        <el-checkbox>保持登录</el-checkbox>
      </div>
      <div class="login-btn">
        <el-button size="medium" type="danger">登录</el-button>
      </div>
      <div class="login-info" style="padding-top:20px;">
        <a href="javascript:void(0)" @click="jump('changePwd')">忘记密码</a>
      </div>
      <div class="login-info">
        没有账号，去 <a href="javascript:void(0)" @click="jump('register')">注册</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        loginForm:{
          password:'',
          email:'',
        },
        rules:{
          password:[
            {required:true,message:'请输入正确的密码',trigger: 'blur'},
            { min:6,max:16,message:'请输入正确的密码',trigger: 'blur'}
          ],
          email:[
            {required:true,message:'请输入完整的邮箱地址',trigger: 'blur'},
          ],
        }
      }
    },
    methods: {
      jump(val){
        this.$emit('jump',val);
      }
    }
  }
</script>

<style scoped lang='less'>
  .container {
    padding-top: 20px;
    width: 100%;
    height: 200px;
    color: #555;
    .login-foot{
      .login-info{
        font-size: 15px;
        text-align: center;
        padding-bottom: 20px;
        a{
          color: #fc8d59;
        }
      }
      .login-btn{
        width: 100%;
        text-align: center;
      }
    }
    .input {
      .row {
        .label {
          height: 40px;
          text-align: center;
          line-height: 40px;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
</style>