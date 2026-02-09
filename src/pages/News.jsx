import SEO from '../components/common/SEO';
import NewsFeed from '../components/features/NewsFeed';
import './News.css';

const News = () => {
    return (
        <div className="news-page container section page-transition">
            <SEO
                title="News & Intelligence"
                description="Latest cybersecurity threats, news, and updates from the cyber world."
                url="/news"
            />
            <div className="page-header">
                <h1>Threat <span className="neon-text-red">Intelligence</span></h1>
                <p>Latest cybersecurity news, vulnerabilities, and club announcements.</p>
            </div>

            <div className="animate-fade-up delay-200">
                <NewsFeed />
            </div>
        </div>
    );
};

export default News;
