import './assets/styles/global.scss'
import './assets/styles/utils.scss'
import './assets/styles/reset.css'
import './assets/styles/falling.scss'
import App from './App.svelte'
import { initApp } from './lib/firebase'

initApp()

const app = new App({
  target: document.getElementById('app') as HTMLElement
})

export default app
