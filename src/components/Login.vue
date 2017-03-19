<template>
  <div id="admin_login" >
    <div class="content">
      <p class="header">管理员登录</p>
      <table >
      <tr>
          <td>账号</td>
          <td><input type="text" name="email" placeholder="请输入账号名" v-model="email"></td>
      </tr>
      <tr>
          <td>密码</td>
          <td><input type="password" name="password" placeholder="请输入密码" v-model="password"></td>
      </tr>
      </table>
      <p class="code">
      <span>验证码：</span><span>
      <img :src="codeUrl" class="code_img" ></span>
      <span ><img src="../assets/refresh.png" height="16" width="16" class="refresh_img" @click="refreshCode()"></span>
      <span class="code_input">填写：<input type="text" name="code" v-model="code"></span>
      </p>
      <p class="code" v-if="haveCode" @click="refreshCode()">
      <p><button @click="login()">登录</button></p>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data () {
      return {
        email: '',
        password: '',
        code: '',
        codeUrl: window.basePath + 'captcha/random_str'
      }
    },
    methods: {
      login () {
        this.$http({
        url: window.basePath + 'captcha',
        method: 'POST',
        data: {captcha: this.code}}).then(
        function (response) {
          if (response.status === 200) {
            this.loginExcecute()
          }
        }, function (response) {
          if (response.status === 401) {
            window.alert('验证码错误！')
          } else {
            window.alert('网络故障，请稍后再试！')
          }
          this.refreshCode()
        })
      },

      loginExcecute() {
      this.$http({
        url: window.basePath + 'admin/login',
        method: 'POST',
        data: {username: this.email, password: this.password}}).then(function (response){
        if (response.status === 200) {
          var token = response.data
          this.state.mainStore.token = token.token_type + ' ' + token.access_token
          this.password = ''
          this.state.mainStore.isAdminLogin = true
          window.alert('登录成功！')
          router.go('/home')
        }
      }, function (response) {
        if (response.status === 400) {
          window.alert('登录失败，用户名或密码错误。')
        } else {
          window.alert('登录失败，请检查网络连接或稍后再试！')
        }
        }
      )
      },

      refreshCode() {
        var randomStr = Math.random().toString(36).substr(2)
        this.codeUrl = window.basePath + 'captcha/' + randomStr
      }
    }
  }
</script>
<style type="text/css" scoped>
.code{
    margin-top: 10px;
    margin-bottom: 10px;
    height: 30px;
    padding-left: 10px
  }
  .code>span{
    margin-right: 10px;
  }
  .code_img{
    width: 80px;
    height: 30px;
    margin-left: -10px;
    vertical-align: middle;
    font-size: 12px;
  }
  .refresh_img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .code_input{
    margin-left: 5px;
  }
  .code_input>input{
    width:50px;
    height: 18px;
  }
  #admin_login{
    font-family: 微软雅黑;
    height: 400px;
    margin-top: -20px;
  }
  .content{
    padding-top: 60px;
    margin:0px auto;
    background: #FFFFFF;
    width:900px;
    text-align: center;
    height: 400px;
  }
  .header{
    font-size: 22px;
    margin-bottom: 18px;
  }
  table{
    margin:0px auto;
    font-size: 20px;
  }
  input{
    height: 24px;
    width: 200px;
    padding-left: 10px;
  }
  button{
    margin-top: 10px;
    width: 80px;
    font-size: 16px;
  }
</style>

