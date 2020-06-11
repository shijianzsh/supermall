<template>
  <div class="detail-shop">
    <div class="left">
      <img src="http://h.hiphotos.baidu.com/image/pic/item/7c1ed21b0ef41bd5f2c2a9e953da81cb39db3d1d.jpg" alt="">
    </div>
    <div class="shop-right">
      <div class="shop">
        <span>旗舰店</span>
        <span>星级</span>
      </div>
      <div class="comment">
        <span>商品相符</span>
        <span>卖家服务</span>
        <span>物流服务</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detail-shop"
  }
</script>

<style scoped>
  .detail-shop {
    width: 100%;
    height: 100px;
    padding-top: 20px;
  }

  .left {
    width: 60px;
    height: 60px;
    margin-left: 20px;
  }

  .left img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .shop-right {
    height: 60px;
    display: flex;
    font-size: 12px;
    justify-content: space-around;
    align-items: center;
  }

  .shop {
    display: flex;
    flex-flow: column;
  }

  .comment {
    display: flex;
    flex-flow: column;
  }

  span {
    height: 20px;
    line-height: 20px;
  }
</style>
