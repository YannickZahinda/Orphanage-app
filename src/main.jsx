import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root');

try {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  root.innerHTML = `<pre>Render Error: ${error.message}</pre>`;
  console.error('Render Error:', error);
}

console.log('main.jsx executed');