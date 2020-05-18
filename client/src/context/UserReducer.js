export default (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                session_id: action.payload
            }
        case 'ERROR_REGISTER':
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}