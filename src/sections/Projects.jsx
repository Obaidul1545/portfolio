import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eye, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { projectsData } from '../data/projects';

const Projects = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="w-full px-4 py-20 ">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-3 items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary-blue to-secondary-purple"></div>
          <p className="text-text-muted max-w-lg">
            A selection of my recent work, showcasing complex problem solving
            and modern design capabilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Card className="group flex flex-col overflow-hidden border border-white/5 transition-all hover:shadow-glow-sm h-full">
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary-blue/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <motion.div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url("${project.image}")` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <Button
                      size="xl"
                      variant="secondary"
                      onClick={() => handleViewDetails(project.id)}
                      className="backdrop-blur-sm bg-primary-blue"
                    >
                      <Eye size={16} />
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <CardContent className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-text-muted leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="rounded-md bg-primary-blue/10 border border-primary-blue/20 px-2.5 py-1 text-xs font-semibold text-blue-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <CardFooter className="p-0">
                    <div className="flex gap-4 w-full">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 text-text-muted hover:text-white"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 text-text-muted hover:text-white"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={16} />
                        GitHub
                      </Button>
                    </div>
                  </CardFooter>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
