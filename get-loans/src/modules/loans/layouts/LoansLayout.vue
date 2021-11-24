<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <router-link :to="{ name: 'getLoan' }">
        <a class="navbar-brand" href="#">Get Loans</a>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link :to="{ name: 'getLoan' }">
              <a class="nav-link active" aria-current="page" href="#">Get Loan</a>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link :to="{ name: 'myLoans' }">
              <a class="nav-link" href="#">My Loans</a>
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">
    <router-view />
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>