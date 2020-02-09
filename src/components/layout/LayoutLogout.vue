<template>
  <button class="btn btn-sm btn-outline-secondary" @click="logout()">
    <i class="fa fa-power-off"></i>
    Sign out
  </button>
</template>

<script>
export default {
  methods: {
    async logout () {
      this.$root.$emit('Spinner::show')
      localStorage.removeItem('mm_token')
      await this.$router.push({ name: 'login' })
      this.$root.$emit('Spinner::hide')
    }
  }
}
</script>

<style scoped lang="scss">
  .btn-logout {
    width: 100%;
    cursor: pointer;
    color: var(--white);
    &:hover {
      color: var(--featured);
    }
  }
</style>
