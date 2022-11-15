import { createApp } from "vue";
import { AppLoader } from "loader";
import * as injectionKes from "./injections";
import "./style.css";
import App from "./App.vue";

const postInstance = AppLoader.getPostInstance();
const app = createApp(App);
app.provide(injectionKes.POST_API, postInstance);
app.mount("#app");
