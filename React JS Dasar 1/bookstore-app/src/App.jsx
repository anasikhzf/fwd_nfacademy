import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestSellingSection from './components/BestSellingSection'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Hero />
        <BestSellingSection />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App