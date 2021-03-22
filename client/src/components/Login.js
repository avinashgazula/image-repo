import { Button, Link, TextField } from "@material-ui/core"
import React from "react"

const Login = (props) => {

    const { email, setEmail, emailError, password, setPassword, passwordError, accountExists, setAccountExists, handleLogin, handleRegistration } = props

    return (
        <>

            <TextField fullWidth required={true} label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <p>{emailError}</p>
            <br /><br />
            <TextField fullWidth required={true} label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <p>{passwordError}</p>
            <br /><br />
            {
                accountExists ? (
                    <>
                        <Button onClick={handleLogin} variant="contained" color="primary" type="submit">Login</Button>
                        <p>Dont have an account? <Link component="button"
                            variant="body2" onClick={() => setAccountExists(!accountExists)}>Signup here</Link></p>
                    </>
                ) : (
                    <>
                        <Button onClick={handleRegistration} variant="contained" color="primary" type="submit">Register</Button>
                        <p>Already have an account? <Link component="button"
                            variant="body2" onClick={() => setAccountExists(!accountExists)}>Login here</Link></p>
                    </>
                )
            }
        </>

    )
}

export default Login
