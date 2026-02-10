import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logonew.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'News', path: '/news' },
    { name: 'The Team', path: '/members' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Cybersphere Logo" className="logo-image" />
          <span className="logo-text">CYBER<span className="text-highlight">SPHERE</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://linktr.ee/cybersphere_au" target="_blank" className="btn-primary">Join Us</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="navbar-mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu glass-panel">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href="https://linktr.ee/cybersphere_au" target="_blank" className="btn-primary mobile-btn" onClick={() => setIsOpen(false)}>Join Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
