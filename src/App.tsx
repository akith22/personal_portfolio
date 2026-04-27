import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground';

function App() {
  return (
    <div className="relative">
      {/* KlexD-style animated background — fixed, below everything */}
      <GlobalBackground />

      {/* All page content — sits above background layers */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Achievements />
          <div className="section-divider" />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
