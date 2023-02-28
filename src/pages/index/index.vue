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
      <div>
        <nut-empty description="无数据"></nut-empty>
      </div>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import beefCard from '../../components/beef-card.vue';

const basicData = reactive({
  name: '',
  age: '',
  tel: '',
  address: ''
});
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

.bf-card, .feed-card {
  background: #FFFFFF;
  box-shadow: 0 10px 20px 0 #e6dfdf;
  border-radius: 12px;
  padding: 32px 0;

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
.bf-card {
  margin-bottom: 32px;
}
</style>
