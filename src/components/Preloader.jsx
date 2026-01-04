import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code } from 'lucide-react'

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Auto-hide preloader after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
      // Call onComplete after exit animation finishes
      setTimeout(() => {
        onComplete?.()
      }, 800) // Match exit animation duration
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  const containerVariants = {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const logoVariants = {
    initial: {
      scale: 0.5,
      opacity: 0,
      rotate: -10
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.2
      }
    }
  }

  const textVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      y: 30
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.5
      }
    }
  }

  const subtitleVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.8
      }
    }
  }

  const progressVariants = {
    initial: {
      scaleX: 0
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background-dark overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-primary-blue/5 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-secondary-purple/5 blur-[120px] animate-pulse [animation-delay:1s]"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-blue to-secondary-purple shadow-glow text-white">
                  <Code size={32} />
                </div>
                <div className="text-left">
                  <h1 className="text-2xl font-bold text-white">
                    Obaidul <span className="text-primary-blue">Islam</span>
                  </h1>
                </div>
              </div>
            </motion.div>

            {/* Welcome Text */}
            <motion.div
              variants={textVariants}
              className="mb-6"
            >
              <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
                Welcome
              </h2>
              <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-primary-blue to-secondary-purple"></div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={subtitleVariants}
              className="text-lg md:text-xl text-text-muted font-light max-w-md mx-auto mb-8"
            >
              Crafting digital experiences with passion and precision
            </motion.p>

            {/* Progress Bar */}
            <motion.div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                variants={progressVariants}
                className="h-full bg-gradient-to-r from-primary-blue to-secondary-purple origin-left"
              />
            </motion.div>

            {/* Loading Dots */}
            <div className="flex items-center gap-2 mt-6">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-primary-blue rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-20 w-4 h-4 bg-primary-blue/30 rounded-full blur-sm"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-32 w-6 h-6 bg-secondary-purple/20 rounded-full blur-sm"
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-32 left-32 w-3 h-3 bg-primary-blue/40 rounded-full blur-sm"
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader