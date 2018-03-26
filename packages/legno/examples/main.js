import Vue from "vue"
import App from "./App.vue"
import Router from "vue-router"
import routes from "./routes"
import Home from "./components/home"
import "../../legno-theme-antd/lib/index.css"

Vue.config.productionTip = false

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    ...routes,
  ],
})

Vue.use(Router)

export default new Vue({
  el: "#app",
  name: "app",
  router,
  render: h => h(App),
})
