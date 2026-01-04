import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    // Only start smooth scrolling after preloader is done
    if (!isLoading) {
      requestAnimationFrame(raf)
    }

    return () => {
      lenis.destroy()
    }
  }, [isLoading])

  const handlePreloaderComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {/* Main App Content */}
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      )}
    </div>
  )
}

export default App