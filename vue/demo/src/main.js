import Vue from 'vue'
import App from './App.vue'
import MyComponent from '@/RenderComponents'
import '@/RenderComponents/css/index.css'

Vue.use(MyComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
