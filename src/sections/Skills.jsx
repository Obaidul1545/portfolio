import { motion } from 'framer-motion'
import { Code, Server, Palette } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { skillsData } from '../data/skills'

const Skills = () => {
  const iconMap = {
    html: Code,
    dns: Server,
    design_services: Palette
  }

  const colorMap = {
    blue: 'text-blue-400 bg-blue-500/20',
    purple: 'text-purple-400 bg-purple-500/20',
    pink: 'text-pink-400 bg-pink-500/20'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="skills" className="w-full px-4 py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        {/* Header */}
        <motion.div 
          className="flex flex-col gap-3 items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Expertise</h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary-blue to-secondary-purple"></div>
          <p className="text-text-muted max-w-lg">
            My stack is constantly evolving, but here are the core technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.entries(skillsData).map(([key, category]) => {
            const IconComponent = iconMap[category.icon]
            const colorClasses = colorMap[category.color]

            return (
              <motion.div key={key} variants={cardVariants}>
                <Card className="group h-full hover:border-primary-blue/30 transition-all duration-300">
                  <CardHeader>
                    <div className="mb-6 flex items-center gap-4">
                      <motion.div 
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${colorClasses} group-hover:scale-110 transition-transform`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:border-primary-blue/50 transition-colors cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: index * 0.1,
                            duration: 0.3,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(59, 130, 246, 0.1)'
                          }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills