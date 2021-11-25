
export const currentState = ( state ) => {
    return state.status
}

export const getUser = ( state ) => {
    return state.user || ''
}

export const getFullName = ({ user }) => {
    return `${ user?.name } ${ user?.lastName }` || ''
}
