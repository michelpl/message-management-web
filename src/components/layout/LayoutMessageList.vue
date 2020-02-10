<template>
  <div>
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
            <layout-message-details :messageId="message.id"></layout-message-details> |
            <layout-edit-message :messageId="message.id"></layout-edit-message> |
            <layout-delete-message :messageId="message.id"></layout-delete-message>
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
  </div>
</template>

<script>
import LayoutEditMessage from './buttons/LayoutEditMessage'
import LayoutMessageDetails from './buttons/LayoutMessageDetails'
import LayoutDeleteMessage from './buttons/LayoutDeleteMessage'

export default {
  name: 'LayoutMessageList',
  components: { LayoutEditMessage, LayoutMessageDetails, LayoutDeleteMessage },
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
    let userId = localStorage.getItem('mm_user_id')
    this.loadPage('http://desafio.localhost/api/V1/message/user/' + userId)
  },
  methods: {
    reload (pageId) {
      if (pageId) {
        let userId = localStorage.getItem('mm_user_id')
        let page = 'http://desafio.localhost/api/V1/message/user/' + userId + '?page=' + pageId
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
    },
    formatDate (date) {
      let newDate = new Date(date)
      return newDate.getDate() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
