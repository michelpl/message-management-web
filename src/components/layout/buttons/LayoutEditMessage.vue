<template>
  <button class="btn btn-sm btn-primary" @click="goToEditPage()">
    <i class="fa fa-edit"></i>
    Edit
  </button>
</template>

<script>
export default {
  props: ['messageId'],
  data () {
    return {
    }
  },
  methods: {
    goToEditPage () {
      this.$router.push({ name: 'announcement-edit', params: { id: this.messageId }, query: { id: this.messageId } })
    }
  }
}
</script>

<style scoped lang="scss">
  .btn i {
    color: var(--light)
  }
</style>
