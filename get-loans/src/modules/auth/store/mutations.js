
export const loginUser = ( state, { user, token } ) => {

    if ( token ) {
        localStorage.setItem( 'token', token )
        state.token = token
    }

    state.user    = user
    state.status  = 'authenticated'

}
