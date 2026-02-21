import SEO from '../components/common/SEO';
import EventCard from '../components/features/EventCard';
import './Events.css';

import { events } from '../data/events';

const Events = () => {



    const upcoming = events.filter(e => e.status === 'upcoming');
    const past = events.filter(e => e.status === 'past');

    return (
        <div className="events-page container section page-transition">
            <SEO
                title="Events"
                description="Upcoming cybersecurity events, hackathons, and CTFs at Adani University. Join our workshops on web security, network defense, and digital forensics in Ahmedabad."
                keywords="Cybersecurity Events Ahmedabad, Adani University Workshops, CTF Competitions India, Hacking Seminars, capture the flag india 2026, web security workshop gujarat"
                url="/events"
            />
            <div className="page-header">
                <h1>Mission <span className="neon-text-blue">Log</span></h1>
                <p>Upcoming operations and archive of past deployments.</p>
            </div>

            <section className="events-section">
                <h2 className="section-title">Upcoming Operations</h2>
                <div className="events-grid">
                    {upcoming.length > 0 ? (
                        upcoming.map((event, index) => (
                            <div key={event.id} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                                <EventCard event={event} showCountdown={true} />
                            </div>
                        ))
                    ) : (
                        <div className="no-events-container">
                            <p className="no-events-msg">No upcoming operations scheduled. Check back soon.</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="events-section">
                <h2 className="section-title">Mission Archive</h2>
                <div className="events-grid">
                    {past.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </section>


        </div>
    );
};

export default Events;
