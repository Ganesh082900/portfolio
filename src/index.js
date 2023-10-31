import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import ScrollContextProvider from './store/scroll-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScrollContextProvider>

      <App />

    </ScrollContextProvider>
  </React.StrictMode>
);

reportWebVitals();
