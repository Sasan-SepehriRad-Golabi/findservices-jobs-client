import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from "@/store/index"
import router from "@/router/index"
import vueCookies from 'vue-cookies'

loadFonts()
router.beforeEach((to, from) => {
  console.log(to);
  console.log(from)
})
createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(vueCookies, { expires: "7d" })
  .mount('#app')
