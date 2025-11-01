import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Conclusion />
      <Footer />
    </div>
  );
}

export default App;