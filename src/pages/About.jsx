import Card from '../components/common/Card';
import { Target, Eye, Users, Linkedin, Github, Twitter } from 'lucide-react';
import './About.css';

import { members } from '../data/members';

const About = () => {

    return (
        <div className="about-page container section page-transition">
            <div className="page-header">
                <h1>About <span className="neon-text-purple">The Corp</span></h1>
                <p>We are a community of students dedicated to mastering the art of cybersecurity.</p>
            </div>

            <div className="mission-vision-grid">
                <Card className="mv-card">
                    <Target size={40} className="mv-icon icon-red" />
                    <h3>Our Mission</h3>
                    <p>To provide a platform for students to learn, practice, and excel in cybersecurity through hands-on workshops, competitions, and collaborative projects.</p>
                </Card>
                <Card className="mv-card">
                    <Eye size={40} className="mv-icon icon-blue" />
                    <h3>Our Vision</h3>
                    <p>To foster a culture of security awareness and innovation, producing the next generation of ethical hackers and defenders.</p>
                </Card>
            </div>

            <section className="team-section">
                <h2 className="section-title"><Users className="icon-purple" /> Command Center</h2>
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

export default About;
