import Card from '../common/Card';
import Button from '../common/Button';
import CountdownTimer from './CountdownTimer';
import { Calendar, MapPin, Clock } from 'lucide-react';
import './EventCard.css';

const EventCard = ({ event, showCountdown = false }) => {
    const { title, date, time, location, image, description, link, status } = event;
    const isPast = status === 'past';

    // Combine date and time for countdown
    const eventDateTime = new Date(`${date}T${time || '00:00'}`);

    return (
        <Card className={`event-card ${isPast ? 'event-past' : ''}`} hoverEffect={!isPast}>
            <div className="event-image-container">
                <img src={image} alt={title} className="event-image" />
                <div className="event-overlay"></div>
                <div className={`event-badge ${isPast ? 'badge-past' : ''}`}>
                    {isPast ? 'COMPLETED' : 'UPCOMING'}
                </div>
            </div>

            <div className="event-content">
                <h3 className="event-title">{title}</h3>

                <div className="event-meta">
                    <div className="meta-item">
                        <Calendar size={16} />
                        <span>{date}</span>
                    </div>
                    <div className="meta-item">
                        <Clock size={16} />
                        <span>{time}</span>
                    </div>
                    <div className="meta-item">
                        <MapPin size={16} />
                        <span>{location}</span>
                    </div>
                </div>

                <p className="event-description">{description}</p>

                {showCountdown && !isPast && (
                    <div className="event-countdown">
                        <p className="countdown-label">Starting In:</p>
                        <CountdownTimer targetDate={eventDateTime} />
                    </div>
                )}

                <div className="event-actions">
                    {isPast ? (
                        <p className="event-ended-msg">This event has ended.</p>
                    ) : (
                        <Button
                            variant="primary"
                            className="event-btn"
                            onClick={() => window.open(link, '_blank')}
                        >
                            Register Now
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default EventCard;
