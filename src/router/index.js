import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Works from "../components/Works.vue";
import Contact from "../components/Contact.vue";

import { HSStaticMethods } from "preline/preline";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/works",
    name: "Works",
    component: Works,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 100);
  }
});

export default router;
