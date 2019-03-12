// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/boder.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import vueWaterfallEasy from 'vue-waterfall-easy'

Vue.config.productionTip = false
fastClick.attach(document.body)//移动端三百毫秒点击事件
Vue.use(VueAwesomeSwiper, /* { default global options } */)
// Vue.use(vueWaterfallEasy)

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
