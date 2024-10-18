import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './index.css'
import { UserProvider } from './contexts/UserContext.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </UserProvider>
  </StrictMode>,
)
