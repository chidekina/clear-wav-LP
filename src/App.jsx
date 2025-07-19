import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Loading from './components/Loading';
import Header from './components/Header';
import Hero from './components/Hero';
import ComoFunciona from './components/ComoFunciona';
import Beneficios from './components/Beneficios';
import ExemploReal from './components/ExemploReal';
import PlanosPrecos from './components/PlanosPrecos';
import Cadastro from './components/Cadastro';
import Footer from './components/Footer';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-[#0a1833] min-h-screen flex flex-col font-inter">
      <Header />
      <Hero />
      <ComoFunciona />
      <Beneficios />
      <ExemploReal />
      <PlanosPrecos />
      <Cadastro />
      <Footer />
    </div>
  );
}

export default App;
