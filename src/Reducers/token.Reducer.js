const initialState = null;


export default function tokenReducer( state = initialState, action) {
    switch (action.type) {
        case 'SET_TOKEN':
            return action.payload;
        case 'CLEAR_TOKEN':
            return null;
        default:
            return state;
    }
}