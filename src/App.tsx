import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ValueStrip from '@/components/ValueStrip';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ValueStrip />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Projects />
        <Technologies />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
