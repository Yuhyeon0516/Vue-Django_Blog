import Vue from 'vue';
import AppPostDetailVue from './AppPostDetail.vue';
import vuetify from '../plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: (h) => h(AppPostDetailVue),
}).$mount('#app');
