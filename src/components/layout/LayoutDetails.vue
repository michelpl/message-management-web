<template>
<form @submit.prevent="">
  <div class="form-group">
    <label for="subject">Subject</label>
    <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" maxlength="255" required v-model="subject" :disabled="loading">
  </div>
  <div class="form-group">
    <label for="content">Content</label>
    <textarea class="form-control" id="content" rows="3" maxlength="500" required v-model="content" :disabled="loading"></textarea>
  </div>
  <div class="form-group" v-if="messageId">
    <label for="status">Message Status</label>
    <input type="text" class="form-control" id="status" v-model="status" :disabled="loading">
  </div>
  <div class="form-group">
    <label for="updated-at">Updated at</label>
    <input type="text" class="form-control" id="updated-at" name="updated-at" placeholder="Updated at" required v-model="updatedAt" :disabled="loading">
  </div>
  <div class="row">
    <div class="form-group col-6">
      <label for="startdate">Start date</label>
      <input type="date" class="form-control" id="startdate" placeholder="Start date" required v-model="startdate" :disabled="loading">
    </div>
    <div class="form-group col-6">
      <label for="expirationdate">Expiration date</label>
      <input type="date" class="form-control" id="expirationdate" placeholder="Expiration date" required v-model="expirationdate" :disabled="loading">
    </div>
  </div>
</form>
</template>

<script>
export default {
  name: 'LayoutForm',
  props: ['messageId'],
  data () {
    return {
      loading: true,
      subject: '',
      content: '',
      startdate: '',
      expirationdate: '',
      status: '',
      updatedAt: ''
    }
  },
  mounted () {
    if (this.messageId) {
      this.loadMessage(this.messageId)
    }
  },
  methods: {
    loadMessage: function (messageId) {
      try {
        let token = localStorage.getItem('mm_token')
        const auth = 'Bearer ' + token

        this.$http.get(
          'http://localhost:8000/api/V1/message/' + messageId,
          {
            headers: {
              Authorization: auth
            }
          }
        ).then(function (data) {
          this.subject = data.body.subject
          this.content = data.body.content
          this.startdate = data.body.start_date
          this.expirationdate = data.body.expiration_date
          this.status = data.body.status

          let formattedDate = this.formatDate(data.body.updated_at)
          this.updatedAt = formattedDate
        })
      } catch (err) {
        // console.log(err)
      }
    },
    formatDate (date) {
      let newDate = new Date(date)
      return newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear() + ' ' + newDate.getHours() + 'h:' + newDate.getMinutes() + ':' + newDate.getSeconds()
    }
  }
}
</script>

<style scoped>

</style>
