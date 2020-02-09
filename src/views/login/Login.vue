<template>
  <form @submit.prevent="doLogin()" class="form-login">
    <div class="card">
      <div class="card-header text-center">
        <h1 class="mb-0">Login</h1>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input
            required
            type="email"
            v-model="email"
            class="form-control"
            placeholder="E-mail"
          >
        </div>
        <div class="form-group">
          <input
            required
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Password"
          >
        </div>
        <button class="btn btn-primary w-100" :disabled="loading">
          <template v-if="loading">
            Loading...
            <i class="fa fa-spinner fa-spin"></i>
          </template>
          <template v-else>
            Login
            <i class="fa fa-sign-in-alt"></i>
          </template>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    loading: false
  }),
  mounted () {
    if (process.env.NODE_ENV === 'development') {
      this.email = process.env.VUE_APP_LOGIN_EMAIL
      this.password = process.env.VUE_APP_LOGIN_PASS
    }
  },
  methods: {
    async doLogin () {
      this.loading = true
      const { email, password } = this
      try {
        this.$root.$emit('Spinner::show')
        this.$http.post(
          'http://desafio.localhost/api/V1/login',
          {
            'user': email,
            'password': password
          }
        ).then(function (data) {
          localStorage.setItem('mm_token', data.data.success.token)
          this.$router.push({ name: 'backoffice' })
          this.$root.$emit('Spinner::hide')
        })
      } catch (err) {
        console.log(err.status)
        this.$root.$emit('Spinner::hide')
      }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-login {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 18pt;
    }
    .card {
      width: 30%;
      color: var(--darker);
    }
  }
</style>
