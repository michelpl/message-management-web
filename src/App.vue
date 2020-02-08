<template>
  <div id="app">
    <base-spinner/>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSpinner from './components/gLobal/BaseSpinner'

export default {
  name: 'App',
  components: {
    BaseSpinner
  },
  mounted () {
    console.log('PASSOU NO MOUNTED DO APP.vue')
    this.$root.$emit('Spinner::hide')
  }
}
</script>

<style lang="scss">
  #app {
    min-height: 100vh;
    color: var(--light);
    background-color: var(--darker);
    .navigation-sidebar {
      background-color: var(--dark-medium);
      .app-title {
        font-size: 20pt;
        margin-top: 10px;
        text-align: center;
      }
    }
  }
</style>
