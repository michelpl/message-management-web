<template>
<form @submit.prevent="submitMessage()">
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
    <select class="form-control" id="status" v-model="status" :disabled="loading">
      <option>ACTIVE</option>
      <option>INACTIVE</option>
    </select>
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
  <button type="submit" class="btn btn-primary" :disabled="loading">Submit</button>
</form>
</template>

<script>
export default {
  name: 'LayoutForm',
  props: ['messageId'],
  data () {
    return {
      loading: false,
      subject: '',
      content: '',
      startdate: '',
      expirationdate: '',
      status: 'ACTIVE'
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
        this.loading = true

        let token = localStorage.getItem('mm_token')
        const auth = 'Bearer ' + token

        this.$http.get(
          'http://desafio.localhost/api/V1/message/' + messageId,
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

          this.loading = false
        })
      } catch (err) {
        console.log(err)
      }
    },
    submitMessage: function () {
      const {
        subject,
        content,
        startdate,
        expirationdate,
        status
      } = this

      try {
        this.loading = true

        let token = localStorage.getItem('mm_token')
        let userId = localStorage.getItem('mm_user_id')
        let messageId = this.messageId ? this.messageId : ''
        const auth = 'Bearer ' + token

        let url = 'http://desafio.localhost/api/V1/message'
        let data = {
          'subject': subject,
          'content': content,
          'start_date': startdate,
          'expiration_date': expirationdate,
          'status': status,
          'user_id': userId
        }
        let headers = {
          headers: {
            Authorization: auth
          }
        }

        if (messageId) {
          this.$http.put(
            url + '/' + messageId,
            data,
            headers
          ).then(function (data) {
            this.$root.$emit('Alert::show', 'Announcement updated!')
            let parent = this

            setTimeout(function () {
              parent.$root.$emit('Alert::hide', '')
              parent.loading = false
            }, 3000)
          })
        } else {
          this.$http.post(
            url,
            data,
            headers
          ).then(function (data) {
            this.$root.$emit('Alert::show', 'Announcement created!')
            let parent = this

            setTimeout(function () {
              parent.$root.$emit('Alert::hide', '')
              parent.loading = false
              parent.subject = ''
              parent.content = ''
              parent.startdate = ''
              parent.expirationdate = ''
            }, 3000)
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
