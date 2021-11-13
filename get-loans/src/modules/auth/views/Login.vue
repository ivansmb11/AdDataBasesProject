<template>
  <form @submit.prevent="onSubmit">
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input v-model="userForm.email" type="email" id="form3Example3" class="form-control form-control-lg"
        placeholder="Enter a valid email address" />
      <label class="form-label" for="form3Example3">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-3">
      <input v-model="userForm.password" type="password" id="form3Example4" class="form-control form-control-lg"
        placeholder="Enter password" />
      <label class="form-label" for="form3Example4">Password</label>
    </div>

    <div class="d-flex justify-content-between align-items-center">
      <!-- Checkbox -->
      <div class="form-check mb-0">
        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
        <label class="form-check-label" for="form2Example3">
          Remember me
        </label>
      </div>
      <a href="#!" class="text-body">Forgot password?</a>
    </div>

    <div class="text-center text-lg-start mt-4 pt-2">
      <button type="submit" class="btn btn-primary btn-lg"
        style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
          <router-link :to="{ name: 'register' }">
            <a href="#!" class="link-danger">Register</a>
          </router-link>
        </p>
    </div>
  </form>
</template>

<script>

import { ref } from 'vue'

export default {

  setup() {
    const userForm = ref({
      email: '',
      password: ''
    })

    return {
      userForm,
      onSubmit: async() => {
        console.log(userForm.value);
      }
    }
  }

}
</script>

<style>

</style>