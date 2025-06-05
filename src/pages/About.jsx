/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiTrendingUp, FiTarget } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Farmers Supported', value: '5,000+', icon: <FiUsers /> },
    { label: 'Loans Disbursed', value: '₦500M+', icon: <FiTrendingUp /> },
    { label: 'Products Listed', value: '20,000+', icon: <FiTarget /> },
    { label: 'States Covered', value: '15+', icon: <FiAward /> }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Leveraging technology to create efficient agricultural solutions',
      icon: '💡'
    },
    {
      title: 'Sustainability',
      description: 'Promoting sustainable farming practices and financial growth',
      icon: '🌱'
    },
    {
      title: 'Community',
      description: 'Building strong relationships between farmers and buyers',
      icon: '🤝'
    }
  ];

  const team = [
    {
      name: 'Adeola Lasisi',
      role: 'CEO & Founder',
      image: '/images/team/ceo.jpg',
      bio: 'With over 15 years in AgriTech'
    },
    {
      name: 'Adeniji Olaoluwa',
      role: 'Chief Technology Officer',
      image: '/images/team/cto.jpg',
      bio: 'Former Tech Lead at AgriCorp'
    },
    {
      name: 'Aramide Gbadegeshin',
      role: 'Chief Financial Officer',
      image: '/images/team/cfo.jpg',
      bio: 'Expert in Agricultural Finance'
    },
    {
      name: 'Sarah Aramide',
      role: 'Chief Operations Officer',
      image: '/images/team/coo.jpg',
      bio: 'Operations Management Specialist'
    }
  ];

  const handleGetStarted = () => {
    navigate('/marketplace');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-title"
          >
            About AgroPlus
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-subtitle"
          >
            Transforming Agriculture Through Innovation and Finance
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              className="story-content"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Story</h2>
              <p>
                At AgroPlus, we are passionate about revolutionizing agriculture through innovative financial solutions and technology. Founded with a vision to bridge the gap between farmers and buyers while providing essential financial services, we have grown to become Nigeria's leading agricultural fintech platform.
              </p>
              <p>
                Our platform combines a robust marketplace with comprehensive financial services, creating an ecosystem that supports agricultural growth, sustainability, and prosperity. AgroPlus is committed to empowering farmers, facilitating trade, and fostering agricultural development across Nigeria.
              </p>
            </motion.div>
            <motion.div 
              className="story-image"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/about/story.jpg" alt="Our Story" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="team-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Agricultural Revolution</h2>
            <p>
              Whether you're a farmer looking for financial support or a buyer seeking quality agricultural products, AgroPlus is here to help you succeed.
            </p>
            <div className="cta-buttons">
              <motion.button
                className="cta-button primary"
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="cta-button secondary"
                onClick={handleContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 