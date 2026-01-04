import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code } from 'lucide-react'
import { Button } from './ui/Button'
import { scrollToElement } from '../utils/scroll'
import { educationData } from '../data/experience'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Check if education data exists
  const hasEducationData = educationData && educationData.length > 0

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Create navigation items conditionally
  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    ...(hasEducationData ? [{ name: 'Education', href: 'experience' }] : []),
    { name: 'Projects', href: 'projects' },
  ]

  const handleNavClick = (href) => {
    scrollToElement(href, 80)
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-50 border-b border-white/5 transition-all duration-300 ${
        scrolled ? 'bg-background-dark/90 backdrop-blur-xl' : 'bg-background-dark/70 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between whitespace-nowrap px-6 py-4 lg:px-24">
      {/* Logo */}
      <motion.div 
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-blue to-secondary-purple shadow-glow-sm text-white">
          <Code size={20} />
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-tight text-white">
          Obaidul <span className="text-primary-blue">Islam</span>
        </h2>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden flex-1 justify-end gap-8 md:flex">
        <nav className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-text-muted hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            onClick={() => handleNavClick('contact')}
            className="min-w-[100px]"
          >
            Hire Me
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-lg font-medium text-text-muted hover:text-white transition-colors py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <Button 
                  onClick={() => handleNavClick('contact')}
                  className="w-full"
                >
                  Hire Me
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar