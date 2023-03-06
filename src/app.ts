import { createApp } from "vue";
import "./app.scss";
import store from "./store";
import Taro from '@tarojs/taro'
import { createPinia } from 'pinia'

const App = createApp({
  onShow() {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(createPinia());
if (Taro.ENV_TYPE.WEAPP) {
  console.log(Taro.getEnv())
  console.log(Taro.getAccountInfoSync())
  // Taro.openSetting() //调起客户端小程序设置界面 只能在用户的tap调用
  Taro.getSetting().then(res => console.log('获取用户的当前设置', res))
  Taro.login().then(res => console.log('取登录凭证', res))
  console.log('获取当前帐号信息', Taro.getAccountInfoSync()) // 账号信息
}
export default App;
