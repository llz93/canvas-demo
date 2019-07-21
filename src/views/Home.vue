<template>
  <div class="home">
    <div class="menu-top">
      <ul>
        <li v-for="item in $router.options.routes[0].children" :key="item.path">
          <router-link :to="item.path">{{item.meta.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="menu-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted() {
    console.log(this.$router.options.routes[0].children);
  }
};
</script>
<style lang="scss">
.home {
  .menu-top {
    position: fixed;
    height: 100%;
    width: 120px;
    left: 0px;
    top: 0px;
    text-align: right;
    background: white;
    a {
      padding: 0 10px;
    }
  }
  .menu-content{
    padding: 20px 20px 20px 140px;
    
  }
}
</style>

