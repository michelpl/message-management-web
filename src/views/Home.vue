<template>
  <div class="container">
    <header class="blog-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <a class="text-muted" href="#">Homepage</a>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <router-link class="btn btn-sm btn-outline-secondary" to="/login">Sign in</router-link>
        </div>
      </div>
    </header>

    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <a class="p-2 text-muted" href="#">World</a>
        <a class="p-2 text-muted" href="#">U.S.</a>
        <a class="p-2 text-muted" href="#">Technology</a>
        <a class="p-2 text-muted" href="#">Design</a>
        <a class="p-2 text-muted" href="#">Culture</a>
        <a class="p-2 text-muted" href="#">Business</a>
        <a class="p-2 text-muted" href="#">Politics</a>
        <a class="p-2 text-muted" href="#">Opinion</a>
        <a class="p-2 text-muted" href="#">Science</a>
        <a class="p-2 text-muted" href="#">Health</a>
        <a class="p-2 text-muted" href="#">Style</a>
        <a class="p-2 text-muted" href="#">Travel</a>
      </nav>
    </div>

    <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">Message Management System</h1>
        <p class="lead my-3">Click on <router-link to="/login">Sign in</router-link> button to login</p>
        <p class="lead my-3">This is a sample page and everything here is for example propouses</p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="card mb-4 box-shadow">
          <br>
          <img class="card-img-top" src="@/assets/github.png" data-holder-rendered="true">
          <div class="card-body">
            <p class="card-text">See this project Github and how set up the development environment</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="https://github.com/michelpl/message-management-docker" class="btn btn-sm btn-outline-secondary" target="_blank">View</a>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.navbar {
  background-color: var(--light);
  color: var(--darker);
}
</style>
