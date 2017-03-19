<template>
  <dir id="search">
    <div class="content">
    <table border>
        <tr>
          <td>类别查找:</td>
          <td><select v-model="type">
          <option v-for="type in types" v-bind:value="type.value" >{{type.name}}</option>
          </select></td>
          <td><button @click="typeSearch()" class="btn btn-default">查找</button></td>
        </tr>
        <tr>
          <td>书名查找:</td>
          <td><vs-typeahead :value.sync="queryKey" :data="queryItems" class="ahead">
          </vs-typeahead></td>
          <td><button @click="nameSearch()" class="btn btn-default">查找</button></td>
        </tr>
      </table>
    </div>
  </dir>
</template>
<script type="text/javascript">
import {typeahead} from 'vue-strap'
   export default {
    components: {
        'vs-typeahead': typeahead
      },
    data() {
      return {
        type: '',
        book_name: '',
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
      ],
      queryItems: [],
      queryKey: ''
      }
    },
    methods: {
      typeSearch() {
        var url = window.basePath + 'goods/'+this.type
        this.$http({
        url: url,
        method: 'GET'}).then(
        function (response) {
          if (response.status === 200) {
            this.state.mainStore.typeBooks = response.data
            router.go('/home/show_type')
          }
        }, function (response) {
          window.alert('查找失败')

        })
      },
      nameSearch() {
        var url = window.basePath + 'goods/details/'+this.queryKey
        this.$http({
        url: url,
        method: 'GET'}).then(
        function (response) {
          if (response.status === 200) {
            this.state.mainStore.nameBook = response.data
            router.go('/home/show_item')
          }
        }, function (response) {
          window.alert('查找失败')
        })
      }
    },
    ready() {
      var url = window.basePath + 'goods/names/all'
      this.$http({
        url: url,
        method: 'GET'}).then(
        function (response) {
          if (response.status === 200) {
            this.queryItems = response.data
          }
        }, function (response) {
        })
    }
  }
</script>
<style type="text/css" scoped>
  #search{
    font-family: 微软雅黑;
    margin: 0px auto;
    width: 700px;
    background: #FFFFFF;
  }
  .content{
    margin:0px auto;
    height: 200px;
  }
  table{
    margin-top: 30px;
    margin:0px auto;
    height: 120px;
  }
  select{
    width: 210px;
    height: 26px;
    margin-left: 20px;
    margin-right: 10px;
  }
  input{
    width: 200px;
    height: 22px;
    margin-left: 20px;
    margin-right: 10px;
    padding-left: 5px;
  }
  .ahead{
    width: 200px;
    margin-left: 30px;
  }
</style>
