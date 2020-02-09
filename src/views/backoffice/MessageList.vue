<template>
  <div class="row">
    <layoutNavbar></layoutNavbar>
    <div class="container-fluid">
      <div class="row">
        <layout-navigation></layout-navigation>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Announcements List</h1>
          </div>
          <h2>Announcements</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
              <tr>
                <th>#</th>
                <th>Start date</th>
                <th>Expiration date</th>
                <th>Subject</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="message in messageList" :key="message.id">
                <td>{{ message.id }}</td>
                <td>{{ message.start_date }}</td>
                <td>{{ message.expiration_date }}</td>
                <td>{{ message.subject }}</td>
                <td>
                  <router-link to="/home">View</router-link>
                  <router-link to="/">Edit</router-link>
                  <router-link to="/">Delete</router-link>
                </td>
              </tr>
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutNavigation from '../../components/layout/LayoutNavigation'
import LayoutNavbar from '../../components/layout/LayoutNavbar'
export default {
  name: 'AnnouncementList',
  components: { LayoutNavbar, LayoutNavigation },
  data () {
    return {
      messageList: [],
      loading: false
    }
  },
  mounted () {
    this.$root.$emit('Spinner::hide')
    try {
      let token = localStorage.getItem('mm_token')
      const auth = 'Bearer ' + token

      this.$http.get('http://desafio.localhost/api/V1/message', {
        headers: {
          Authorization: auth
        }
      }).then(function (data) {
        this.messageList = data.body.data
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
