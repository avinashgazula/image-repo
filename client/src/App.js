import React from 'react';
import './App.css';
import { UploadImage } from './components/UploadImage';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h2>Image repo</h2>
        <UploadImage />
      </div>
    </GlobalProvider>

  );
}

export default App;
