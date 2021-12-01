<template>
  <form @submit.prevent="onSubmit">
    <div class="row"> <!-- name & last name row -->
      <div class="col-6">
        <!-- Name input -->
        <div class="form-outline mb-4">
          <input v-model="loanForm.name" type="text" id="form3Example1" class="form-control form-control-lg"
            placeholder="Enter name" required/>
          <label class="form-label" for="form3Example1">Name</label>
        </div>
      </div>
      <div class="col-6">
        <!-- Last name input -->
        <div class="form-outline mb-4">
          <input v-model="loanForm.lastName" type="text" id="form3Example2" class="form-control form-control-lg"
            placeholder="Enter last name" required/>
          <label class="form-label" for="form3Example2">Last name</label>
        </div>
      </div>
    </div> <!-- end name & last name row -->
    
    <div class="row"> <!-- email row -->
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input v-model="loanForm.email" type="email" id="form3Example3" class="form-control form-control-lg"
          placeholder="Enter a valid email address" required/>
        <label class="form-label" for="form3Example3">Email address</label>
      </div>
    </div> <!-- end email row -->

    <div class="row"> <!-- age & gender row -->
      <div class="col-6">
        <!-- Age input -->
        <div class="form-outline mb-4">
          <input v-model="loanForm.age" type="number" id="form3Example4" class="form-control form-control-lg"
            placeholder="Enter age" required/>
          <label class="form-label" for="form3Example4">Age</label>
        </div>
      </div>
      <div class="col-6">
        <select v-model="loanForm.gender" id="gender" class="form-select form-select-lg" required>
          <option disabled selected>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label class="form-label" for="gender">Gender</label>
      </div>
    </div> <!-- end age & gender row -->

    <div class="row"> <!-- marital status row -->
      <!-- marital status input -->
      <div class="form-outline mb-4">
        <select v-model="loanForm.maritalStatus" id="maritalStatus" class="form-select form-select-lg" required>
          <option disabled selected>Marital Status</option>
          <option value="Single" selected>Single</option>
          <option value="Married">Married</option>
          <option value="Widowed">Widowed</option>
          <option value="Divorced">Divorced</option>
          <option value="Separated">Separated</option>
          <option value="Partnership">Partnership</option>
        </select>
        <label class="form-label" for="maritalStatus">Marital Status</label>
      </div>
    </div> <!-- end marital status row -->
    
    <div class="row"> <!-- dependents row -->
      <!-- dependents input -->
      <div class="form-outline mb-4">
        <input v-model="loanForm.dependents" type="number" id="form3Example7" class="form-control form-control-lg"
          placeholder="Enter dependents"/>
        <label class="form-label" for="form3Example7">Dependents</label>
      </div>
    </div> <!-- end dependents row -->

    <div class="row"> <!-- income row -->
      <div class="col-6">
        <!-- Montly Income input -->
        <div class="form-outline mb-4">
          <input v-model="loanForm.monthlyIncome" type="number" id="form3Example8" class="form-control form-control-lg"
            placeholder="Enter Montly Income" required/>
          <label class="form-label" for="form3Example8">Monthly Income</label>
        </div>
      </div>
      <div class="col-6">
        <!-- Co-applicant Income input -->
        <div class="form-outline mb-4">
          <input v-model="loanForm.coApplicantIncome" type="number" id="form3Example9" class="form-control form-control-lg"
            placeholder="Enter Co-Applicant Income"/>
          <label class="form-label" for="form3Example9">Co-Applicant Income</label>
        </div>
      </div>
    </div> <!-- end income row -->

    <div class="row"> <!-- history & employment years row -->
      <div class="col-6">
        <!-- History input -->
        <div class="form-outline mb-4">
          <input v-model="loanForm.history" type="number" id="form3Example10" class="form-control form-control-lg"
            placeholder="Enter History"/>
          <label class="form-label" for="form3Example10">History</label>
        </div>
      </div>
      <div class="col-6">
        <!-- Employment Years input -->
        <div class="form-outline mb-4">
          <input v-model="loanForm.employmentYears" type="number" id="form3Example11" class="form-control form-control-lg"
            placeholder="Enter Employment Years"/>
          <label class="form-label" for="form3Example11">Employment Years</label>
        </div>
      </div>
    </div> <!-- end history & employment years row -->

    <div class="row"> <!-- Property type row -->
      <!-- Property type input -->
      <div class="form-outline mb-4">
        <input v-model="loanForm.propertyType" type="text" id="form3Example12" class="form-control form-control-lg"
          placeholder="Enter Property Type"/>
        <label class="form-label" for="form3Example12">Property Type</label>
      </div>
    </div> <!-- end Property type row -->
    
    <div class="row"> <!-- Amount Requested row -->
      <!-- Amount Requested input -->
      <div class="form-outline mb-4">
        <input v-model="loanForm.amountRequested" type="number" id="form3Example12" class="form-control form-control-lg"
          placeholder="Enter Amount Requested" required/>
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

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import loansApi from '../../../api/loansApi'
import useAuth from '../../auth/composables/useAuth'
import Swal from 'sweetalert2'

export default {

  setup() {
    
    const router = useRouter()
    const { user } = useAuth()

    const loanForm = ref({
      name: user.value.name,
      lastName: user.value.lastName,
      email: user.value.email,
      age: null,
      gender: 'Gender',
      maritalStatus: 'Marital Status',
      dependents: 0,
      monthlyIncome: null,
      coApplicantIncome: null,
      history: 0,
      employmentYears: 0,
      propertyType: 'Urban',
      amountRequested: null
    })

    return {
      loanForm,
      user,
      onSubmit: async() => {
        // TODO: Create loan
        const token = localStorage.getItem('token')

        try {
          const { status } = await loansApi.post( '', loanForm.value, {
              headers: {
                'x-token': token
              }
          })
          
          if ( status === 201 ) {
            Swal.fire( 'Sucess', 'Loan requested!', 'success' ).then( ()=> {
              router.push({ name: 'myLoans' })
            })
          } else {
            Swal.fire( 'Error', 'Something wrong :(', 'error' )
          }
          
        } catch ( error ) {
          ( error.response.data.msg )
          Swal.fire( 'Error', error.response.data.msg, 'error' )
        }
      }
    }

  }  
}
</script>
