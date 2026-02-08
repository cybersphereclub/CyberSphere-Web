import { useState, useEffect } from 'react';
import { Eye, ShieldAlert, X } from 'lucide-react';
import './IpEasterEgg.css';

const IpEasterEgg = () => {
    const [inputBuffer, setInputBuffer] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [ipData, setIpData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Only track letters
            if (!/^[a-zA-Z]$/.test(e.key)) return;

            setInputBuffer(prev => {
                const newBuffer = (prev + e.key).toLowerCase().slice(-5); // Keep last 5 chars
                if (newBuffer.endsWith('ip')) {
                    triggerEasterEgg();
                }
                return newBuffer;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const triggerEasterEgg = async () => {
        setShowPopup(true);
        setLoading(true);
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            setIpData(data.ip);
        } catch (error) {
            console.error('Failed to fetch IP:', error);
            setIpData('Unknown (You are ghosting well!)');
        } finally {
            setLoading(false);
        }
    };

    if (!showPopup) return null;

    return (
        <div className="ip-overlay">
            <div className="ip-modal neon-border-red">
                <button className="ip-close" onClick={() => setShowPopup(false)}>
                    <X size={24} />
                </button>

                <div className="ip-content">
                    <div className="ip-icon-wrapper">
                        <Eye size={64} className="ip-icon pulse-animation" />
                    </div>

                    <h2 className="glitch-text" data-text="YOU ARE BEING WATCHED">YOU ARE BEING WATCHED</h2>

                    <div className="ip-display">
                        <span className="ip-label">Your Digital Footprint:</span>
                        <div className="ip-address">
                            {loading ? <span className="scanning-text">SCANNING NETWORK...</span> : ipData}
                        </div>
                    </div>

                    <p className="ip-warning">
                        <ShieldAlert size={16} style={{ display: 'inline', marginRight: '5px' }} />
                        Thinking you're safe? Every click leaves a trace.
                        In cyberspace, anonymity is a luxury, not a right.
                        <br /><br />
                        <span className="secure-yourself">SECURE YOURSELF.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IpEasterEgg;
