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
        <nut-button size="small" @click="add" type="primary">添加饲料</nut-button>
      </view>
      <view class="feed-card__body">
        <div v-for="(item,index) in selected" :key="item.id" class="feed-item">
          <div class="name">{{ item.name }}</div>
          <div class="input">
            <nut-input v-model="item.weight" type="number"  placeholder="重量（斤）" />
          </div>
          <div class="price-input"><nut-input v-model="item.price"  placeholder="价格（元/斤）" type="number" />
          </div>
          <div>
            <Del @click="del(index)"/>
          </div>
        </div>
        <nut-empty v-if="!selected.length" description="请选择饲喂的饲料"></nut-empty>
      </view>
      <nut-popup position="bottom" round v-model:visible="show">
        <div class="pop-card">
          <div class="pop-card__tit">
            <div @click="cancel" class="cancel">取消</div>
            <div class="til">选择饲料</div>
            <div @click="confirm" class="confirm">确定</div>
          </div>
          <div class="pop-card__body">
            <div v-for="item in unSelected" :key="item.id" class="pop-card__item">
              <div class="pop-card__inner">
                <div>{{ item.name }}</div>
                <div><nut-checkbox v-model="item.choose" icon-size="18"></nut-checkbox>
                </div>
              </div>
            </div>
            <nut-empty v-if="!unSelected.length" description="暂无可选饲料">
              <template #image>
                <img :src="empty" />
              </template>
            </nut-empty>

          </div>
        </div>
      </nut-popup>
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import beefCard from '../../components/beef-card.vue';
import { Del } from '@nutui/icons-vue-taro';
import { FeedItem, FEED_LIST } from '../../enum/index'
import empty from '../../images/empty.png'

interface SelectItem extends FeedItem {
  weight: string;
  choose?: boolean;
  price: string;
}
interface UnSelectedItem extends FeedItem {
  choose: boolean
}
const show = ref(false)
const selected = reactive<SelectItem[]>([])
const unSelected = ref<UnSelectedItem[]>([])
const add = () => {
  const selectedIds = selected.map(item => item.id)
  unSelected.value = FEED_LIST.filter(item => !selectedIds.includes(item.id)).map(item => ({ ...item, choose: false }))
  show.value = true
}
const del = (index: number) => {
  selected.splice(index, 1)
}
const cancel = () => {
  show.value = false
}
const confirm = () => {
  const sel = unSelected.value.filter(item => item.choose)
  console.log(sel)
  if (sel.length) {
    const items = sel.map(item => ({...item, weight: '', price: ''}))
    selected.push(...items)
  }
  show.value = false
}
</script>

<style lang="scss" scope>
.bf-page {
  font-family: PingFangSC PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f5f7fc;
  min-height: 100vh;
  padding: 32px;
  box-sizing: border-box;
}

.bf-card,
.feed-card {
  background: #FFFFFF;
  box-shadow: 0 10px 20px 0 #F9FAFC;
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

.feed-card {
  margin-bottom: 100px;
}

.feed-card__body {
  padding: 12px 32px 0;

  .feed-item {
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

.pop-card {
  &__tit {
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28px;

    .cancel {
      min-width: 100px;
      color: var(--nut-picker-cancel-color, #808080);
    }

    .til {
      font-size: 32px;
      color: var(--nut-picker-bar-title-color, var(--nut-title-color, #1a1a1a));
    }

    .confirm {
      min-width: 100px;
      color: var(--nut-picker-ok-color, var(--nut-primary-color, #fa2c19));
    }
  }

  &__body {
    padding: 12px 48px 120px;
    overflow-y: auto;
    max-height: 680px;
    min-height: 516px;
    box-sizing: border-box;
  }
  &__item {
    width: 100%;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      width: calc(100% - 96px);
      display: block;
      height: 1px;
      transform: scaleY(0.5);
      background: #eee;
    }
  }
  &__inner {
    width: 100%;
    display: flex;
    padding: 24px 0;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
}
</style>
