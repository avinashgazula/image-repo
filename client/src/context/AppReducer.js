export default (state, action) => {
    switch (action.type) {
        case 'ADD_IMAGE':
            console.log(action.payload);
            
            return {
                ...state,
                images: [...state.images, action.payload]
            }
        case 'ERROR_IMAGE':
            console.error(action.error)
            return {
                ...state,
                error: action.error
            }
        
        default:
            return state
    }
}