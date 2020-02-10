<template>
  <div class="row">
    <layoutNavbar></layoutNavbar>
    <div class="container-fluid">
      <div class="row">
        <layout-navigation></layout-navigation>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Announcement Management Backoffice</h1>
          </div>
          <hr>
          <div class="container marketing">
            <hr class="featurette-divider">

            <div class="row featurette">
              <div class="col-md-7">
                <h2 class="featurette-heading">Here you can manage your announcements</h2>
                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
              </div>
            </div>

            <hr class="featurette-divider">
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
  name: 'Backoffice',
  components: { LayoutNavbar, LayoutNavigation },
  mounted () {
    this.$root.$emit('Spinner::hide')
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
