<template>
    <ul v-if="!isLoading" class="list-group">
        <li v-for="(loan, index) in loans" :key="index" class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold text-start">{{ loan._id }}</div>
                Requested by {{ loan.name + ' ' + loan.lastName }}
            </div>
            <span class="badge bg-primary rounded-pill">{{ loan.status }}</span>
        </li>
    </ul>
</template>

<script>

import { ref } from 'vue'
import useLoans from '../composables/useLoans'

export default {

  setup() {
    
    const { loadLoans, loans } = useLoans()
    const isLoading = ref( true )

    const getLoans = async() => {
      isLoading.value = true
      await loadLoans()
      isLoading.value = false
    }

    getLoans()

    return {
      isLoading,
      loans
    }

  }

}
</script>
