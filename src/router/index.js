import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import ImgOpen from "@/views/ImgOpen.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/img-open",
		name: "ImgOpen",
		component: ImgOpen,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
