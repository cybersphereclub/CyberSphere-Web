import SEO from '../components/common/SEO';
import Card from '../components/common/Card';
import { Target, Eye, Users, Linkedin, Github, Twitter } from 'lucide-react';
import './About.css';

import { members } from '../data/members';

const About = () => {

    return (
        <div className="about-page container section page-transition">
            <SEO
                title="About Us"
                description="Learn about Cybersphere's mission, vision, and the team driving cybersecurity excellence at Adani University."
                url="/about"
            />
            <div className="page-header">
                <h1>About <span className="neon-text-green">The Corp</span></h1>
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
                <h2 className="section-title"><Users className="icon-green" /> Command Center</h2>
                <div className="team-scroller">
                    <div className="team-track">
                        {/* Original Set */}
                        {members.map((member) => (
                            <Card
                                key={`original-${member.id}`}
                                className="team-card"
                                hoverEffect={true}
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
                        {/* Duplicate Set for Loop */}
                        {members.map((member) => (
                            <Card
                                key={`duplicate-${member.id}`}
                                className="team-card"
                                hoverEffect={true}
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
                </div>
            </section>
        </div>
    );
};

export default About;
