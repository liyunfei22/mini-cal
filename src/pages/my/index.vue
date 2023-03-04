<template>
  <div class="page-user">
  <nut-collapse v-model="activeName" :accordion="true">
    <nut-collapse-item :title="title1" :name="1" :icon="Notice">
      <template v-slot:value>
        文本测试
      </template>
      NUTUI3.0重新思考其内在的一致性和可组合性
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2" :icon="Follow">
      提⾼产研输出对接的效率，降低输出工作量
    </nut-collapse-item>
  </nut-collapse>
  <nut-empty description="无数据"></nut-empty>
  </div>
</template>
<script>
import { reactive, ref, toRefs } from 'vue';
import { Notice, Follow } from '@nutui/icons-vue-taro';
export default {
  setup() {
    const activeName = ref(1);
    const title = reactive({
      title1: '标题1',
      title2: '标题2',
    })
    return {
      activeName,
      ...toRefs(title),
      Notice,
      Follow
    };
  }
}
</script>
<style lang="scss">
  .page-user {
    background-color: #f5f7fc;
    min-height: 100vh;
    padding: 32px;
  }
</style>
