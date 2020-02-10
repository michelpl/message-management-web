<template>
  <div class="row">
    <layoutNavbar></layoutNavbar>
    <div class="container-fluid">
      <div class="row">
        <layout-navigation></layout-navigation>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Deleted announcement List</h1>
          </div>
          <deleted-layout-message-list></deleted-layout-message-list>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutNavigation from '../../../components/layout/LayoutNavigation'
import LayoutNavbar from '../../../components/layout/LayoutNavbar'
import DeletedLayoutMessageList from '../../../components/layout/DeletedLayoutMessageList'

export default {
  name: 'AnnouncementList',
  components: { DeletedLayoutMessageList, LayoutNavbar, LayoutNavigation }
}
</script>

<style scoped>
.pagination li {
  cursor: pointer;
}
</style>
