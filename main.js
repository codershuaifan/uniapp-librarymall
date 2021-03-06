import Vue from 'vue'
import App from './App'
import store from '@/store';

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
// export const eventBus = new vue()

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

let vuexStore = require("@/store/$u.mixin.js");
Vue.mixin(vuexStore);

const app = new Vue({
		store,
    ...App
})

import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

import utils from '@/common/utils.js'
Vue.use(utils, app)

app.$mount()
