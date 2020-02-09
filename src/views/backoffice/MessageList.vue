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
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageList'
}
</script>

<style scoped>

</style>
