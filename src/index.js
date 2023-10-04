import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//  Hapus import reportWebVitals
// Tambahin :
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Before Change :
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // After Change :
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Hapus reportWebVitals();
