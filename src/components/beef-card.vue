<template>
  <nut-form>
    <nut-form-item label="肉牛品种" :required="true">
      <nut-input @click="chooseBreed('breed')" v-model="inputInfo.breed" class="nut-input-text" placeholder="请选择肉牛品种"
        type="text" readonly />
    </nut-form-item>
    <nut-form-item label="环境温度" :required="true">
      <nut-input @click="chooseBreed('temperature')" v-model="inputInfo.temperature" class="nut-input-text"
        placeholder="请选择环境温度" type="text" readonly />
    </nut-form-item>
    <nut-form-item label="体重（斤）" :required="true">
      <nut-input v-model="inputInfo.weight" class="nut-input-text" placeholder="请输入体重的体重（斤）" type="number" />
    </nut-form-item>
    <nut-form-item v-model="beefData.increase" label="增重目标（斤）" :required="true">
      <nut-input @click="chooseBreed('increase')" v-model="inputInfo.increase" class="nut-input-text"
        placeholder="请选择增重目标（斤）" type="text" readonly />
    </nut-form-item>
  </nut-form>
  <nut-popup position="bottom" v-model:visible="pickerShow">
    <nut-picker v-model="defaultVal" :columns="columns" title="请选择" @confirm="confirm" @cancel="cancel">
    </nut-picker>
  </nut-popup>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { INCREASE_LIST, TEMPERATURE_LIST, BREED_LIST, ListItem } from '../enum/index'

interface Beef {
  breed: ListItem | null
  temperature: ListItem | null
  increase: ListItem | null
}
type key = keyof Beef

const inputInfo = reactive({
  breed: '',
  temperature: '',
  increase: '',
  weight: ''
});
const beefData: Beef = reactive({
  breed: null,
  temperature: null,
  increase: null
});
const listMap = new Map([
  ['temperature', TEMPERATURE_LIST],
  ['breed', BREED_LIST],
  ['increase', INCREASE_LIST]
])
const currentType = ref < key | ''>('')
const pickerShow = ref(false)
const defaultVal = ref<ListItem[]>([]);
const columns = ref<ListItem[]>([]);

const chooseBreed = (key: key) => {
  currentType.value = key
  const cols = listMap.get(key)!
  defaultVal.value = beefData[key] === null ? [] : [beefData[key] as ListItem]
  columns.value = cols
  pickerShow.value = true
}

const confirm = ({ selectedOptions }) => {
  console.log(selectedOptions)

  beefData[currentType.value] = selectedOptions[0]
  inputInfo[currentType.value] = selectedOptions[0].text
  pickerShow.value = false
}

const cancel = () => {
  pickerShow.value = false
}
const getStander = () => {

}
defineExpose({
  getStander
})
</script>
<style lang="scss">
page,
:root {
  --nut-form-item-label-font-size: 28px;
}
</style>
=0.062*B19^0.75+(1.5296+0.00371*B19)*C19
5.5*B19^0.75+(C19*(168.07-0.16869*B19+0.0001633*B19^2)*(1.12-0.1233*C19))/0.34