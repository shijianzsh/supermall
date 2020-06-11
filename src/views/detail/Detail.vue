<template>
  <div class="detail">
    <detail-nav @titleClick="titleClick" ref="nav"></detail-nav>
    <scroll :probeType="3" class="scroll-height"
            ref="scroll" @scroll="contentScroll">
      <detail-swiper :banners="banners"></detail-swiper>
      <detail-info :goods="goods"></detail-info>
      <detail-shop></detail-shop>
      <div class="desc">
        <img src="http://gongrangbao.oss-cn-shenzhen.aliyuncs.com/Uploads/keditor/image/20190822/f95fa0c208bf08b995602aa16e554b17.jpg" alt="" @load="imageLoad">
      </div>
      <detail-parm ref="param"></detail-parm>
      <detail-comment ref="recommend"></detail-comment>
    </scroll>
  </div>
</template>

<script>
  import DetailNav from './childComponents/DetailNav'
  import DetailSwiper from './childComponents/DetailSwiper'
  import DetailInfo from './childComponents/GoodsInfo'
  import DetailShop from './childComponents/DetailShop'
  import DetailParm from './childComponents/DetailParam'
  import DetailComment from './childComponents/DetailComment'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, Goods} from "network/detail";
  import {debounce} from '@/common/utils'

  export default {
    name: "detail",
    components:{
      DetailNav,
      DetailSwiper,
      DetailInfo,
      DetailShop,
      DetailParm,
      DetailComment,
      Scroll
    },
    data() {
      return {
        id: null,
        banners: [],
        goods: {},
        desc: {},
        topY: [],
        getThemeTopY: null,
        currentIndex: 0
      }
    },
    created() {
      // 保存id
      this.id = this.$route.params.id
      // 请求接口
      getDetail(this.id).then(res => {
        console.log(res.data);
        const data = res.data.result
        // 轮播图
        this.banners = data.carousel1
        // 商品
        this.goods = new Goods(data.productDetails)
        // 详情
        this.desc = '';

      })

      this.getThemeTopY = debounce(() => {
        this.topY = []
        this.topY.push(0);
        this.topY.push(this.$refs.param.$el.offsetTop);
        this.topY.push(this.$refs.recommend.$el.offsetTop);
        this.topY.push(Number.MAX_VALUE)
      }, 100)
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()

        this.getThemeTopY()
      },

      titleClick(index) {
        this.$refs.scroll.scroll.scrollTo(0, -this.topY[index], 100)
      },

      contentScroll(postion) {
        // 获取y值
        const positionY = -postion.y
        // 值对比
        for(let i = 0; i < this.topY.length - 1; i++) {
          if (this.currentIndex !==i && positionY >= this.topY[i] && positionY < this.topY[i+1]) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

      }
    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    position: relative;
    z-index: 1;
  }

  /* BScroll固定高度和区域 */
  .scroll-height {
    /*position: absolute;*/
    /*top: 44px;*/
    /*right: 0;*/
    /*bottom: 49px;*/
    /*left: 0;*/
    /*overflow: hidden;*/
    /*width: 100%;*/
    height: calc(100% - 44px);
    background-color: #ffffff;
  }

  .desc img {
    width: 100%;
  }
</style>
