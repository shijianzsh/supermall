<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.name}}</div>
    <div class="content">
      <div class="spec">{{goods.attr[0].name}} - {{goods.attr[0].value[0]}}</div>
      <div class="price">￥{{goods.price}}</div>
    </div>
    <div class="fee">{{goods.fee}}</div>
    <div class="desc">{{goods.spec}}</div>
  </div>
</template>

<script>
  export default {
    name: "goods-info",
    props: {
      goods: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .base-info {
    width: 100%;
    margin-top: 15px;
    padding: 0 10px;
    color: #999999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    text-align: justify;
    color: #222222;
  }

  .content {
    display: flex;
    flex-flow: row nowrap;
    align-content: space-between;
    margin-top: 8px;
  }

  .spec {
    width: 70%;
    color: #222222;
    text-indent: 5px;
  }

  .price {
    width: 30%;
    color: red;
  }

  .desc {
    width: 100%;
    margin-top: 8px;
    font-style: italic;
    font-size: 12px;
  }

  .fee {
    width: 100%;
    color: #ff5777;
    margin-top: 8px;
    text-align: right;
  }
</style>
