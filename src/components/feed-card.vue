<template>
  <scroll-view class="bf-page">
    <!-- 肉牛情况 -->
    <view class="bf-card">
      <view class="bf-card__title">
        <text>肉牛情况</text>
      </view>
      <view class="bf-card__body">
        <beef-card></beef-card>
      </view>
    </view>
    <!-- 饲料配比 -->
    <view class="feed-card">
      <view class="feed-card__title">
        <text>饲料情况</text>
        <nut-button size="small" type="primary">添加饲料</nut-button>
      </view>
      <view class="feed-card__body">
        <div v-for="item in list" :key="item" class="feed-item">
          <div class="name">饲料饲料饲料</div>
          <div class="input">
            <nut-input v-model="state.name" type="number" :border="false" placeholder="重量（斤）" />
          </div>
          <div class="price-input"><nut-input v-model="state.name" :border="false" placeholder="价格（元/斤）" type="number" />
          </div>
          <div>
            <Del />
          </div>
        </div>
        <nut-empty v-if="!list.length" description="无数据"></nut-empty>
      </view>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import beefCard from '../../components/beef-card.vue';
import { Del } from '@nutui/icons-vue-taro';

const state = reactive({
  name: '',
  age: '',
  tel: '',
  address: ''
});
const list = ref([1, 2])
</script>

<style lang="scss" scope>
.bf-page {
  font-family: PingFangSC PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F9FAFC;
  min-height: 100vh;
  padding: 32px;
  box-sizing: border-box;
}

.bf-card,
.feed-card {
  background: #FFFFFF;
  box-shadow: 0 10px 20px 0 #e6dfdf;
  border-radius: 12px;
  padding: 32px 0;
  margin-bottom: 24px;

  &__title {
    padding: 0 32px;
    display: flex;
    text-align: left;
    font-weight: 500;
    font-size: 36px;
    color: #1E1E27;
    justify-content: space-between;
  }
}

.feed-card__body {
  padding: 12px 32px 0;

  .feed-item {
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    &:last-child {
      border: none;
    }
    .nut-input {
      padding: 10px;
    }

    .name {}

    .input {
      width: 160px;
    }

    .price-input {
      width: 200px;
    }
  }
}
</style>
