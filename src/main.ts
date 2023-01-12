import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "./../src/index.css";

const app = createApp(App);

app.use(PrimeVue);

app.mount("#app");
