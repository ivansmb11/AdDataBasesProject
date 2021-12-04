<template>
  <div class="mt-4">
    <h1>Get Loan</h1>
  </div>
  <div class="container-fluid h-custom mt-4">
    <div class="row d-flex justify-content-center h-100">
      <div class="col-md-8 col-lg-8 col-xl-9">
        <GetLoanForm />
      </div>
    </div>
  </div>

  
</template>

<script>
import GetLoanForm from '../components/GetLoanForm'
export default {
  components: {
    GetLoanForm
  }
}
</script>
