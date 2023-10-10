


//import './assets/vendors/popper/popper.min.js';
//import './assets/vendors/bootstrap/bootstrap.min.js';
//import './assets/vendors/anchorjs/anchor.min.js';

//const AnchorJS = require('anchor');
//import './assets/vendors/is/is.min.js';
// import './assets/vendors/prism/prism.js';
// import './assets/vendors/fontawesome/all.min.js';
// import './assets/vendors/lodash/lodash.min.js';
// import './assets/vendors/list.js/list.min.js';
// import './assets/js/theme.js';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
