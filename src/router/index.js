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
      meta: { title: 'Announcement List' },
      component: () => import(/* webpackChunkName: "messagelist" */ '../views/backoffice/message/MessageList')
    },
    {
      name: 'announcement-create',
      path: '/announcement-create',
      meta: { title: 'Create announcement' },
      component: () => import(/* webpackChunkName: "announcementcreate" */ '../views/backoffice/message/MessageCreate')
    },
    {
      name: 'announcement-edit',
      path: '/announcement-edit',
      meta: { title: 'Edit announcement' },
      component: () => import(/* webpackChunkName: "announcementedit" */ '../views/backoffice/message/MessageEdit')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Message Management`
  if (
    localStorage.getItem('mm_token') === null &&
    (
      to.name === 'backoffice' ||
      to.name === 'announcement-list' ||
      to.name === 'announcement-create' ||
      to.name === 'announcement-edit'
    )
  ) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
