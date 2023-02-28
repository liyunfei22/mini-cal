import { createApp } from "vue";
import "./app.scss";
import store from "./store";
import { Form, FormItem, Cell, CellGroup } from "@nutui/nutui-taro";

const App = createApp({
  onShow() {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(Form);
App.use(FormItem);
App.use(Cell);
App.use(CellGroup);
App.use(store);
export default App;
