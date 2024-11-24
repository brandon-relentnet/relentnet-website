/* ./src/pages/home/main.jsx */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StylesProvider } from '../../css/Styles.jsx'
import '../../css/index.css'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <StylesProvider>
            <Home />
        </StylesProvider>
    </StrictMode>
)
