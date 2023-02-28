<template>
  <nut-form>
    <nut-form-item label="肉牛品种" :required="true">
      <nut-input @click="chooseBreed('breed')" v-model="beefData.breed" class="nut-input-text" placeholder="请选择肉牛品种" type="text" readonly/>
    </nut-form-item>
    <nut-form-item label="环境温度" :required="true">
      <nut-input @click="chooseBreed('temperature')" v-model="beefData.temperature" class="nut-input-text" placeholder="请选择环境温度" type="text" readonly/>
    </nut-form-item>
    <nut-form-item label="体重（斤）" :required="true">
      <nut-input v-model="beefData.weight" class="nut-input-text" placeholder="请输入体重的体重（斤）" type="text" />
    </nut-form-item>
    <nut-form-item v-model="beefData.increase" label="增重目标（斤）" :required="true">
      <nut-input @click="chooseBreed('increase')" v-model="beefData.temperature" class="nut-input-text" placeholder="请选择增重目标（斤）" type="text" readonly/>
    </nut-form-item>
  </nut-form>
  <nut-popup position="bottom" v-model:visible="pickerShow">
    <nut-picker v-model="popupValue" :columns="columns" title="请选择" @confirm="popupConfirm" @cancel="pickerShow = false">
    </nut-picker>
  </nut-popup>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
// import Taro from '@tarojs/taro'
import {INCREASE_LIST, TEMPERATURE_LIST, BREED_LIST,  ListItem } from '../enum/index'
const beefData = reactive({
  breed: '',
  temperature: '',
  weight: '',
  increase: ''
});
const listMap = new Map([
  ['temperature', TEMPERATURE_LIST],
  ['breed', BREED_LIST],
  ['increase', INCREASE_LIST]
])
const pickerShow = ref(false)
const popupDesc = ref()
const popupValue = ref();
const columns = ref<ListItem[]>([]);

const chooseBreed = (key: string) => {
  popupValue.value = beefData[key]
  columns.value = listMap.get(key)!
  pickerShow.value = true
}

const popupConfirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedValue)

  popupDesc.value = selectedOptions.map((val: any) => val.text).join(',')
  pickerShow.value = false
}
</script>
<style lang="scss">
page,
:root {
  --nut-form-item-label-font-size: 18px;
}
</style>