import React from 'react';
import './App.css';
import { UploadImage } from './components/UploadImage';
import { UserImages } from './components/UserImages'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h2>Image repo</h2>
        <UploadImage />
        <UserImages />
      </div>
    </GlobalProvider>

  );
}

export default App;
