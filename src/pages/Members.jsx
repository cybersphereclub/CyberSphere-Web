import Card from '../components/common/Card';
import { members } from '../data/members';
import { Linkedin, Github, Twitter } from 'lucide-react';
import './About.css'; // Reusing About styles for consistency

const Members = () => {
    return (
        <div className="about-page container section page-transition">
            <div className="page-header">
                <h1>Our <span className="neon-text-green">Team</span></h1>
                <p>Meet the brilliant minds behind Cybersphere.</p>
            </div>

            <section className="team-section">
                <div className="team-grid">
                    {members.map((member) => (
                        <Card
                            key={member.id}
                            className="team-card animate-fade-up"
                            hoverEffect={true}
                            style={{ animationDelay: `${member.id * 100}ms` }}
                        >
                            <img src={member.image} alt={member.name} className="team-avatar" />
                            <h3 className="team-name">{member.name}</h3>
                            <span className="team-role neon-text-blue">{member.role}</span>
                            <p className="team-bio">{member.bio}</p>
                            <div className="team-socials">
                                {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={20} /></a>}
                                {member.socials.github && <a href={member.socials.github} target="_blank" rel="noreferrer"><Github size={20} /></a>}
                                {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noreferrer"><Twitter size={20} /></a>}
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};


export default Members;
