<template>
  <div id="home">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getMenu} from "network/home";

  export default {
    name: "home",
    components: {
      NavBar
    },
    data() {
      return {
        banners: [],
        menus: []
      }
    },
    created() {
      getMenu().then(res => {
        this.banners = res.data.result.carousel
        this.menus = res.data.result.menus
      })
    }
  }
</script>

<style scoped>
  #home {
    background-color: var(--color-tint);
    color: white;
  }
</style>
