<template>
  <div>
    <swiper class="swiper">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.car_image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "home-swiper",
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        emitOnce: true
      }
    },
    methods: {
      stopTimer() {
        this.$refs.swiper.stopTimer()
      },
      startTimer() {
        if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      },
      //图片加载完成
      imageLoad() {
        if (this.emitOnce) {
          this.$emit('imageLoad');
          this.emitOnce = false
        }
      }
    },
  }
</script>

<style scoped>

</style>
