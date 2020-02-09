import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// eslint-disable-next-line no-undef
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        icon: 'home', title: 'Home'
      },
      component: () => import(/* webpackChunkName: "home" */ '../views/Home')
    },
    {
      name: 'login',
      path: '/login',
      meta: { title: 'Login' },
      component: () => import(/* webpackChunkName: "login" */ '../views/login/Login')
    },
    {
      name: 'backoffice',
      path: '/backoffice',
      meta: { title: 'Home' },
      component: () => import(/* webpackChunkName: "backoffice" */ '../views/backoffice/Backoffice')
    },
    {
      name: 'announcement-list',
      path: '/announcement-list',
      meta: { title: 'Announcements List' },
      component: () => import(/* webpackChunkName: "messagelist" */ '../views/backoffice/MessageList')
    },
    {
      name: 'announcement-create',
      path: '/announcement-create',
      meta: { title: 'Create announcement' },
      component: () => import(/* webpackChunkName: "announcementcreate" */ '../views/backoffice/MessageCreate')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Message Management`
  if (localStorage.getItem('mm_token') === null && to.name === 'backoffice') {
    next({ name: 'login' })
  } else {
    next()
  }
  /* if (!window.uid && to.name !== 'login' && to.name !== 'backoffice') {
    next({ name: 'login' })
  } else {
    next()
  } */
})

export default router
