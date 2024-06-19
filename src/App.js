
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import ServiciosPage from './pages/ServiciosPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router basename="/React1_UTN">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
