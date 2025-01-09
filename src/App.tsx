import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoScroll from './components/LogoScroll';
import Features from './components/Features';
import Carousel from './components/Carousel';
import Stories from './components/Stories';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoScroll />
      <Features />
      <Stories />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;