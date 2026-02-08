import Card from '../common/Card';
import { stats } from '../../data/stats';
import './StatsSection.css';

const StatsSection = () => {

    return (
        <section className="stats-section section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat) => (
                        <Card key={stat.id} className="stat-card" hoverEffect={true}>
                            <div className={`stat-icon icon-${stat.color}`}>
                                <stat.icon size={32} />
                            </div>
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
