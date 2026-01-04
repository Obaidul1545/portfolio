import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import { educationData } from '../data/experience'

const Home = () => {
  // Check if education data exists
  const hasEducationData = educationData && educationData.length > 0

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-blue/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-purple/10 blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative flex min-h-screen w-full flex-col z-10">
        <Navbar />
        
        <main className="flex flex-col items-center w-full">
          <Hero />
          <About />
          <Skills />
          {hasEducationData && <Experience />}
          <Projects />
          <Contact />
        </main>
        
        <Footer />
        
        {/* Back to Top Button */}
        <BackToTop />
      </div>
    </div>
  )
}

export default Home