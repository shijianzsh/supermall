<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodsItem.img" alt="" @load="imagesLoad">
    <div class="text">
      <p>{{goodsItem.name}}</p>
      <span>{{goodsItem.price}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goods-list-item",
    props: {
      goodsItem: {
        type: Object,
        default: {}
      }
    },
    methods: {
      // 图片加载
      imagesLoad() {
        // console.log(12)
        this.$bus.$emit('itemImageLoad')
      },
      // 跳转到详情页
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.id)
      }
    }
  }
</script>

<style scoped>

  .goods-list-item {
    width: 48%;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }

  .text {
    text-align: center;
  }

  .text p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .text span {
    color: var(--color-high-text);
  }
</style>
