import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Router from "vue-router";
import "@/assets/css/reset.css";
import "amfe-flexible/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/common.scss";
Vue.use(ElementUI);
Vue.config.productionTip = false;

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
