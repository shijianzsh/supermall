<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item"
          :class="{active: currentIndex == index}"
          @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-control",
    props: {
      titles: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>

  .tab-control {
    display: flex;
    text-align: center;
    font-size: 16px;
    background-color: white;
  }

  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }

  .active {
    color: var(--color-high-text)
  }

  .active span {
    border-bottom: 2px solid var(--color-high-text);
    padding: 3px;
  }
</style>
