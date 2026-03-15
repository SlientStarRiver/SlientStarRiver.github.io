import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 按需引入 Element Plus 组件
import { ElTag, ElButton } from 'element-plus'
app.component('ElTag', ElTag)
app.component('ElButton', ElButton)

app.use(router)
app.mount('#app')
