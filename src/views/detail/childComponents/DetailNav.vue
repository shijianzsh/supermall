<template>
  <div class="nav">
    <nav-bar>
      <div slot="left" class="back" @click="goBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles"
              class="title-item"
              :class="{active: index === currentIndex}"
              @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "detail-nav",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      // 返回
      goBack() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .nav {
    position: relative;
    z-index: 2;
    background-color: #fff;
  }

  .title {
    display: flex;
  }

  .title-item {
    flex: 1;
    font-size: 14px;
  }

  .active {
    color: var(--color-high-text);
  }

  .back img {
    margin-top: 12px;
  }
</style>
