import Aboutsection from './Components/Aboutsection';
import ContactSection from './Components/ContactSection';
import Footer from './Components/FooterSection';
import HeaderSection from './Components/HeaderSection';
import HomeSection from './Components/HomeSection';
import ProjectsSection from './Components/ProjectSection';
import ServicesSection from './Components/ServiceSection';
import Skills from './Components/Skills';
import me from './images/profilename.jpg'

export default function App() {

  return (
    <div className=''>
      <div className="area w-full p-0 m-0">
        <ul className="circles">
          <li><img src={me} alt="Trulli" width="100%" height="100%" className='rounded-full' />
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li> 
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li> 
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <HeaderSection />
      <HomeSection />
      <Skills />
      <Aboutsection />
      <ProjectsSection />

      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
