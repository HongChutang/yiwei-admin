<template>
  <dir id="show_users">
    <div class="content">
      <table border>
        <tr>
          <th class="num">序号</th>
          <th class="name">昵称</th>
          <th class="avatar">头像</th>
          <th class="email">邮箱</th>
          <th class="tel">手机</th>
          <th class="email">收货地址</th>
        </tr>
        <tr v-for="user in users">
          <td class="num_td">{{$index+1}}</td>
          <td>{{user.username}}</td>
          <td><img :src="user.avatar" class="avatarimg"></td>
          <td>{{user.email}}</td>
          <td>{{user.tel}}</td>
          <td>{{user.address}}</td>
        </tr>
      </table>
    </div>
  </dir>
</template>
<style type="text/css" scoped>
  .avatarimg{
    width: 80px;
    height: 60px;
  }
  #show_users{
    font-family: 微软雅黑;
    margin: 0px auto;
    width: 700px;
    height: auto;
    background: #FFFFFF;
    padding-bottom: 40px;
  }
  .content{
    margin:0px auto;
  }
  table{
    margin:0px auto;
    text-align: center;
  }
  .num{
    width:40px;
  }
  .num_td{
    font-style: italic;
  }
  .name{
    width: 100px;
  }
  .email{
    width: 180px;
  }
  .tel{
    width: 180px;
  }
</style>
<script type="text/javascript">
   export default {
    data() {
      return {
        users: []
      }
    },
    ready() {
      this.$http.get(window.basePath + 'admin/users').then(function (response) {
                if (response.status === 200) {
                 this.users = response.data
                }
            }, function (response) {
                window.alert("获取失败")
            })
    }
  }
</script>
