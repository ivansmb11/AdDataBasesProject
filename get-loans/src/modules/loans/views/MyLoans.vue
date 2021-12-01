<template>
  <div class="mt-4">
    <h1>My Loans</h1>
  </div>
  <div class="container-fluid h-custom mt-5">
    <div class="row d-flex justify-content-center h-100">
      <div class="col-md-8 col-lg-8 col-xl-9">
        <LoansList />
      </div>
    </div>
  </div>

</template>

<script>

import LoansList from '../components/LoansList'

export default {

  components: {
    LoansList
  }

}
</script>
