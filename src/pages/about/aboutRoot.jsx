/* ./src/pages/about/aboutRoot.jsx */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StylesProvider } from '../../css/Styles.jsx'
import '../../css/index.css'
import About from './About.jsx'

createRoot(document.getElementById('about-root')).render(
    <StrictMode>
        <StylesProvider>
            <About />
        </StylesProvider>
    </StrictMode>
)
