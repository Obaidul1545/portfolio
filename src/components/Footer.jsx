import { motion } from 'framer-motion'
import { Code, Facebook, Github, Linkedin } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Obaidul1545', label: 'GitHub' },
    { icon: Linkedin, href: 'www.linkedin.com/in/obaidul1545', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/obaidul491519', label: 'Facebook' }
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-white/5 bg-background-card/50 backdrop-blur-md py-10 text-center mt-10"
    >
      <div className="flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto px-6">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-2 text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-blue text-white text-sm">
            <Code size={18} />
          </div>
          <span className="font-bold text-xl">Obaidul Islam</span>
        </motion.div>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="group flex items-center justify-center rounded-full border border-white/5 bg-white/5 p-3 transition-all hover:bg-primary-blue hover:border-primary-blue hover:shadow-glow-sm"
              whileHover={{ y: -2, scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              aria-label={social.label}
              target='_blank'
            >
              <social.icon size={20} className="text-text-muted group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <motion.p 
          className="text-sm text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          © 2026 Obaidul Islam. All rights reserved.
        </motion.p>

        {/* Links */}
        <motion.div 
          className="flex gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a className="text-sm text-text-muted hover:text-primary-blue transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="text-sm text-text-muted hover:text-primary-blue transition-colors" href="#">
            Terms of Service
          </a>
          <a className="text-sm text-text-muted hover:text-primary-blue transition-colors" href="#">
            Cookies
          </a>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer