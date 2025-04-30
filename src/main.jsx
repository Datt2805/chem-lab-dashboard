import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind CSS or your global styles
import 'react-circular-progressbar/dist/styles.css'; // Import Circular Progressbar styles
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
