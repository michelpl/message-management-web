<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <router-link
          exact
          :key="i"
          class="nav-link"
          exact-active-class="active"
          :to="{ name: router.name }"
          v-for="(router, i) in routerLinks"
        >
          <i class="fa" :class="`fa-${router.meta.icon}`"></i>
          {{ router.meta.title }}
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  components: {
  },
  computed: {
    routerLinks () {
      return this.$router.options.routes.filter(
        r => r.name !== 'login' && r.name !== 'home'
      )
    }
  }
}
</script>

<style scoped lang="scss">
  .nav {
    margin-left: -15px;
    width: calc(100% + 30px);
    height: calc(100vh - 49px);
    .nav-link {
      color: var(--white);
      transition: .4s;
      &.active {
        color: var(--featured);
        background-color: transparent;
      }
      &:hover {
        color: var(--light);
        background-color: var(--featured);
      }
    }
  }
</style>
