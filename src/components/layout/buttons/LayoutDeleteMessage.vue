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
  created () {
    this.$root.$on('Delete::confirm', (data) => {
      this.delete(data.modalItemId)
    }
    )
  },
  methods: {
    deleteMessage: function () {
      let modalArgs = {
        modalTitle: 'Delete',
        modalMessage: 'Are you sure you want to delete this announcement?',
        modalCallbackEvent: 'Delete:confirm',
        modalItemId: this.messageId
      }

      this.$root.$emit('Modal::show', modalArgs)
    },
    delete: function (messageId) {
      try {
        let token = localStorage.getItem('mm_token')
        const auth = 'Bearer ' + token

        let url = 'http://desafio.localhost/api/V1/message'
        let headers = {
          headers: {
            Authorization: auth
          }
        }

        if (messageId) {
          this.$http.delete(
            url + '/' + messageId,
            headers
          ).then(function (data) {
            this.$root.$emit('Alert::show', 'Announcement deleted!')
          })
        }
      } catch (err) {
        console.log(err)
      }
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
