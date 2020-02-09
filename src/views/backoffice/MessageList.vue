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
                <li class="page-item"><a class="page-link" @click.prevent="loadPreviousPage()">Previous</a></li>
                <span v-for="page in pagination" :key="page">
                  <li class="page-item"><a class="page-link" @click.prevent="reload(page)"> {{ page }}</a></li>
                </span>
                <li class="page-item"><a class="page-link" @click.prevent="loadNextPage()">Next</a></li>
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
      loading: false,
      nextPage: '',
      previousPage: '',
      pageCount: 0,
      pagination: 1
    }
  },
  mounted () {
    this.loadPage('http://desafio.localhost/api/V1/message')
  },
  methods: {
    reload (pageId) {
      if (pageId) {
        let page = 'http://desafio.localhost/api/V1/message?page=' + pageId
        this.loadPage(page)
      }
    },
    loadPreviousPage () {
      let page = this.previousPage
      if (page) {
        this.loadPage(page)
      }
    },
    loadNextPage () {
      let page = this.nextPage
      if (page) {
        this.loadPage(page)
      }
    },
    loadPage (page) {
      try {
        let token = localStorage.getItem('mm_token')
        const auth = 'Bearer ' + token
        this.$http.get(page, {
          headers: {
            Authorization: auth
          }
        }).then(function (data) {
          this.messageList = data.body.data
          this.nextPage = data.body.next_page_url
          this.previousPage = data.body.prev_page_url
          this.pageCount = data.body.last_page
          this.pagination = this.pageCount

          if (this.pageCount > 20) {
            this.pagination = 20
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.pagination li {
  cursor: pointer;
}
</style>
