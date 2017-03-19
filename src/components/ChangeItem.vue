<template>
  <dir id="change">
    <div class="content">
      <p class="header">修改图书信息:&nbsp&nbsp&nbsp&nbsp{{book.goodsName}}</p>
            <table border>
        <tr>
          <th class="item">项目</th>
          <th class="value">数值</th>
        </tr>
        <tr>
          <td>价格</td>
          <td><input type="text" v-model="book.price"></td>
        </tr>
        <tr>
          <td>类别</td>
          <td><select v-model="book.type">
          <option v-for="type in types" v-bind:value="type.value">{{type.name}}</option>
          </select></td>
        </tr>
        <tr>
          <td>库存</td>
          <td><input type="text" v-model="book.stock"></td>
        </tr>
        <tr>
          <td>描述</td>
          <td><textarea v-model="book.description" rows="4" cols="40" ></textarea></td>
        </tr>
      </table>
      <p class="submit"><button @click="changeBook()">确认修改</button></p>
    </div>
  </dir>
</template>
<script type="text/javascript">
   export default {
    data() {
      return {
        types: [
        {
          "name": "近期热门",
          "value": "hot"
        },
        {
          "name": "店家推荐",
          "value": "reco"
        },
        {
          "name": "优惠回馈",
          "value": "disc"
        },
        {
          "name": "文学长廊",
          "value": "lit"
        },
        {
          "name": "生活拾贝",
          "value": "life"
        },
        {
          "name": "科技博览",
          "value": "tech"
        },
        {
          "name": "经管视野",
          "value": "manage"
        },
        {
          "name": "青春成长",
          "value": "youth"
        },
        {
          "name": "健康同行",
          "value": "health"
        }
      ]
      }
    },
    computed: {
      book: function() {
        return this.state.mainStore.nameBook
      }
    },
    methods: {
      changeBook() {
        this.$http({
        url: window.basePath + 'admin/goods',
        method: 'PUT',
        data: {goodsName: this.book.goodsName, price: this.book.price, type: this.book.type, stock: this.book.stock, description: this.book.description}}).then(function (response) {
                if (response.status === 200) {
                  window.alert('修改成功！')
                 global.router.go('/home')
                }
            }, function (response) {
                window.alert("修改失败！")
            })
      }
    }
  }
</script>

<style type="text/css" scoped>
  #add{
    font-family: 微软雅黑;
    margin: 0px auto;
    width: 700px;
    height: 400px;
    background: #FFFFFF;
  }
  .content{
    margin:0px auto;
    padding-bottom: 20px;
  }
  .header, .submit{
    margin:0px auto;
    width: 500px;
    font-size: 18px;
    margin-bottom: 20px;
  }
  table{
    margin:0px auto;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
  }
  .item{
    width: 100px;
    height: 60px;
  }
  .value{
    width: 350px;
    height: 60px;
  }
  td>input{
    width: 340px;
    height: 40px;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  select{
    width: 300px;
    height: 30px;
    font-size: 18px;
  }
  button{
    font-size: 18px;
    margin-top: 10px;
  }
</style>
