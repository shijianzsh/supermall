<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in banners" :key="index">
        <img :src="item.img" alt="" @load="swiperLoad">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "detail-swiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: true
      }
    },
    methods: {
      swiperLoad() {
        if (this.isLoad) {
          this.$emit("swiperLoad");
          this.isLoad = false;
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    overflow: hidden;
    width: 100%;
    height: 300px;
  }

  .detail-swiper img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center top;
  }
</style>
