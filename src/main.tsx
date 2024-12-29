import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes/Routes'
import { Context } from './context/AuthContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context>
    <AppRoutes/>
    </Context>
 
  </StrictMode>,
)
