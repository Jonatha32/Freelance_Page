import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import CookiesPolicy from './pages/CookiesPolicy';
import Shop from './pages/Shop';
import LeRaffine from './pages/LeRaffine';
import EmpresaFamiliar from './pages/EmpresaFamiliar';
import Admin from './pages/Admin';
import { LanguageProvider } from './components/LanguageSelector';
import LanguageSelector from './components/LanguageSelector';
import useScrollToTop from './hooks/useScrollToTop';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/sobre-mi" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacidad" element={<Privacy />} />
              <Route path="/terminos" element={<Terms />} />
              <Route path="/reembolso" element={<RefundPolicy />} />
              <Route path="/cookies" element={<CookiesPolicy />} />
              <Route path="/tienda" element={<Shop />} />
              <Route path="/le-raffine" element={<LeRaffine />} />
              <Route path="/empresa-familiar" element={<EmpresaFamiliar />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
          <LanguageSelector />
        </div>
      </Router>
    </LanguageProvider>
  );
}

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default App;