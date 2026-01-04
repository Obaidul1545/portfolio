import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Lightbulb } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import BackToTop from '../components/BackToTop'
import { projectsData } from '../data/projects'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectsData.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    )
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
    <div className="min-h-screen bg-background-dark">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-blue/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-purple/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header 
          className="sticky top-0 z-50 bg-background-dark/90 backdrop-blur-xl border-b border-white/5 px-6 py-4 lg:px-40"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-white hover:text-primary-blue"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Button>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github size={20} />
                GitHub
              </Button>
              <Button
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink size={20} />
                Live Demo
              </Button>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="px-6 py-12 lg:px-40 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                {project.title}
              </h1>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap justify-center gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-blue-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div 
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent"></div>
            </motion.div>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Overview */}
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Target className="text-primary-blue" size={24} />
                      Project Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-muted leading-relaxed">
                      {project.details.overview}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Key Features */}
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Lightbulb className="text-secondary-purple" size={24} />
                      Key Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.details.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-text-muted">
                          <span className="w-2 h-2 rounded-full bg-primary-blue mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Challenges */}
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="text-orange-400" size={24} />
                      Challenges Solved
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.details.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2 text-text-muted">
                          <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Future Improvements */}
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Calendar className="text-green-400" size={24} />
                      Future Improvements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.details.futureImprovements.map((improvement, index) => (
                        <li key={index} className="flex items-start gap-2 text-text-muted">
                          <span className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
                          {improvement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {Object.entries(project.details.techStack).map(([category, technologies]) => (
                      <div key={category}>
                        <h4 className="text-white font-semibold mb-3 capitalize">{category}</h4>
                        <div className="space-y-2">
                          {technologies.map((tech) => (
                            <div
                              key={tech}
                              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-text-muted"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              variants={itemVariants}
              className="text-center space-y-6 py-12"
            >
              <h2 className="text-3xl font-bold text-white">
                Interested in working together?
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                I&apos;m always open to discussing new projects and opportunities. 
                Let&apos;s create something amazing together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/#contact')}
                >
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/')}
                >
                  View More Projects
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </main>
        
        {/* Back to Top Button */}
        <BackToTop />
      </div>
    </div>
  )
}

export default ProjectDetails