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
    
    async function addImage(image) {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('http://localhost:5000/api/images', image,  config)
            dispatch({
                type: 'ADD_IMAGE',
                payload: res.data.image
            })
        } catch (error) {
            dispatch({
                type: 'ERROR_TRANSACTION',
                payload: error.response.data.error
            })
        }
    }

    return (
        <GlobalContext.Provider value={{
            images: state.images,
            error: state.error,
            loading: state.loading,
            addImage
        }}>
            {children}
        </GlobalContext.Provider>
    );
}