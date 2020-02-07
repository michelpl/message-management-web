<template>
  <div id="app">
    <BaseSpinner></BaseSpinner>
    <router-view/>
  </div>
</template>

<script>
import BaseSpinner from './components/gLobal/BaseSpinner'

export default {
  components: {
    BaseSpinner
  }
}

</script>

<style lang="scss">
</style>
