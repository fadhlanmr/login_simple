import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import router from './router'

Vue.prototype.$http = Axios;

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})