<template>
  <form>
    
    <!-- Name input -->
    <div class="form-outline mb-4">
      <input type="text" id="form3Example1" class="form-control form-control-lg"
        placeholder="Enter name" />
      <label class="form-label" for="form3Example1">Name</label>
    </div>
    <!-- Last name input -->
    <div class="form-outline mb-4">
      <input type="text" id="form3Example2" class="form-control form-control-lg"
        placeholder="Enter last name" />
      <label class="form-label" for="form3Example2">Last name</label>
    </div>
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input type="email" id="form3Example3" class="form-control form-control-lg"
        placeholder="Enter a valid email address" />
      <label class="form-label" for="form3Example3">Email address</label>
    </div>
    <!-- Password input -->
    <div class="form-outline mb-3">
      <input type="password" id="form3Example4" class="form-control form-control-lg"
        placeholder="Enter password" />
      <label class="form-label" for="form3Example4">Password</label>
    </div>

    <div class="text-center text-lg-start mt-4 pt-2">
      <button type="button" class="btn btn-primary btn-lg"
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
export default {

}
</script>

<style>

</style>