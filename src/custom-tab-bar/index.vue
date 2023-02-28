<template>
  <nut-tabbar @tab-switch="tabSwitch">
     <nut-tabbar-item tab-title="标签" :icon="Home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="Category"> </nut-tabbar-item>
  </nut-tabbar>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import { computed }  from 'vue'
import { useStore } from 'vuex'
import { Home, Category } from '@nutui/icons-vue-taro';

const store = useStore()
const selected = computed(() => store.getters.getSelected)

const color = '#000000'
const selectedColor = '#DC143C'
const list = [
  {
    pagePath: '/pages/index/index',
    text: '首页'
  },
  {
    pagePath: '/pages/my/index',
    text: '个人中心'
  }
]

function tabSwitch(index, url) {
  setSelected(index)
  Taro.switchTab({ url })
}

function setSelected (index) {
  store.dispatch('setSelected', index)
}
</script>

<style lang="scss">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: white;
  display: flex;
  padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar-border {
  background-color: rgba(0, 0, 0, 0.33);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tab-bar-item cover-image {
  width: 54px;
  height: 54px;
}

.tab-bar-item cover-view {
  font-size: 24px;
}
</style>
