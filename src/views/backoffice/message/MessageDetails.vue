<template>
  <div class="row">
    <layoutNavbar></layoutNavbar>
    <div class="container-fluid">
      <div class="row">
        <layout-navigation></layout-navigation>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <alert></alert>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Announcement details</h1>
          </div>
          <h2>Announcement</h2>
          <div class="row">
            <div class="card col-9">
              <div class="card-body">
                <layout-details :messageId="messageId"></layout-details>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutNavigation from '../../../components/layout/LayoutNavigation'
import LayoutNavbar from '../../../components/layout/LayoutNavbar'
import Alert from '../../../components/gLobal/Alert'
import LayoutDetails from '../../../components/layout/LayoutDetails'

export default {
  name: 'AnnouncementDetails',
  components: {
    LayoutNavbar,
    LayoutNavigation,
    Alert,
    LayoutDetails
  },
  data () {
    return {
      loading: false,
      messageId: this.$router.currentRoute.query.id ? this.$router.currentRoute.query.id : null
    }
  },
  mounted () {
    if (!this.$router.currentRoute.params.id) {
      this.$router.push({ name: 'announcement-list' })
    }
  }
}
</script>

<style scoped>

</style>
