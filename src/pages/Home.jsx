import Button from '../components/common/Button';
import TypingEffect from '../components/common/TypingEffect';
import StatsSection from '../components/features/StatsSection';
import EventCard from '../components/features/EventCard'; // Fixed import path
import SEO from '../components/common/SEO';
import { ArrowRight, Shield, Terminal } from 'lucide-react';
import './Home.css';

import { events } from '../data/events';

const Home = () => {
    // Get upcoming events, sort by date (nearest first), and take top 3
    const upcomingEvents = events
        .filter(event => event.status === 'upcoming')
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 3);

    return (
        <div className="home-page page-transition">
            <SEO
                title="Ultimate Cybersecurity Club @ Adani University"
                description="Join Cybersphere, the premier cybersecurity community at Adani University, Ahmedabad. Explore ethical hacking, workshops, and networking with security experts."
                keywords="Cybersphere, Cybersecurity Club Ahmedabad, Adani University Tech, Ethical Hacking Gujarat, Security Research India"
            />
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">

                        <h1 className="hero-title">
                            <div className="typing-line">
                                <span className="static-text">SECURE THE </span>
                                <span className="highlight-text neon-text-blue">
                                    <TypingEffect text="FUTURE." speed={150} delay={500} />
                                </span>
                            </div>
                            <div className="typing-line">
                                <span className="static-text">DEFEND THE </span>
                                <span className="highlight-text neon-text-green">
                                    <TypingEffect text="NETWORK." speed={150} delay={2000} />
                                </span>
                            </div>
                        </h1>
                        <p className="hero-subtitle animate-fade-up delay-500">
                            Join the elite community of ethical hackers, security researchers, and tech enthusiasts.
                            Learn, compete, and build the safer internet of tomorrow.
                        </p>
                        <div className="hero-actions animate-fade-up delay-500">
                            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdDWY2dSAduHT8MFUjfZte-rvASDmhrRvCLD5mPYezGrG0nag/viewform?usp=publish-editor" target="_blank" size="lg" className="hero-btn">Join The Club <ArrowRight size={20} /></Button>
                            <Button href="/events" variant="secondary" size="lg">View Events</Button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="scanner-line"></div>
                        <Terminal size={300} strokeWidth={0.5} className="hero-icon-bg" />
                        <div className="code-block glass-panel">
                            <pre>
                                <span className="code-green">root@cybersphere:~#</span> ./init_sequence.sh{'\n'}
                                <span className="code-blue">[INFO]</span> Loading modules...{'\n'}
                                <span className="code-blue">[INFO]</span> Establishing secure connection...{'\n'}
                                <span className="code-green">[SUCCESS]</span> Access Granted.
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection />

            {/* Upcoming Events Preview */}
            <section className="section upcoming-preview">
                <div className="container">
                    <div className="section-header">
                        <h2>Upcoming Operations</h2>
                        <a href="/events" className="view-all-link">View Full Calendar <ArrowRight size={16} /></a>
                    </div>
                    <div className="events-grid-preview">
                        {upcomingEvents.length > 0 ? (
                            upcomingEvents.map(event => (
                                <EventCard key={event.id} event={event} showCountdown={true} />
                            ))
                        ) : (
                            <div className="no-events-container">
                                <p className="no-events-msg">No upcoming operations scheduled. Check back soon.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Membership/CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box glass-panel neon-border-blue">
                        <h2>Ready to Breach the Matrix?</h2>
                        <p>Whether you're a beginner or a Red Team pro, there's a place for you here.</p>
                        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSdDWY2dSAduHT8MFUjfZte-rvASDmhrRvCLD5mPYezGrG0nag/viewform?usp=publish-editor" target="_blank" variant="primary" size="lg">Become a Member</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
