import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { firebaseInstance } from './config/firebase';

function App() {

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [accountExists, setAccountExists] = useState(false)

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = () => {
    clearErrors();
    firebaseInstance
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message)
            break
          case "auth/wrong-password":
            setPasswordError(err.message)
            break
          default:
            alert(err.message)
        }
      })
  }

  const handleRegistration = () => {
    clearErrors()
    firebaseInstance
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/email-already-in-use":
            setEmailError(err.message)
            break
          case "auth/weak-password":
            setPasswordError(err.message)
            break
          default:
            alert(err.message)
        }
      })
  }

  const handleLogout = () => {
    firebaseInstance.auth().signOut();
  }

  const authenticationListener = () => {
    firebaseInstance.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs()
        setUser(user)
      } else {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authenticationListener()
  }, [])

  return (
    // <Router>

    //   <div className="container">
    //     <UserProvider>
    //       <Route path="/" render={props => (
    //         <RegisterUser />
    //       )} />
    //     </UserProvider>

    //     <GlobalProvider>
    //       <Route path="/images" render={props => (
    //         <React.Fragment>
    //           <h2>Image repo</h2>
    //           <UploadImage />
    //           <UserImages />
    //         </React.Fragment>

    //       )} />
    //     </GlobalProvider>


    //   </div>
    // </Router>
    <>
      {user ? (
        <Home handleLogout={handleLogout} />
      ) : (

        <Login
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          setEmailError={setEmailError}
          password={password}
          setPassword={setPassword}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          user={user}
          setUser={setUser}
          accountExists={accountExists}
          setAccountExists={setAccountExists}
          handleLogin={handleLogin}
          handleRegistration={handleRegistration}
        />
      )}

    </>
  );
}

export default App;
