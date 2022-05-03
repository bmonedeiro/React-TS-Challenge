import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import './global.css'

function App() {
  return (
    <BrowserRouter>
      <main>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:movieId" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App
