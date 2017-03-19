<template>
  <dir id="show_type">
    <div class="content">
      <table border>
        <tr>
          <th class="num">序号</th>
          <th class="name">书名</th>
          <th class="price">价格</th>
          <th class="store">库存</th>
          <th>操作</th>
        </tr>
        <tr v-for="book in books">
          <td class="num_td">{{$index+1}}</td>
          <td>{{book.goodsName}}</td>
          <td>{{book.price}}</td>
          <td>{{book.stock}}</td>
          <td><button @click="change(book.goodsName)">修改</button><button @click="delete(book.goodsName)">删除</button></td>
        </tr>
      </table>
    </div>
  </dir>
</template>
<style type="text/css" scoped>
  #show_type{
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
    width: 200px;
  }
  .price{
    width: 100px;
  }
  .store{
    width: 200px;
  }
  td>button{
    margin-right: 10px;
  }
</style>
<script type="text/javascript">
   export default {
    data() {
      return {
      }
    },
    computed: {
      books: function() {
        return this.state.mainStore.typeBooks
      }
    },
    methods: {
      change(book_name){
        var url = window.basePath + 'goods/details/' + book_name
        this.$http({
        url: url,
        method: 'GET'}).then(
        function (response) {
          if (response.status === 200) {
            this.state.mainStore.nameBook = response.data
            router.go('/home/change_item')
          }
        }, function (response) {
        })
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
