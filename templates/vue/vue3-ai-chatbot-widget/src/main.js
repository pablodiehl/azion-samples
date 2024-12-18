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

const decodeOrDefault = (value, defaultValue) => {
  try {
    return value ? atob(value) : defaultValue
  } catch (e) {
    console.warn(`Erro ao decodificar valor: ${value}. Usando valor padrão.`, e)
    return defaultValue
  }
}

const parseJsonOrDefault = (value, defaultValue) => {
  try {
    return JSON.parse(value)
  } catch (e) {
    console.warn(`Erro ao parsear JSON: ${value}. Usando valor padrão.`, e)
    return JSON.parse(defaultValue)
  }
}

const themeDefault = decodeOrDefault(import.meta.env.VITE_THEME, themeMap.light)
const serverUrlDefault = decodeOrDefault(
  import.meta.env.VITE_COPILOT_ENDPOINT,
  'https://ai.azion.com/copilot/chat/completions'
)
const suggestionsDefault = `[
  {
    "icon": "pi pi-question-circle",
    "title": "How can I get started?",
    "context": "How do I build an edge application?"
  }, 
  {
    "icon": "pi pi-shield",
    "title": "How do I protect my application?",
    "context": "How do I protect my application?"
  }
]`
console.log(import.meta.env.VITE_SUGGESTIONS)

const suggestionsOptionsDefault = parseJsonOrDefault(
  decodeOrDefault(import.meta.env.VITE_SUGGESTIONS, suggestionsDefault),
  suggestionsDefault
)
const titleDefault = decodeOrDefault(import.meta.env.VITE_TITLE, '')
const subTitleDefault = decodeOrDefault(import.meta.env.VITE_SUBTITLE, 'How can I help you today?')

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
