import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './assets/css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; // For Bootstrap js file 
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'react-loading-skeleton/dist/skeleton.css'
import './assets/css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);     
