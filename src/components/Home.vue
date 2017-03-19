<template>
  <div id="trunk">
  <div class="content">
    <div class="menu">
      <ul>
        <li><a href="#" v-link="{path:'/home/search'}">查找图书</a></li>
        <li><a href="#" v-link="{path:'/home/add'}">添加图书</a></li>
        <li><a href="#" v-link="{path:'/home/show_users'}">查看用户</a></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
  </div>
</template>
<style type="text/css" scoped>
   #trunk{
    font-family: 微软雅黑;
    margin: 0px auto;
    width: 900px;
    min-height:300px;
    *+height:100%;
    _height:300px;
    background: white;
    margin-top: -20px;
  }
  .content{
    margin:0px auto;
  }
  .menu{
    margin:0px auto;
    width: 700px;
    padding-top: 30px;
    height: 60px;
  }
  ul, li{
    list-style: none;
    margin: 0px;
    padding:0px;
  }
  li{
    float: left;
    margin-right: 30px;
    font-size: 24px;
    text-decoration: underline;
  }
  a{
    color: black;
  }
</style>

