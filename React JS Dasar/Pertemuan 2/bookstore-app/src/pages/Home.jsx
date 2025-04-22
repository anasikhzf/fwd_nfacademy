import React from 'react';
import Hero from './Hero';  // Mengimpor Hero
import Book from './Book';  // Mengimpor Book
import Team from './Team';  // Mengimpor Team
import Contact from './Contact';  // Mengimpor Contact

function Home() {
  return (
    <div className="container mt-5">
      <Hero />
      <Book />
      <Team />
      <Contact />
    </div>
  );
}

export default Home;
