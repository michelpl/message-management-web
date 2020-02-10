<template>
  <div class="alert alert-info" role="alert" v-if="visible">
    {{message}} <i class="fas fa-times" @click="closeAlert()"></i>
  </div>
</template>

<script>
export default {
  name: 'alert',
  data () {
    return {
      message: '',
      visible: false
    }
  },
  created () {
    this.$root.$on('Alert::show', (data) => {
      this.message = data
      this.visible = true
    })
    this.$root.$on('Alert::hide', () => { this.visible = false })
  },
  methods: {
    closeAlert () {
      this.visible = false
    }
  }
}
</script>

<style scoped>
.alert {
  position: absolute;
  width: auto;
  z-index: 999999;
}
* {
  transition: opacity .5s;
}
</style>
