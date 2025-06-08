import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';



const FadeWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);


function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<FadeWrapper><Home /></FadeWrapper>} />
          <Route path="/services" element={<FadeWrapper><Services /></FadeWrapper>} />
          <Route path="/booking" element={<FadeWrapper><Booking /></FadeWrapper>} />
          <Route path="/contact" element={<FadeWrapper><Contact /></FadeWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;