import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create root using createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
