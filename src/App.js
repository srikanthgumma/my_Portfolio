import Aboutsection from './Components/Aboutsection';
import ContactSection from './Components/ContactSection';
import ExperienceSection from './Components/ExperienceSection';
import Footer from './Components/FooterSection';
import HeaderSection from './Components/HeaderSection';
import HomeSection from './Components/HomeSection';
import ProjectsSection from './Components/ProjectSection';
import Skills from './Components/Skills';

export default function App() {

  return (
    <div className='area '>
        <ul className="circles">
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
          <li></li>
        </ul>
      <HeaderSection />
      <HomeSection />
      <Aboutsection />
      <Skills />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
