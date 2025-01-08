import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/main.css'
import 'azion-theme'
import './assets/icons/azionicons.scss'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'
import App from './App.vue'

const themeMap = {
  light: 'light',
  dark: 'dark'
}

const themeDefault = themeMap.light
const serverUrlDefault = import.meta.env.VITE_COPILOT_ENDPOINT
const suggestionsDefault = `[
  {
    "icon": "pi pi-question-circle",
    "title": "How can you help me?",
    "context": "How can you help me?"
  }
]`

const suggestionsOptionsDefault = JSON.parse(suggestionsDefault)
const titleDefault = import.meta.env.VITE_TITLE || ''
const subTitleDefault = 'Your AI-Powered Copilot'

const CONFIG_DEFAULT = {
  theme: themeDefault,
  serverUrl: serverUrlDefault,
  suggestionsOptions: suggestionsOptionsDefault,
  title: titleDefault,
  subTitle: subTitleDefault
}

const app = createApp(App, CONFIG_DEFAULT)

if (CONFIG_DEFAULT.theme) {
  document.documentElement.classList.add('azion', `azion-${CONFIG_DEFAULT.theme}`)
}

app.use(PrimeVue)
app.directive('tooltip', Tooltip)

app.mount('#app')