import authApi from '@/api/authApi'

export const createUser = async({ commit }, user ) => {
    
    try {
        const { data } = await authApi.post( '/create', user )
        const { token } = data

        delete user.password

        commit( 'loginUser', { user, token } )

        return { ok: true }

    } catch ( { response } ) {
        return { ok: false, msg: response.data.msg }
    }

}

export const loginUser = async({ commit }, user ) => {
    
    const { email, password } = user

    try {
        const { data } = await authApi.post( '', { email, password } )
        const { token } = data
        
        delete data.password
        delete data.uid
        delete data.token

        const user = { ...data }

        commit( 'loginUser', { user, token } )

        return { ok: true }

    } catch ( { response } ) {
        return { ok: false, msg: response.data.msg }
    }

}

export const checkAuth = async ({ commit }) => {

    const token = localStorage.getItem('token')

    if ( !token ) {
        commit('logout')
        return { ok: false, msg: 'There is no token' }
    }

    try {
        // TODO: Renew token
        const { data } = await authApi.get( 'renew',  {
            headers: {
              'x-token': token
            }
        })

        const { email, name, lastName } = data

        const user = {
            email,
            name,
            lastName 
        }

        commit( 'loginUser', { user, token } )

        return { ok: true }

    } catch ({ response }) {
        commit('logout')
        return { ok: false, msg: response.data.msg }
    }

}
