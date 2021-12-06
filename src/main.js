import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/index.scss";

import VueMultiselect from "vue-multiselect";

const app = createApp(App);

app.component("Multiselect", VueMultiselect);

app.use(store).use(router).mount("#app");
