<template>
  <div class="row">
    <div class="col-2 navigation-sidebar">
      <h1 class="app-title">Backoffice</h1>
    </div>
    <div class="col-6 home-box">
      <h1>Backoffice</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Backoffice',
  data: () => ({
    email: '',
    password: '',
    loading: false
  }),
  mounted () {
    console.log('PASSOUR NO MOUNTED DO BO')
  },
  methods: {
  }
}
</script>
