<template>
  <form @submit.prevent="onSubmit">
    <!-- Name input -->
    <div class="form-outline mb-4">
      <input v-model="userForm.name" type="text" id="form3Example1" class="form-control form-control-lg"
        placeholder="Enter name" required/>
      <label class="form-label" for="form3Example1">Name</label>
    </div>
    <!-- Last name input -->
    <div class="form-outline mb-4">
      <input v-model="userForm.lastName" type="text" id="form3Example2" class="form-control form-control-lg"
        placeholder="Enter last name" required/>
      <label class="form-label" for="form3Example2">Last name</label>
    </div>
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
        style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
        <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account?
          <router-link :to="{ name: 'login' }">
            <a href="#!" class="link-danger">Log in</a>
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
    const { createUser } = useAuth()

    const userForm = ref({
      email: '',
      name: '',
      lastName: '',
      password: ''
    })

    return {
      userForm,
      onSubmit: async() => {
        if( userForm.value.password.length < 6 ) {
          Swal.fire( 'Error', 'Password must be 6 characters minimum', 'error' )
        } else {
          const { ok, msg } = await createUser( userForm.value )
          if ( !ok ) Swal.fire( 'Error', msg, 'error' )
          else router.push({ name: 'Home' })
        }
      }
    }

  }

}
</script>

<style>

</style>