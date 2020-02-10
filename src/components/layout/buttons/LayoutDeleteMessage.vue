<template>
  <button class="btn btn-sm btn-danger" @click="deleteMessage()">
    <i class="far fa-trash-alt"></i>
    Delete
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
    deleteMessage () {
    }
  }
}
</script>

<style scoped lang="scss">
  .btn i {
    color: var(--light)
  }
  .btn-danger {
    background-color: var(--danger);
    &:hover {
      background-color: var(--red);
    }
  }
</style>
