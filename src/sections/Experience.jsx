import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { educationData } from '../data/experience'

const Experience = () => {
  // Check if there's education data to display
  const hasEducation = educationData && educationData.length > 0

  // Don't render anything if no education data is available
  if (!hasEducation) {
    return null
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const TimelineItem = ({ item }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="group hover:border-secondary-purple/30 transition-all">
        <CardContent>
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-white">{item.degree}</h3>
              <p className="text-sm text-text-muted">{item.school}</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-bold border ${
              item.year === '2018' 
                ? 'bg-secondary-purple/10 border-secondary-purple/20 text-secondary-purple'
                : 'bg-white/5 border-white/10 text-text-muted'
            }`}>
              {item.year}
            </span>
          </div>
          <p className="text-sm text-text-muted mt-2">{item.description}</p>
          {item.gpa && (
            <p className="text-xs text-primary-blue mt-2 font-medium">GPA: {item.gpa}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section id="experience" className="w-full px-4 py-20  max-w-[1200px] mx-auto">
      <motion.div 
        className="flex flex-col gap-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Education Header */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3">
            <GraduationCap className="text-secondary-purple" size={32} />
            Education
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary-blue to-secondary-purple mx-auto"></div>
          <p className="text-text-muted max-w-lg mx-auto mt-4">
            My academic journey and educational background in computer science and technology.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((item) => (
            <TimelineItem 
              key={item.id} 
              item={item}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience