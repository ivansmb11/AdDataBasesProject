import authApi from '@/api/authApi';

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