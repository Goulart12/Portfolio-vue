import { createApp } from "vue";
// import './style.css'
import "./base.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";

// import fontawesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
