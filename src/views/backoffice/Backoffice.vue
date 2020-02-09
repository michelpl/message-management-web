<template>
  <div class="row">
    <div class="col-2 navigation-sidebar">
      <h1 class="app-title">Backoffice</h1>
      <layout-navigation></layout-navigation>
    </div>
    <div class="col-6 home-box">
      <h1>Backoffice</h1>
      <ul>
        <li v-for="message in messageList" :key="message.id">{{ message.subject }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import LayoutNavigation from '../../components/layout/LayoutNavigation'
export default {
  name: 'Backoffice',
  components: { LayoutNavigation },
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
