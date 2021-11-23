
export const loginUser = ( state, { user, token } ) => {

    if ( token ) {
        localStorage.setItem( 'token', token )
        state.token = token
    }

    console.log( user )

    state.user    = user
    state.status  = 'authenticated'

}

export const logout = ( state ) => {

    state.user = null
    state.token = null
    state.status = 'non-authenticated'
    
    localStorage.removeItem('token')

}
