import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from "@/components/Details";
import Create from "@/views/Create";
import RealTime from "@/views/RealTime";
import Tag from "@/views/Tag";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/realtime',
    name: 'RealTime',
    component: RealTime
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
