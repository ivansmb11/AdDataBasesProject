import { useStore } from 'vuex'
import { computed } from 'vue'

const useAuth = () => {
    
    const store = useStore()
    
    const createUser = async( user ) => {
        const resp = await store.dispatch( 'auth/createUser', user )
        return resp
    }

    const loginUser = async( user ) => {
        const resp = await store.dispatch( 'auth/loginUser', user )
        return resp
    }

    const checkAuth = async() => {
        const resp = await store.dispatch( 'auth/checkAuth' )
        return resp
    }

    return {
        createUser,
        loginUser,
        checkAuth,
        authStatus: computed(()=>store.getters['auth/currentState'])
    }
}

export default useAuth
