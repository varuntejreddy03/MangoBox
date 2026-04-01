import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { SmoothScroll } from './components/SmoothScroll';
import { WhatsAppFAB } from './components/WhatsAppFAB';
import { OrderProvider } from './context/OrderContext';
import { Home } from './pages/Home';
import { Subscribe } from './pages/Subscribe';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <OrderProvider>
      <SmoothScroll />
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-clip bg-[var(--ivory)]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
        <Footer />
        <WhatsAppFAB />
      </div>
    </OrderProvider>
  );
}

export default App;
