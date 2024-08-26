import About from "./components/About"
import ContactSection from "./components/Contact"
import ExperienceSection from "./components/Experiences"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProjectSection from "./components/Project"
import Skills from "./components/Skills"



function App() {
  

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      
      
      <NavBar/>
      <div className="container mt-20 mx-auto px-8">
      <Hero />
      <About/>
      <Skills />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer/>
      </div>
    </div>
  )
}

export default App
