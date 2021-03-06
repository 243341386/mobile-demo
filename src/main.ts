import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'Assets/base.css'
import '@/assets/font/iconfont.css'
import Api from './api/index'
Vue.prototype.$api = Api

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
