<template>
  <form @submit.prevent="onSubmit">
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input v-model="userForm.email" type="email" id="form3Example3" class="form-control form-control-lg"
        placeholder="Enter a valid email address" required/>
      <label class="form-label" for="form3Example3">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-3">
      <input v-model="userForm.password" type="password" id="form3Example4" class="form-control form-control-lg"
        placeholder="Enter password" required/>
      <label class="form-label" for="form3Example4">Password</label>
    </div>
    <div class="text-center text-lg-start mt-4 pt-2">
      <button type="submit" class="btn btn-primary btn-lg"
        style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
        <p class="small fw-bold mt-4 pt-1 mb-0">Don't have an account?
          <router-link :to="{ name: 'register' }">
            <a href="#!" class="link-danger">Register</a>
          </router-link>
        </p>
    </div>
  </form>
</template>

<script>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'
import Swal from 'sweetalert2'

export default {

  setup() {

    const router = useRouter()
    const { loginUser } = useAuth()

    const userForm = ref({
      email: '',
      password: ''
    })

    return {
      userForm,
      onSubmit: async() => {
        if( userForm.value.password.length < 6 ) {
          Swal.fire( 'Error', 'Invalid email or password', 'error' )
        } else {
          const { ok, msg } = await loginUser( userForm.value )
          if ( !ok ) Swal.fire( 'Error', msg, 'error' )
          else router.push({ name: 'getLoan' })
        }
      }
    }
  }

}
</script>

<style>

</style>