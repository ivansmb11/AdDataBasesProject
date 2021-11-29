import { useStore } from 'vuex'
import { computed } from 'vue'

const useLoans = () => {
    
    const store = useStore()
    
    const loadLoans = async() => {
        const resp = await store.dispatch( 'loans/loadLoans')
        return resp
    }

    return {
        loadLoans,
        loans: computed(()=>store.getters['loans/getLoans'])
    }
}

export default useLoans
