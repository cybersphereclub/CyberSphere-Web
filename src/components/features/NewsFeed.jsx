import Card from '../common/Card';
import Button from '../common/Button';
import { ExternalLink, ShieldAlert } from 'lucide-react';
import './NewsFeed.css';

import { news } from '../../data/news';

const NewsFeed = () => {

    return (
        <div className="news-feed">
            <div className="news-header">
                <h2><ShieldAlert className="news-icon" /> Threat Intel</h2>
                <span className="live-indicator">● LIVE FEED</span>
            </div>

            <div className="threat-map-container">
                <iframe
                    src="https://fortiguard.fortinet.com/threat-map"
                    title="Live Threat Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                ></iframe>
            </div>

            <div className="news-list">
                {news.map((item) => (
                    <Card key={item.id} className={`news-item severity-${item.severity}`}>
                        <div className="news-meta">
                            <span className="news-source">{item.source}</span>
                            <span className="news-date">{item.date}</span>
                        </div>

                        <h4 className="news-title">{item.title}</h4>
                        <p className="news-summary">{item.summary}</p>

                        <a href={item.link} className="news-link">
                            Read Report <ExternalLink size={14} />
                        </a>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default NewsFeed;
