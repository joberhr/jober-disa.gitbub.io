import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as Tabs from 'vue-slim-tabs'

Vue.config.productionTip = false;

Vue.use(Tabs);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
