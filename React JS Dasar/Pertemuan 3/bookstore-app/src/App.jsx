import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import Book from './pages/Book'; 
import Team from './pages/Team';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';  

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        
        <main className="flex-grow-1">
          <div className="container mt-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book" element={<Book />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;