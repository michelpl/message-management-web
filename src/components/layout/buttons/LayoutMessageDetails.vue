<template>
  <button class="btn btn-sm btn-primary" @click="goToDetailsPage()">
    <i class="far fa-eye"></i>
    Details
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
    goToDetailsPage () {
      this.$router.push({ name: 'announcement-details', params: { id: this.messageId }, query: { id: this.messageId } })
    }
  }
}
</script>

<style scoped lang="scss">
  .btn i {
    color: var(--light)
  }
</style>
