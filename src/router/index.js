import Vue from 'vue'
import VueRouter from 'vue-router'
import poss from "@/components/page/poss"
import viewer from "@/components/viewer/viewer"
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "poss",
    component:poss
  },
  {
    path: "/viewer",
    name: "viewer",
    component:viewer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
