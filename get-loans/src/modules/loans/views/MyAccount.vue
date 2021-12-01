<template>
<br><h1>My Account</h1>
<div class="container rounded bg-white">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <i class="bi bi-person-circle" style="font-size:6em"></i>
              <span class="font-weight-bold">{{ fullName }}</span>
              <span class="text-black-50">{{ user.email }}</span>
              <div class="mt-4 text-center">
                <button v-on:click="onLogout" class="btn btn-danger profile-button" type="button">Logout</button>
              </div>
            </div>
        </div>
        <div class="col-md-7 border-right">
            <div class="p-3 py-5">
                <div class="row mt-2">
                    <div class="col-md-6">
                      <label class="labels">Name</label>
                      <input type="text" class="form-control" placeholder="Enter name" :value="user.name" disabled>
                    </div>
                    <div class="col-md-6">
                      <label class="labels">Last name</label>
                      <input type="text" class="form-control" :value="user.lastName" placeholder="Enter last name" disabled>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                      <label class="labels">Email</label>
                      <input type="email" class="form-control" placeholder="Enter email" :value="user.email" disabled>
                    </div>
                </div>
                <!-- <div class="mt-5 text-right">
                  <button class="btn btn-primary profile-button" type="button">Update</button>
                </div> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { useRouter } from 'vue-router'
import useAuth from '../../auth/composables/useAuth'
export default {

  setup() {

    const { user, logout, fullName } = useAuth()

    const router = useRouter()
    return {
      fullName,
      user,
      onLogout: () => {
        router.push({ name: 'login' })
        logout()
       }
    }
  },
  computed: {
    getUser() {
      return this.$store.state.auth.user
    }
  }
}
</script>
