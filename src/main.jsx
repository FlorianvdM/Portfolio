import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Startpunt van de app: React zet <App /> in de div met id "root" (index.html)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)