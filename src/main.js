// 引入全部样式
// import 'vant/lib/index.less'
// import './assets/reset.css'
import './assets/basic.css'
import '@arco-design/web-vue/dist/arco.css'
import 'vant/es/image-preview/style'
import 'uno.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
