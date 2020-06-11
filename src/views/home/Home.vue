<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="titles"
                 @tabClick="tabClick"
                 ref="tabControl1" class="tab-control" v-show="isPos"></tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @scrollEnd="load">
      <home-swiper :banners="banners"
                   @imageLoad="imageLoad"></home-swiper>
      <category :cates="menus"></category>
      <feature></feature>
      <tab-control :titles="titles"
                   @tabClick="tabClick"
                    ref="tabControl2" v-show="!isPos"></tab-control>
      <goods-list :goods="showType"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'

  import HomeSwiper from './childComponents/HomeSwiper'
  import Category from './childComponents/Category'
  import Feature from './childComponents/Feature'
  import Product from './childComponents/Product'
  import BackTop from 'components/content/BackTop'

  import {getMenu, getHomeProduct} from 'network/home'
  import {debounce} from '@/common/utils'

  export default {
    name: "home",
    components: {
      NavBar,
      TabControl,
      GoodsList,
      HomeSwiper,
      Category,
      Feature,
      Product,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        menus: [],
        titles: ['流行', '新款', '精选'],
        products: {
          2: {page: 0, list: []},
          3: {page: 0, list: []},
          5: {page: 0, list: []}
        },
        currentType: 2,
        isBackTop: false,
        tabOffsetTop: 0,
        isPos: false,
        saveY: 0
      }
    },
    created() {
      getMenu().then(res => {
        // console.log(res);
        this.banners = res.data.result.carousel
        this.menus = res.data.result.menus
      })
      // 1,2,3,5
      this.getProduct(2);
      this.getProduct(3);
      this.getProduct(5);

    },
    computed: {
      showType() {
        return this.products[this.currentType].list
      }
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      // 监听item中图片加载完成
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })

    },
    // 恢复到上离开的位置
    activated() {
      this.$refs.scroll.scrollBack(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    // 记录上次离开的y的位置
    deactivated() {
      // console.log(this.$refs.scroll.getScrollY())
      this.saveY = this.$refs.scroll.getScrollY()
    },
    methods: {
      // 防抖函数
      // debounce(func, delay) {
      //   let timer = null
      //   return function(...args) {
      //     if (timer) clearTimeout(timer)
      //
      //     timer = setTimeout(() => {
      //       func.apply(this, args)
      //     }, delay)
      //   }
      // },
      // 事件监听
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 2
                break;
          case 1:
            this.currentType = 3
                break;
          case 2:
            this.currentType = 5
        }
        // 为了是吸顶后的tab同步
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      // 返回顶部
      backClick() {
        this.$refs.scroll.scrollBack(0, 0, 300)
      },
      // 按钮的显示与隐藏
      contentScroll(position) {
        this.isBackTop = (-position.y) > 500

        this.isPos = (-position.y) > 541
      },
      // 上拉加载
      load() {
        this.getProduct(this.currentType)
      },
      // 获取轮播图加载完后的高度
      imageLoad() {
        // console.log(this.$refs.tabControl.$el.offsetTop)
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      // 网络请求
      getProduct(type) {
        const page = this.products[type].page + 1;
        getHomeProduct(type, page).then(res => {
          this.products[type].list.push(...res.data.result.products)
          this.products[type].page += 1
          // 调用finishPullUp可以一直加载更多
          this.$refs.scroll.finishPull();
        })
      },
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    font-size: 18px;
    color: #fff;
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: 1;*/
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }

</style>
