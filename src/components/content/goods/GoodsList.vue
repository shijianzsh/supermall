<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "goods-list",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
</style>
