import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


let root = document.getElementById('root')
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)