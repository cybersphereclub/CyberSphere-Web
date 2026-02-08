import Gallery from '../components/features/Gallery';
import './GalleryPage.css';

import { galleryEvents } from '../data/gallery';

const GalleryPage = () => {

    return (
        <div className="gallery-page container section page-transition">
            <div className="page-header">
                <h1>Visual <span className="neon-text-blue">Records</span></h1>
                <p>Archive of our operations, missions, and community events.</p>
            </div>

            <div className="gallery-feed">
                {galleryEvents.map((event, index) => (
                    <div key={index} className="gallery-event-section">
                        <div className="event-header">
                            <h2 className="event-title">{event.title}</h2>
                            <span className="event-date neon-text-green">{event.date}</span>
                        </div>
                        <Gallery images={event.images} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
