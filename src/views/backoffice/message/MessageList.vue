<template>
  <div class="row">
    <layoutNavbar></layoutNavbar>
    <div class="container-fluid">
      <div class="row">
        <layout-navigation></layout-navigation>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Announcement List</h1>
          </div>
          <layout-message-list></layout-message-list>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutNavigation from '../../../components/layout/LayoutNavigation'
import LayoutNavbar from '../../../components/layout/LayoutNavbar'
import LayoutMessageList from '../../../components/layout/LayoutMessageList'

export default {
  name: 'AnnouncementList',
  components: { LayoutMessageList, LayoutNavbar, LayoutNavigation }
}
</script>

<style scoped>
.pagination li {
  cursor: pointer;
}
</style>
