import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import { Context } from './context/AuthContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context>
    <RouterProvider router={Routes}/>
    </Context>
 
  </StrictMode>,
)
