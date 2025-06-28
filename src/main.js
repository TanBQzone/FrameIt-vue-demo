import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style/main.css";
import router from "@/router/index.js";

// 配置根据系统主题切换icon
import { initFaviconByTheme } from "@/utils/setFaviconForTheme.js";
initFaviconByTheme();

createApp(App).use(router).mount("#app");