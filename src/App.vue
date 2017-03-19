<template>
  <div id="app">
  <div class="content">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
  </div>
</template>
<script type="text/javascript">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
  export default{
     components: {
      'my-header': Header,
      'my-footer': Footer
     },
     ready() {
      if (!this.state.mainStore.isAdminLogin) {
        global.router.go('/login')
      }
    }
  }
</script>
<style type="text/css" scoped="">
#app{
  background: #2AA379;
}
</style>

