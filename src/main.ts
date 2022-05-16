import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
process.env.NODE_ENV == "development" && require("@/mock/index");

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .mount("#app");
