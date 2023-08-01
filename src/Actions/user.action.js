export const setUser = ({ email, firstName, lastName }) => {
    return {
        type: 'SET_USER',
        payload: { email, firstName, lastName }
    }
}