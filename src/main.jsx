/* ./src/main.jsx */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StylesProvider } from './css/Styles.jsx'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StylesProvider>
      <App />
    </StylesProvider>
  </StrictMode>
)
