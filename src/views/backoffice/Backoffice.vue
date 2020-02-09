<template>
  <div class="row">
    <div class="col-2 navigation-sidebar">
      <h1 class="app-title">Backoffice</h1>
      <layout-navigation></layout-navigation>
    </div>
    <div class="col-6 home-box">
      <h1>Backoffice</h1>
    </div>
  </div>
</template>

<script>
import LayoutNavigation from '../../components/layout/LayoutNavigation'
export default {
  name: 'Backoffice',
  components: { LayoutNavigation },
  data: () => ({
    email: '',
    password: '',
    loading: false
  }),
  mounted () {
    console.log()
  },
  methods: {
  }
}
</script>
