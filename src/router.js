import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Register from '@/components/auth/Register.vue';
import Login from '@/components/auth/Login.vue';
import Settings from './components/main/Settings.vue'
import Menu from './views/Menu.vue'
// import Test1 from './views/Test1.vue';
import Restaurant from './views/Restaurant.vue'
// import TestJuan from './views/TestJuan.vue';
import RestaurantDetail from './components/restaurant/RestaurantDetail.vue';
import QrCode from './views/QrCode.vue';
import ReviewList from './views/ReviewList.vue'
//import { settings } from 'cluster';


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/signup',
      name: 'Signup',
      component: Register
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    // {
    //   path:'/test1',
    //   name: 'Test1',
    //   component: Test1
    // },
    {
      path:'/restaurant',
      name: 'restaurant',
      component: Restaurant
    },
    // {
    //   path:'/testjuan',
    //   name: 'TestJuan',
    //   component: TestJuan
    // },
    {
      path: '/reviewList',
      name: 'reviewList',
      component: ReviewList
    },
    {
      path:'/restDetail',
      name: 'restDetail',
      component: RestaurantDetail
    },
    {
      path:'/qrCode',
      name: 'qrCode',
      component: QrCode

    },
    {
      path: '/userprofile',
      name: 'UserProfile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/UserProfile.vue')
    }
  ]
});

export default router;
