import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'


const initialState = {
    images: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState)


// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    async function getImages() {
        try {
            const res = await axios.get('http://localhost:5000/api/files')
            dispatch({
                type: 'GET_IMAGES',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'ERROR_GET_IMAGES',
                payload: error
            })
        }
    }
    
    async function addImage(image) {

        try {
            const res = await axios.post('http://localhost:5000/api/files', image)
            dispatch({
                type: 'ADD_IMAGE',
                payload: res.data.image
            })
        } catch (error) {
            dispatch({
                type: 'ERROR_ADD_IMAGE',
                payload: error
            })
        }
    }

    return (
        <GlobalContext.Provider value={{
            images: state.images,
            error: state.error,
            loading: state.loading,
            getImages,
            addImage
        }}>
            {children}
        </GlobalContext.Provider>
    );
}