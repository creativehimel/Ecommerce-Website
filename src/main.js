import './assets/main.css'
// Supports weights 100-900
import '@fontsource-variable/inter'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiStarHalf, BiStarFill, BiCart3, LaShoppingBagSolid } from 'oh-vue-icons/icons'

addIcons(BiStarHalf, BiStarFill, BiCart3, LaShoppingBagSolid)
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
