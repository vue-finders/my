import Vue from 'vue'

// 自定义组件
Vue.component('blog-header', resolve => require(['@/components/common/blogHeader'],resolve))

Vue.component('blog-tabbar', resolve => require(['@/components/common/blogTabbar'],resolve))