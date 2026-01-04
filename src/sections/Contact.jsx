import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Card, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mdobaidulislam128@gmail.com',
      color: 'text-primary-blue bg-primary-blue/20 border-primary-blue/20'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1306 373611',
      color: 'text-green-400 bg-green-400/20 border-green-400/20'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      color: 'text-secondary-purple bg-secondary-purple/20 border-secondary-purple/20'
    }
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
    <section id="contact" className="w-full px-4 py-20 max-w-[1200px] mx-auto">
      <motion.div 
        className="flex flex-col gap-12 md:flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Contact Info */}
        <div className="flex flex-1 flex-col gap-8">
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Let's build something <span className="text-gradient">amazing</span>
            </h2>
            <p className="text-lg text-text-muted">
              Have a project in mind or just want to say hi? I&apos;m always open to discussing new projects, 
              creative ideas or opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="flex flex-col gap-5">
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="hover:bg-white/5 transition-colors cursor-pointer">
                  <CardContent className="flex items-center gap-5 p-5">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${info.color} border`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-muted">{info.label}</p>
                      <p className="text-lg font-semibold text-white">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-[1.5] flex-col"
        >
          <Card className="shadow-2xl border-t border-white/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Name</label>
                    <Input
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">Subject</label>
                  <Input
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="h-40"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="gradient" 
                    className="w-full mt-4"
                  >
                    <Send size={20} />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact