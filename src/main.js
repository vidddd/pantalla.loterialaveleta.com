import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueResource from 'vue-resource'

var numeral = require('numeral') //http://numeraljs.com/
require('@/assets/css/style.css')
require('@/assets/css/bootstrap-grid.min.css')

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.filter('formatBote', value => {
  let number = numeral(value)
  if (number._value > 999999)
    return number.divide('1000000')._value + ' millones €'
  else return number.format('0,0') + ' €'
})

new Vue({
  store,
  data: {},
  render: h => h(App)
}).$mount('#app')
