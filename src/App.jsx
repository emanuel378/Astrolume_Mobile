// App.jsx
import { useState, useEffect } from 'react'
import Splash from "./pages/Splash/splash"
import RoutesApp from './routes' // Importe suas rotas
import './index.css'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 2500)

    const removeTimer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (showSplash) {
    return (
      <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
        <Splash />
      </div>
    )
  }

  // Retorne TODAS as rotas, não apenas o Inicial
  return <RoutesApp />
}