<template>
  <dir id="add">
    <div class="content">
      <p class="header">请完整填写新书信息:</p>
      <table border>
        <tr>
          <th class="item">项目</th>
          <th class="value">数值</th>
        </tr>
        <tr>
          <td>书名</td>
          <td><input type="text" v-model="book_name"></td>
        </tr>
        <tr>
          <td>作者</td>
          <td><input type="text" v-model="author"></td>
        </tr>
        <tr>
          <td>价格</td>
          <td><input type="text" v-model="price"></td>
        </tr>
        <tr>
          <td>类别</td>
          <td><select v-model="type">
          <option v-for="type in types" v-bind:value="type.value">{{type.name}}</option>
          </select></td>
        </tr>
        <tr>
          <td>数量</td>
          <td><input type="text" v-model="stock"></td>
        </tr>
        <tr>
          <td>描述</td>
          <td><input v-model="description" rows="4" cols="40"></input></td>
        </tr>
        <tr>
          <td>封面</td>
          <td><input type="file" v-model="image" id="image_file" @change="onFileChange"></td>
        </tr>
      </table>
      <p class="submit"><button @click="addBook()">确认添加</button></p>
    </div>
  </dir>
</template>
<script type="text/javascript">
   export default {
    data() {
      return {
        book_name: '',
        author: '',
        price: '',
        type: '',
        images: [],
        stock: '',
        description: '',
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
    methods: {
      addBook() {
        if (this.book_name === '' ||
                 this.author === '' ||
                 this.price === '' ||
                 this.type === '' ||
                 this.image === undefined ||
                 this.stock === '') {
          window.alert("请完整填写新书信息")
          return null
        }
        if (isNaN(this.price)) {
          window.alert("图书价格格式错误")
          return null
        }
        if (isNaN(this.stock)) {
          window.alert("图书数量格式错误")
          return null
        }
        this.$http({
          url: window.basePath + 'admin/goods',
          method: 'POST',
          data: {goodsName: this.book_name, author: this.author, price: this.price, type: this.type, image: this.image, stock: this.stock, description: this.description}}).then(function (response) {
              if (response.status === 200) {
                 window.alert("添加成功。继续添加图书")
              }
          }, function (response) {
              window.alert("添加失败，请检查网络连接.")
          })
      },
      onFileChange (e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.createImage(files)
      },
      createImage (file) {
        var vm = this
        var reader = null
        var leng = file.length
        for (var i = 0; i < leng; i++) {
          reader = new window.FileReader()
          reader.readAsDataURL(file[i])
          reader.onload = function (e) {
            vm.images.push(e.target.result)
          }
        }
    }
  },
  computed: {
    image: function() {
      return this.images[0]
    }
  }
}
</script>

<style type="text/css" scoped>
  #add{
    font-family: 微软雅黑;
    margin: 0px auto;
    width: 700px;
    height: 620px;
  }
  .content{
    margin:0px auto;
  }
  .header, .submit{
    margin:0px auto;
    width: 500px;
    font-size: 18px;
    margin-bottom: 10px;
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
