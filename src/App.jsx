import './App.css'
import About from './pages/About'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {

  return (
    <div className="wrapper">
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />

    </div>
  )
}

export default App
