import React from 'react';
import Navbar from '../Components/Navbar';

const AboutPage = () => {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    textAlign: 'center',
  };

  const sectionStyle = {
    padding: '10px 20px',
    textAlign: 'left',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headerStyle = {
    backgroundImage: 'url("../Images/a.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '80px 20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  return (
    <div style={pageStyle}>
     <Navbar /> 
      <header style={headerStyle}>
        <h1>About Us</h1>
        <p>Learn more about our mission and values.</p>
      </header>

      <section style={sectionStyle}>
        <h4>Our Mission</h4>
        <p>
          We are dedicated to promoting sustainability, environmental awareness, and green practices that contribute to the preservation of our planet. Our team works tirelessly to inspire others to make a positive impact on the environment and future generations.
        </p>
        <p>
          We are the new generation of Earth. Our purpose is to connect with individuals who care about the well-being of future generations and the health of our planet.
        </p>
      </section>

      <section style={{ ...sectionStyle, backgroundColor: '#f4f4f4' }}>
        <h4>Share Your Ideas</h4>
        <p>
          How can we create a better society? Share your ideas with us on the "Contact Us" page—we would be delighted to hear from you.
        </p>
        <blockquote>
          <p>
            Great ideas come from great minds,<br />
            And beautiful ideas come from beautiful hearts.
          </p>
        </blockquote>
      </section>

      <section style={sectionStyle}>
        <h4>Our Values</h4>
        <ul>
          <li><strong>Environmental Sustainability:</strong> We prioritize solutions that promote long-term ecological health.</li>
          <li><strong>Community Engagement:</strong> We believe in the power of collaboration and actively work with local communities.</li>
          <li><strong>Innovation:</strong> We embrace new technologies and creative ideas for environmental protection.</li>
          <li><strong>Integrity:</strong> We are transparent in our efforts and uphold the highest ethical standards.</li>
        </ul>
      </section>

      <section style={{ ...sectionStyle, backgroundColor: '#f4f4f4' }}>
        <h4>Our Team</h4>
        <p>
          Our team is made up of passionate individuals dedicated to making a difference. From scientists to community organizers, our collective efforts are focused on creating a sustainable future.
        </p>
      </section>

      <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px 0', textAlign: 'center' }}>
        <p>&copy; Upcoming Universe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
