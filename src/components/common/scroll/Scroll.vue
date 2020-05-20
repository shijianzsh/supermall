<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        // 开启点击事件,默认是false
        click: true,
        // 0和1不监听滚动事件,2监听但是不监听手指松开后的滑动距离,3全部监听
        probeType: this.probeType,
        // 是否开启监听滚动到底部事件
        pullUpload: this.pullUpLoad
      });

      // 监听位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        });
      }

      // 监听上拉加载
      if (this.pullUpLoad) {
        this.scroll.on('scrollEnd', () => {
          this.$emit("scrollEnd");
        });
      }
    },
    methods: {
      // 第一个参数x轴的距离,第二个参数y轴的距离,第三个参数是延迟时间
      scrollBack(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      // 可以一直加载更多
      finishPull() {
        this.scroll && this.scroll.finishPullUp()
      },
      // 重新计算scrollHeight
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      // 获取滚动的纵向距离
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
