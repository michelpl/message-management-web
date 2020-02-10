<template>
  <form @submit.prevent="register()" class="form-login">
    <alert></alert>
    <div class="card">
      <div class="card-header text-center">
        <h1 class="mb-0">Register user</h1>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input
            required
            type="text"
            v-model="name"
            class="form-control"
            placeholder="User name"
            :disabled="loading"
          >
        </div>
        <div class="form-group">
          <input
            required
            type="email"
            v-model="email"
            class="form-control"
            placeholder="E-mail"
            :disabled="loading"
          >
        </div>
        <div class="form-group">
          <input
            required
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Password"
            :disabled="loading"
          >
        </div>
        <div class="form-group">
          <input
            required
            type="password"
            v-model="confirmPassword"
            :class="{ invalid: invalidPassword }"
            class="form-control"
            placeholder="Confirm password"
            :disabled="loading"
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
        <p></p>
        <router-link to="/login"><i class="fas fa-long-arrow-alt-left"></i> Back</router-link>
      </div>
    </div>
  </form>
</template>

<script>
import Alert from '../../components/gLobal/Alert'

export default {
  name: 'Login',
  components: { Alert },
  data: () => ({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    invalidPassword: '',
    loading: false
  }),
  mounted () {
  },
  methods: {
    async register () {
      const { email, name, password, confirmPassword } = this
      try {
        if (password !== confirmPassword) {
          this.invalidPassword = 'invalid'
          this.$root.$emit('Alert::show', "Password doesn't match")
          return
        }
        this.invalidPassword = ''
        this.loading = true
        this.$http.post(
          'http://localhost:8000/api/V1/register',
          {
            'email': email,
            'name': name,
            'password': password,
            'c_password': confirmPassword
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then(function (data) {
          this.$root.$emit('Alert::show', 'User registered successfully!')
          let parent = this

          setTimeout(function () {
            parent.$root.$emit('Alert::hide', '')
            parent.loading = false
          }, 2000)
          this.$router.push({ name: 'login' })
        })
      } catch (err) {
        this.$root.$emit('Alert::show', 'Error')
        // console.log(err)
      }
      this.$root.$emit('Alert::show', "Can't create user")
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

    .invalid {
      border-color: var(--red);
    }
  }
</style>
