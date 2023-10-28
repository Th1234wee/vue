import './assets/main.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-teal/theme.css'

import { createApp } from 'vue'
import App from './App.vue';

const app = createApp(App);
app.mount('#app');
app.use(PrimeVue);

