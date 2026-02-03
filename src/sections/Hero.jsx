import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Briefcase, Code, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { heroAnimation } from '../utils/animations';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      heroAnimation();
    }
  }, []);

  const socialLinks = [
    { icon: Briefcase, href: '#', label: 'LinkedIn' },
    { icon: Code, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <section
      ref={heroRef}
      className="w-full px-4 py-10 lg:py-12 max-w-[1200px] mx-auto"
    >
      <div className="@container">
        <div className="flex flex-col-reverse gap-12 px-4 py-6 md:flex-row md:items-center md:gap-20">
          {/* Content */}
          <div className="flex flex-1 flex-col gap-8 items-start">
            <div className="flex flex-col gap-4 text-left">
              {/* Status Badge */}
              <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-primary-blue/5 px-4 py-1.5 text-xs font-bold text-primary-glow backdrop-blur-sm w-fit shadow-glow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
                </span>
                Available for New Projects
              </div>

              {/* Main Title */}
              <h1 className="hero-title text-3xl font-black leading-[1.1] tracking-tight md:text-7xl text-white">
                Crafting <span className="text-gradient">Digital Magic</span>{' '}
                through Code.
              </h1>

              {/* Description */}
              <p className="hero-description text-lg font-light leading-relaxed text-text-muted md:text-xl max-w-2xl">
                Hi, I'm Obaidul Islam. I’m a passionate front-end web developer
                specializing in React, with hands-on experience in building
                modern, responsive web applications. Currently, I’m learning the
                MERN stack to expand my full-stack development skills.
              </p>
            </div>

            {/* Buttons */}
            <div className="hero-buttons flex flex-wrap gap-4">
              <a href="Md_Obaidul_Islam_Resume.pdf" download>
                <Button size="lg" variant="gradient" className="group">
                  <Download
                    size={20}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                  Download Resume
                </Button>
              </a>
              <a
                href="Md_Obaidul_Islam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary">
                  <Eye size={20} />
                  View Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-social mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center justify-center rounded-full border border-white/5 bg-white/5 p-3 transition-all hover:bg-primary-blue hover:border-primary-blue hover:shadow-glow-sm"
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="text-text-muted group-hover:text-white transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex flex-1 justify-center md:justify-end relative">
            <div className="hero-image relative size-72 md:size-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-blue to-secondary-purple opacity-40 blur-[60px]"></div>

              {/* Image Container */}
              <motion.div
                className="relative h-full w-full rounded-2xl border border-white/10 bg-background-card/50 backdrop-blur-sm p-3 shadow-2xl transition-transform hover:rotate-0 duration-500"
                style={{ transform: 'rotate(3deg)' }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="h-full w-full rounded-xl overflow-hidden relative">
                  <img
                    src="/Obaidul.png"
                    alt="Obaidul Islam - Professional Developer"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -left-4 top-10 glass-panel p-3 rounded-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Code className="text-blue-400 text-3xl" size={24} />
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-10 glass-panel p-3 rounded-lg"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              >
                <Briefcase className="text-purple-400 text-3xl" size={24} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
