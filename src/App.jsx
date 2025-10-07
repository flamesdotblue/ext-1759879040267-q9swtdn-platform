import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <main>
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
