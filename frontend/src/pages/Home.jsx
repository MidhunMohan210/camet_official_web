import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import VideoSection from '../components/sections/VideoSection' // <--- IMPORT THIS
import LogoStrip from '../components/sections/LogoStrip'
import Testimonials from '../components/sections/Testimonials'
import ContactSection from '../components/sections/ContactSection'

function Home() {
  return (
    <div>
      <Hero />
       <About />
        <LogoStrip />
      <Services />
     
        <VideoSection /> 
      <Testimonials />
      <ContactSection />
    </div>
  )
}

export default Home
