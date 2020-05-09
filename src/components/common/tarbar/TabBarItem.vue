<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-show="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStype">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-bar-item",
    props: {
      link: {
        type: String,
        required: true
      },
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
    data() {
      return {

      }
    },
    computed: {
      isActive() {
        // $route 获取当前活跃的路由
        return this.$route.path.indexOf(this.link) != -1
      },
      activeStype() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        if(this.$route.path != this.link){
          this.$router.replace(this.link)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

</style>
