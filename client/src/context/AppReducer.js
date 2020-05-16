export default (state, action) => {
    switch (action.type) {
        case 'GET_IMAGES':
            return {
                ...state,
                loading: false,
                images: [...action.payload]
            }
        case 'ERROR_GET_IMAGES':
            return {
                ...state,
                error: action.error
            }

        case 'ADD_IMAGE':            
            return {
                ...state,
                images: [...state.images, action.payload]
            }
        case 'ERROR_ADD_IMAGE':
            console.error(action.error)
            return {
                ...state,
                error: action.error
            }
        
        default:
            return state
    }
}