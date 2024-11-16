import { registerPlugins } from './plugins'
import { createApp } from 'vue'
import ui from './component/ui'
import App from './App.vue'

import './main.less'

const app = createApp ( App )
registerPlugins(app)
ui.forEach ( ( component ) => {
   app.component ( component.name, component )
} )
app.mount ( '#app' )
