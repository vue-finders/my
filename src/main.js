// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// 引入全局 阿里巴巴矢量图标
import '@/public/icon/iconfont.css';

// 按需引入注册并组件 js   （ 项目所有组件注册都由此文件 ）
import '@/public/js/certified_components.js';
import '@/public/css/common.css'

import 'element-ui/lib/theme-chalk/index.css';
import { 
	Button,Select,Menu,MenuItem,Submenu,Carousel,CarouselItem,TabPane,Tabs,Row,Col
	} from 'element-ui';
// 注册使用element-ui
Vue.use(Button);
Vue.use(Select);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(TabPane);
Vue.use(Tabs);
Vue.use(Row);
Vue.use(Col)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
