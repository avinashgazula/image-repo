import axios from 'axios'
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'


const initialState = {
    images: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState)


// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    async function getImages(uid) {
        try {
            const res = await axios.get('http://localhost:5000/api/files', { params: { uid } })
            dispatch({
                type: 'GET_IMAGES',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'ERROR__IMAGE',
                payload: error
            })
        }
    }

    async function addImage(images) {

        try {
            const res = await axios.post('http://localhost:5000/api/files', images)
            dispatch({
                type: 'ADD_IMAGE',
                payload: res.data.images
            })
        } catch (error) {
            dispatch({
                type: 'ERROR__IMAGE',
                payload: error
            })
        }
    }

    async function deleteImage(id) {
        try {
            await axios.delete(`http://localhost:5000/api/files/${id}`)
            dispatch({
                type: 'DELETE_IMAGE',
                payload: id
            })
        } catch (error) {
            dispatch({
                type: 'ERROR__IMAGE',
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
            addImage,
            deleteImage
        }}>
            {children}
        </GlobalContext.Provider>
    );
}