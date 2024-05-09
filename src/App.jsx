import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills'
import PersonalInfo from './components/PersonalInfo'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <PersonalInfo />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
