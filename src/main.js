import Vue from 'vue'
import VueI18n from 'vue-i18n'
import router from './router'
import Vuelidate from 'vuelidate'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import App from './App.vue'


Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Vuelidate)
Vue.use(VueToast, {
  // One of the options
  position: 'top-right'
})
import 'bootstrap/dist/css/bootstrap.min.css'


function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}

  locales.keys().forEach(key => {
    let keyPath = key.split('/')
    keyPath.shift()
    let fileName = keyPath[keyPath.length - 1]
    let lang = fileName.split('.')[0]
    messages[lang] = locales(key)
  })

  return messages
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages: loadLocaleMessages() // set locale messages
})


new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
