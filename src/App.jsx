import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import News from './pages/News';
import About from './pages/About';
import Members from './pages/Members';
import GalleryPage from './pages/GalleryPage';
import IpEasterEgg from './components/features/IpEasterEgg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/members" element={<Members />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <IpEasterEgg />
      </div>
    </Router>
  );
}

export default App;
