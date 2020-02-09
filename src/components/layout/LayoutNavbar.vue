<template>
<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 col-12">
  <h1><router-link to="/backoffice" class="navbar-brand col-sm-3 col-md-2 mr-0">Message Management System</router-link></h1>
  <ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
      <layout-logout/>
    </li>
  </ul>
</nav>
</template>

<script>
import LayoutLogout from './LayoutLogout'

export default {
  name: 'LayoutNavbar',
  components: { LayoutLogout }
}
</script>

<style scoped>
  h1 a {
    color: var(--light)!important;
  }
</style>
