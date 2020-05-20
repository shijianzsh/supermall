<template>
  <div class="cate">
    <div v-for="(item, index) in cates" class="cate-item">
      <a href="">
        <img :src="item.block_icon" alt="">
        <div>{{item.block_name}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "category",
    props: {
      cates: {
        type: Array,
        default: []
      }
    }

  }
</script>

<style scoped>
  .cate {
    display: flex;
    text-align: center;
    font-size: 10px;
    padding: 5px 0 15px 0;
    border-bottom: 8px solid #eee;
  }

  .cate .cate-item {
    flex: 1;
  }

  .cate .cate-item img {
    width: 60px;
    height: 60px;
  }
</style>
