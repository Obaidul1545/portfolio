import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Fade in animation
export const fadeIn = (element, direction = 'up', delay = 0) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  }

  return gsap.fromTo(element, 
    {
      opacity: 0,
      ...directions[direction]
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      delay,
      ease: 'power3.out'
    }
  )
}

// Stagger animation for multiple elements
export const staggerAnimation = (elements, delay = 0.1) => {
  return gsap.fromTo(elements,
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: delay,
      ease: 'power3.out'
    }
  )
}

// Scale animation
export const scaleIn = (element, delay = 0) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      scale: 0.8
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      delay,
      ease: 'back.out(1.7)'
    }
  )
}

// Scroll-triggered animations
export const scrollAnimation = (element, animation = 'fadeIn', trigger = element) => {
  const animations = {
    fadeIn: {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    },
    slideLeft: {
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    },
    slideRight: {
      from: { opacity: 0, x: 50 },
      to: { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    },
    scaleUp: {
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' }
    }
  }

  const anim = animations[animation]
  
  return gsap.fromTo(element, anim.from, {
    ...anim.to,
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  })
}

// Hero entrance animation
export const heroAnimation = () => {
  const tl = gsap.timeline()
  
  tl.fromTo('.hero-badge', 
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
  )
  .fromTo('.hero-title',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
    '-=0.3'
  )
  .fromTo('.hero-description',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
    '-=0.4'
  )
  .fromTo('.hero-buttons',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
    '-=0.3'
  )
  .fromTo('.hero-social',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
    '-=0.2'
  )
  .fromTo('.hero-image',
    { opacity: 0, scale: 0.8, rotation: 6 },
    { opacity: 1, scale: 1, rotation: 3, duration: 1, ease: 'power3.out' },
    '-=0.8'
  )

  return tl
}