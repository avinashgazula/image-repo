import React, { createContext, useReducer } from 'react'
import UserReducer from './UserReducer'
import axios from 'axios';

const initialState = {
    session_id: '',
    error: null

}

export const UserContext = createContext(initialState)


export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)

    async function addUser(userDetails) {
        try {
            const res = await axios.post('http://localhost:5000/api/users', userDetails)
            dispatch({
                type: 'ADD_USER',
                payload: res.data.session_id
            })
        } catch (error) {
            dispatch({
                type: 'ERROR_REGISTER',
                error: error
            })
        }
        
    }

    return (
        <UserContext.Provider value={{
            session_id: state.session_id,
            error: state.error,
            addUser
        }}>
            {children}
        </UserContext.Provider>
    );
}