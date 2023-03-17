<template>
  <nut-form class="login-page">
    <nut-form-item label="手机号" required class="item">
      <nut-input placeholder="请输入手机号" type="number" v-model="state.phone" />
    </nut-form-item>

    <nut-form-item label="密码" required>
      <nut-input
        placeholder="请输入密码"
        v-model="state.password"
        type="password"
      />
    </nut-form-item>
  </nut-form>
  <div block @click="submit" type="primary">登录</div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  phone: "",
  password: "",
});
const submit = () => {
  console.log(1);
};
</script>

<style lang="scss">
.login-page {
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding: 32px;
  .item {
    margin-bottom: 16px;
  }
  .title{
    margin-bottom: 8px;
    margin-left: 50px;
  }
}
</style>
