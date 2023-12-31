import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "@/views/HomeComponent.vue"
import monCompte from '../views/MoncompteView.vue'
import GardiennageView from '@/views/GardiennageView.vue'

const routes = [
  {
    path: '/',
    name: 'home1',
    component: HomeComponent
  },
  {
    path: '/home',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/profil',
    name: 'myContentDrawer',
    component: () => import('../views/ProfilView.vue')
  },



  {
    path: '/login',
    name: "LoginComponent",
    component: () => import('../views/LoginComponent.vue')
  },
  {
    path: '/auth2',
    name: "DoubleAuth",
    component: () => import('../views/doubleAuth.vue')
  },
  {
    path: '/register',
    name: 'RegisterLogin',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/demande-gardinnage',
    name: 'DemandeGardinnage',
    component: () => import('../views/DemandeGardinnage.vue')
  },
  {
    path: '/compte',
    name: 'mon compte',
    component: monCompte
  },
  {
    path: '/gardiennage',
    name: 'gariennageView',
    component: GardiennageView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
