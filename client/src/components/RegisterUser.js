import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserState';

export default function RegisterUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { addUser } = useContext(UserContext)
    var history = useHistory()



    const registerUser = (event) => {
        event.preventDefault();


        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email)
        formData.append("password", password)

        addUser(formData)
        history.push(`/images`);
    }

    return (
        <React.Fragment>
            <form onSubmit={registerUser}>
                <TextField fullWidth label="Name" onChange={e => setName(e.target.value)} />
                <br /><br />
                <TextField fullWidth required={true} label="Email" type="email" onChange={e => setEmail(e.target.value)} />
                <br /><br />
                <TextField fullWidth required={true} label="Password" type="password" onChange={e => setPassword(e.target.value)} />
                <br /><br />
                <Button variant="contained" color="primary" type="submit"> Create Account</Button>
            </form>



        </React.Fragment>
    )
}
