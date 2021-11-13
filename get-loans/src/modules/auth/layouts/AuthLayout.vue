<template>
  <div id="nav">
    <router-link :to="{ name: 'login' }">Login</router-link> |
    <router-link :to="{ name: 'register' }">Register</router-link>
  </div>
  <h1>AuthLayout</h1>
  <router-view />
</template>

<script>
export default {

}
</script>

<style>

</style>