import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'dashoard',
    component: () => import('../components/Layout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../dynamiccom/home.vue')
      }
    ],
    meta:{ auth: true }
  },
  {
    path:'/login',
    name:'login',
    component: () => import('../dynamiccom/Login.vue')
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to,from ,next) => {
  const isAuth = sessionStorage.getItem('so')
  if(to.meta.auth && !isAuth){
    next ('/login')
  }else{
    next ()
  }
})

export default router;
