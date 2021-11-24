<template>
  <br><h1>Get Loan</h1><br>
  <form @submit.prevent="onSubmit">
    <div class="row"> <!-- name & last name row -->
      <div class="col-6">
        <!-- Name input -->
        <div class="form-outline mb-4">
          <input type="text" id="form3Example1" class="form-control form-control-lg"
            placeholder="Enter name" />
          <label class="form-label" for="form3Example1">Name</label>
        </div>
      </div>
      <div class="col-6">
        <!-- Last name input -->
        <div class="form-outline mb-4">
          <input type="text" id="form3Example2" class="form-control form-control-lg"
            placeholder="Enter last name" />
          <label class="form-label" for="form3Example2">Last name</label>
        </div>
      </div>
    </div> <!-- end name & last name row -->
    
    <div class="row"> <!-- email row -->
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input type="email" id="form3Example3" class="form-control form-control-lg"
          placeholder="Enter a valid email address" />
        <label class="form-label" for="form3Example3">Email address</label>
      </div>
    </div> <!-- end email row -->

    <div class="row"> <!-- age & gender row -->
      <div class="col-6">
        <!-- Age input -->
        <div class="form-outline mb-4">
          <input type="number" id="form3Example4" class="form-control form-control-lg"
            placeholder="Enter age" />
          <label class="form-label" for="form3Example4">Age</label>
        </div>
      </div>
      <div class="col-6">
        <!-- Gender input -->
        <div class="form-outline mb-4">
          <input type="text" id="form3Example5" class="form-control form-control-lg"
            placeholder="Enter gender" />
          <label class="form-label" for="form3Example5">Gender</label>
        </div>
      </div>
    </div> <!-- end age & gender row -->

    <div class="row"> <!-- marital status row -->
      <!-- marital status input -->
      <div class="form-outline mb-4">
        <input type="text" id="form3Example6" class="form-control form-control-lg"
          placeholder="Enter marital status" />
        <label class="form-label" for="form3Example6">Marital Status</label>
      </div>
    </div> <!-- end marital status row -->
    
    <div class="row"> <!-- dependents row -->
      <!-- dependents input -->
      <div class="form-outline mb-4">
        <input type="number" id="form3Example7" class="form-control form-control-lg"
          placeholder="Enter dependents" />
        <label class="form-label" for="form3Example7">Dependents</label>
      </div>
    </div> <!-- end dependents row -->

    <div class="row"> <!-- income row -->
      <div class="col-6">
        <!-- Montly Income input -->
        <div class="form-outline mb-4">
          <input type="number" id="form3Example8" class="form-control form-control-lg"
            placeholder="Enter Montly Income" />
          <label class="form-label" for="form3Example8">Montly Income</label>
        </div>
      </div>
      <div class="col-6">
        <!-- Co-applicant Income input -->
        <div class="form-outline mb-4">
          <input type="number" id="form3Example9" class="form-control form-control-lg"
            placeholder="Enter Co-Applicant Income" />
          <label class="form-label" for="form3Example9">Co-Applicant Income</label>
        </div>
      </div>
    </div> <!-- end income row -->

    <div class="row"> <!-- history & employment years row -->
      <div class="col-6">
        <!-- History input -->
        <div class="form-outline mb-4">
          <input type="number" id="form3Example10" class="form-control form-control-lg"
            placeholder="Enter History" />
          <label class="form-label" for="form3Example10">History</label>
        </div>
      </div>
      <div class="col-6">
        <!-- Employment Years input -->
        <div class="form-outline mb-4">
          <input type="number" id="form3Example11" class="form-control form-control-lg"
            placeholder="Enter Employment Years" />
          <label class="form-label" for="form3Example11">Employment Years</label>
        </div>
      </div>
    </div> <!-- end history & employment years row -->

    <div class="row"> <!-- Property type row -->
      <!-- Property type input -->
      <div class="form-outline mb-4">
        <input type="text" id="form3Example12" class="form-control form-control-lg"
          placeholder="Enter Property Type" />
        <label class="form-label" for="form3Example12">Property Type</label>
      </div>
    </div> <!-- end Property type row -->
    
    <div class="row"> <!-- Amount Requested row -->
      <!-- Amount Requested input -->
      <div class="form-outline mb-4">
        <input type="number" id="form3Example12" class="form-control form-control-lg"
          placeholder="Enter Amount Requested" />
        <label class="form-label" for="form3Example12">Amount Requested</label>
      </div>
    </div> <!-- end Amount Requested row -->

    <div class="text-center text-lg-start mt-4 pt-2">
      <button type="submit" class="btn btn-primary btn-lg"
        style="padding-left: 2.5rem; padding-right: 2.5rem;">Get Loan!</button>
    </div><br><br>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>