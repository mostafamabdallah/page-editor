import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'

// Set initial direction and language based on stored preference or default
const savedLanguage = localStorage.getItem('i18nextLng') || 'en'
const isRTL = savedLanguage === 'ar'
document.documentElement.lang = savedLanguage
document.documentElement.dir = isRTL ? 'rtl' : 'ltr'

// Ensure proper layout direction and remove margins/padding
document.body.style.direction = isRTL ? 'rtl' : 'ltr'
document.body.style.textAlign = isRTL ? 'right' : 'left'
document.body.style.margin = '0'
document.body.style.padding = '0'
document.documentElement.style.margin = '0'
document.documentElement.style.padding = '0'

// Force apply fonts directly via JavaScript
const applyFonts = () => {
  const isRTL = document.documentElement.dir === 'rtl'
  const fontFamily = isRTL ? "'Cairo', 'Roboto', sans-serif" : "'Roboto', 'Cairo', sans-serif"
  
  // Apply to all elements
  const allElements = document.querySelectorAll('*')
  allElements.forEach(el => {
    (el as HTMLElement).style.fontFamily = fontFamily
  })
  
  // Apply to body and html
  document.body.style.fontFamily = fontFamily
  document.documentElement.style.fontFamily = fontFamily
}

// Apply fonts when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyFonts)
} else {
  applyFonts()
}

// Apply fonts after a short delay to ensure all elements are rendered
setTimeout(applyFonts, 100)

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)
root.render(
  <App />
)
