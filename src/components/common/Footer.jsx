import { Linkedin, Instagram, MessageCircle } from 'lucide-react';
import logo from '../../assets/logonew.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer glass-panel">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src={logo} alt="Cybersphere Logo" className="logo-image-sm" />
                        <span>CYBER<span className="text-highlight">SPHERE</span></span>
                    </div>
                    <p className="footer-tagline">Securing the future, one byte at a time.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Club</h4>
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/members">Members</a>
                    </div>
                    <div className="footer-column">
                        <h4>Activities</h4>
                        <a href="/events">Events</a>
                        <a href="/news">News</a>
                        <a href="/gallery">Gallery</a>
                    </div>
                    <div className="footer-column">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/company/cyber-sphere-club" target="_blank" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="https://www.instagram.com/cybersphere_club" target="_blank" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://chat.whatsapp.com/G6eQGvsfWGcERCjgI7iTDJ?mode=gi_t" target="_blank" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Cybersphere Club. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
