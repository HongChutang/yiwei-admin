<template>
  <div id="header">
    <div class="content">
      <span>
       <a href="#" v-link="{path:'/home'}" class="logo"><img src="../assets/logo1.png" height="416" width="509" ></a>
     </span>
     <span class="title">
       <a href="#" v-link="{path:'/home'}">一味书屋管理后台</a>
     </span>
    </div>
    <div class="free"></div>
  </div>
</template>

<style type="text/css" scoped>
  #header{
    border-top: 5px solid #C4DA6F;
    margin:0px auto;
    width: 900px;
    font-family: 微软雅黑;
    height: 110px;
  }
  a{
    text-decoration: none;
    color:black;
  }
  .front_entry{
    margin:0px auto;
    text-align: right;
    padding-right: 20px;
    height: 20px;
    background: #D8E89A;
  }
  .content{
    margin:0px auto;
    width:900px;
    height: 80px;
    background: #ffffff;
  }
  .content>span>a>img{
    width: 100px;
    height: 80px;
    margin-left: 40px;
  }
  .content>span{
    float: left;
  }
  .title{
    font-size: 34px;
    font-style: italic;
    height: 80px;
    line-height: 80px;
    margin-left: 20px;
  }
  .free {
    margin:0px auto;
    height: 10px;
    background: #C4DA6F;
  }
</style>
