import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFAB } from './components/WhatsAppFAB';
import { Home } from './pages/Home';
import { Subscribe } from './pages/Subscribe';
import { OrderProvider } from './context/OrderContext';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppFAB />
      </div>
    </OrderProvider>
  );
}

export default App;