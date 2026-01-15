import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { WorkoutsContextProvider } from './context/WorkoutsContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </Router>
  </StrictMode>,
)
