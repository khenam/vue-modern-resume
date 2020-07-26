import Vue from 'vue'
import helper from '@/plugins/helper'
import App from '@/App.vue'
import '@/plugins/vuetify'
import '@/components'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(helper)

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount('#app')
