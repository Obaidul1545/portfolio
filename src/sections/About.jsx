import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'

const About = () => {
  const stats = [
   
    { value: '50+', label: 'Projects' },
    { value: '20+', label: 'Clients' },
    { value: '100%', label: 'Satisfaction' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="about" className="w-full px-6 py-20 lg:px-40 max-w-[1200px] mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Card className="relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col gap-6 relative z-10">
            {/* Header */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold tracking-tight text-white">About Me</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary-blue to-secondary-purple"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg font-light leading-relaxed text-text-muted"
            >
              I’m Obaidul Islam, a passionate front-end web developer specializing in React. I have hands-on experience building modern, responsive web applications and creating pixel-perfect user interfaces.
              <br />
              Currently, I’m learning the MERN stack to expand my full-stack development skills. I also specialize in <span className="text-white font-medium">React, Node.js, and modern UI/UX design principles.</span>
              <br />
              I thrive in collaborative environments and enjoy mentoring junior developers. When I’m not coding, you can find me exploring new technologies, working on innovative projects, or refining my design skills.


            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.span
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.1 + 0.5,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}

export default About