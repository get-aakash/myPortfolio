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
      <div style={{ marginTop: '100px', padding: '20px' }}>
        <p>Scroll down to test the fixed navbar.</p>
        <div style={{ height: '2000px', background: '#eee' }}></div>
      </div>
      <Home />
      <About />
      <Projects />
      <Footer />

    </div>
  )
}

export default App
