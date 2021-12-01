<template>
    <ul v-if="!isLoading" class="list-group">
        <li v-for="loan in loans" :key="loan._id" class="list-group-item d-flex justify-content-between align-items-start"
          data-bs-toggle="modal" data-bs-target="#exampleModal" @click="getLoanById( loan._id )">
            <div class="ms-2 me-auto">
                <div class="fw-bold text-start">{{ loan._id }}</div>
                Requested by {{ loan.name + ' ' + loan.lastName }}
            </div>
            <span class="badge bg-primary rounded-pill">{{ loan.status }}</span>
        </li>
    </ul>

    <div v-if="loans.length===0 && !isLoading">
      <h4>No loans requested yet</h4>
      <h5>Go to
        <router-link :to="{ name: 'getLoan' }">
          <a href="#">
            Get Loan!    
          </a>
        </router-link>
         to request your first loan</h5>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-light" id="exampleModalLabel">Loan <span class="fw-bold">{{ loan._id }}</span></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="OK"></button>
                </div>
                <div class="modal-body">
                  <div class="container">
                    <div class="row mt-3">
                      <div class="col">
                        <span class="fw-bold">Name:</span> {{ loan.name }}
                      </div>
                      <div class="col">
                        <span class="fw-bold">Last name:</span> {{ loan.lastName }}
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col">
                        <span class="fw-bold">Email:</span> {{ loan.email }}
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col">
                        <span class="fw-bold">Marital status:</span> {{ loan.maritalStatus }}
                      </div>
                      <div class="col">
                        <span class="fw-bold">Dependents:</span> {{ loan.dependents }}
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col">
                        <span class="fw-bold">Monthly income:</span> {{ loan.monthlyIncome }}
                      </div>
                      <div class="col">
                        <span class="fw-bold">Dependents:</span> {{ loan.coApplicantIncome }}
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col">
                        <span class="fw-bold">History:</span> {{ loan.history }}
                      </div>
                      <div class="col">
                        <span class="fw-bold">Employment years:</span> {{ loan.employmentYears }}
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col">
                        <span class="fw-bold">Property type:</span> {{ loan.propertyType }}
                      </div>
                      <div class="col">
                        <span class="fw-bold">Amount requested:</span> {{ loan.amountRequested }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue'
import useLoans from '../composables/useLoans'

export default {

  setup() {
    
    const { loadLoans, loans } = useLoans()
    const isLoading = ref( true )
    const loan = ref({})

    const getLoans = async() => {
      isLoading.value = true
      await loadLoans()
      isLoading.value = false
    }

    const getLoanById = ( id ) => {
      loan.value = loans.value.find( loan => loan._id === id )
    }

    getLoans()

    return {
      isLoading,
      loans,
      getLoanById,
      loan
    }

  }

}
</script>

<style scoped>
li {
  cursor: pointer
}
</style>
