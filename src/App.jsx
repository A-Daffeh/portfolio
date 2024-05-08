import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills'
import PersonalInfo from './components/PersonalInfo'

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <PersonalInfo />
      <Skills />
    </>
  )
}

export default App
