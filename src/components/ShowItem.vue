<template>
  <dir id="show_item">
    <div class="content">
      <table border>
        <tr>
          <th class="name">书名</th>
          <th class="price">价格</th>
          <th class="type">类别</th>
          <th class="image">封面</th>
          <th class="store">库存</th>
          <th class="operation">操作</th>
        </tr>
        <tr>
          <td>{{book.goodsName}}</td>
          <td>{{book.price}}</td>
          <td>{{book.type}}</td>
          <td><img :src="book.image" class="img"></td>
          <td>{{book.stock}}</td>
          <td><button @click="change()">修改</button><button @click="delete(book.goodsName)">删除</button></td>
        </tr>
      </table>
    </div>
  </dir>
</template>
<style type="text/css" scoped>
  #show_item{
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
  .name{
    width: 200px;
  }
  .price{
    width: 60px;
  }
  .type{
    width: 60px;
  }
  .image{
    width: 150px;
  }
  .store{
    width: 60px;
  }
  .operation{
    width: 120px;
  }
  td>button{
    margin-right: 10px;
  }
  .img{
    height: 60px;
    width: 60px;
  }
</style>
<script type="text/javascript">
   export default {
    data() {
      return {
        book: []
      }
    },
    ready() {
      this.book = this.state.mainStore.nameBook
    },
    methods: {
      change(book_name){
        global.router.go('/home/change_item')
      },
      delete(book_name){
        if (window.confirm('确定要删除吗?')) {
        var url = window.basePath + 'admin/goods/' + book_name
        this.$http({
        url: url,
        method: 'DELETE'}).then(
        function (response) {
          if (response.status === 200) {
            window.alert('删除成功！')
            router.go('/home')
          }
        }, function (response) {
            window.alert('删除失败！')
        })
      }
      }
    }
  }
</script>
