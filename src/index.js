import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

