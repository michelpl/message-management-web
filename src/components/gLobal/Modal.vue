<template>
<div>
  <!-- Modal -->
  <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" v-if="visible">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hide()">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {{ modalMessage }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="hide()">Cancel</button>
          <button type="button" class="btn btn-primary" @click="confirm">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      visible: false,
      modalTitle: '',
      modalMessage: '',
      modalCallbackEvent: '',
      modalItemId: 0
    }
  },
  created () {
    this.$root.$on('Modal::show', (data) => {
      this.modalTitle = data.modalTitle
      this.modalMessage = data.modalMessage
      this.modalCallbackEvent = data.modalCallbackEvent
      this.modalItemId = data.modalItemId
      this.visible = true
    })
    this.$root.$on('Modal::hide', () => { this.visible = false })
  },
  methods: {
    hide () {
      this.visible = false
    },
    show () {
      this.visible = true
    },
    confirm () {
      let event = 'Delete::confirm'
      this.$root.$emit(event, { modalItemId: this.modalItemId })
      this.hide()
    }
  }
}
</script>

<style scoped>
.modal {
  display: block!important;
}
</style>
