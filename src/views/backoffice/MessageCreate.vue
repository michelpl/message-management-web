<template>
  <div class="row">
    <layoutNavbar></layoutNavbar>
    <div class="container-fluid">
      <div class="row">
        <layout-navigation></layout-navigation>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <alert></alert>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Create Announcement</h1>
          </div>
          <h2>Announcement</h2>
          <div class="row">
            <div class="card col-3">
              <div class="card-body">
                <h3>Instructions</h3>
                <p>Fill all form fields an click on submit button to create your announcement.</p>
                <p></p>
              </div>
            </div>
            <div class="card col-9">
              <div class="card-body">
                <form @submit.prevent="createAnnouncement()">
                  <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" maxlength="255" required v-model="subject">
                    {{subject}}
                  </div>
                  <div class="form-group">
                    <label for="content">Content</label>
                    <textarea class="form-control" id="content" rows="3" maxlength="500" required v-model="content"></textarea>
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="startdate">Start date</label>
                      <input type="date" class="form-control" id="startdate" placeholder="Start date" required v-model="startdate">
                    </div>
                    <div class="form-group col-6">
                      <label for="expirationdate">Expiration date</label>
                      <input type="date" class="form-control" id="expirationdate" placeholder="Expiration date" required v-model="expirationdate">
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutNavigation from '../../components/layout/LayoutNavigation'
import LayoutNavbar from '../../components/layout/LayoutNavbar'
import Alert from '../../components/gLobal/Alert'

export default {
  name: 'AnnouncementCreate',
  components: {
    LayoutNavbar,
    LayoutNavigation,
    Alert
  },
  data () {
    return {
      loading: false,
      subject: '',
      content: '',
      startdate: '',
      expirationdate: ''
    }
  },
  mounted () {
    this.$root.$emit('Spinner::hide')
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
