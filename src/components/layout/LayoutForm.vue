<template>
<form @submit.prevent="createAnnouncement()">
  <div class="form-group">
    <label for="subject">Subject</label>
    <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" maxlength="255" required v-model="subject" :disabled="loading">
    {{subject}}
  </div>
  <div class="form-group">
    <label for="content">Content</label>
    <textarea class="form-control" id="content" rows="3" maxlength="500" required v-model="content" :disabled="loading"></textarea>
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
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
export default {
  name: 'LayoutForm',
  data () {
    return {
      loading: false,
      subject: '',
      content: '',
      startdate: '',
      expirationdate: ''
    }
  },
  methods: {
    createAnnouncement: function () {
      const {
        subject,
        content,
        startdate,
        expirationdate
      } = this

      try {
        this.loading = true

        let token = localStorage.getItem('mm_token')
        const auth = 'Bearer ' + token

        this.$http.post(
          'http://desafio.localhost/api/V1/message',
          {
            'subject': subject,
            'content': content,
            'start_date': startdate,
            'expiration_date': expirationdate,
            'status': 'ACTIVE',
            'user_id': 3
          }, {
            headers: {
              Authorization: auth
            }
          }
        ).then(function (data) {
          this.subject = ''
          this.content = ''
          this.startdate = ''
          this.expirationdate = ''

          this.$root.$emit('Alert::show', 'Announcement created!')

          let parent = this

          setTimeout(function () {
            parent.$root.$emit('Alert::hide', '')
            parent.loading = false
          }, 3000)
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
