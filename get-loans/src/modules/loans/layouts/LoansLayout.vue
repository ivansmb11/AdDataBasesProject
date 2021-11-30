<template>
  <Navbar/>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center h-100">
        <div class="col-md-8 col-lg-8 col-xl-9 offset-xl-1">
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css");
a {
  text-decoration: none;
}
</style>