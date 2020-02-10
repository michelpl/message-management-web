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
                <layout-form></layout-form>
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
import LayoutForm from '../../../components/layout/LayoutForm'

export default {
  name: 'AnnouncementCreate',
  components: {
    LayoutNavbar,
    LayoutNavigation,
    Alert,
    LayoutForm
  },
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    this.$root.$emit('Spinner::hide')
  }
}
</script>

<style scoped>

</style>
