import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { UploadImage } from './components/UploadImage';
import { UserImages } from './components/UserImages'
import  RegisterUser  from './components/RegisterUser'
import { GlobalProvider } from './context/GlobalState';
import { UserProvider } from './context/UserState';

function App() {
  return (
    <Router>
        
      <div className="container">
        <UserProvider>
          <Route path="/" render={props => (
            <RegisterUser />
          )} />
        </UserProvider>
          
          <GlobalProvider>
            <Route path="/images" render={props => (
              <React.Fragment>
                <h2>Image repo</h2>
                <UploadImage />
                <UserImages />
              </React.Fragment>

            )} />
          </GlobalProvider>
          
          
        </div>
    </Router>
    

  );
}

export default App;
