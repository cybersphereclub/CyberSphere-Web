import SEO from '../components/common/SEO';
import Gallery from '../components/features/Gallery';
import './GalleryPage.css';

import { galleryEvents } from '../data/gallery';

const GalleryPage = () => {

    return (
        <div className="gallery-page container section page-transition">
            <SEO
                title="Gallery"
                description="Visual records of Cybersphere's deployments: CTFs, seminars, and hands-on hacking labs at Adani University. See our mission in action across Gujarat."
                keywords="Cybersphere Gallery, Hacking Event Photos, Adani University Tech Gallery, Cybersecurity Workshops Ahmedabad, student hacking lab photos"
                url="/gallery"
            />
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
