import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '../Images/1.jpg',
    '../Images/2.jpg',
    '../Images/3.jpg',
    '../Images/4.jpg',
    '../Images/5.jpg',
    '../Images/6.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    textAlign: 'center',
  };

  const headerStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '100px 20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    transition: 'background-image 1s ease-in-out',
  };

  const sectionStyle = {
    padding: '10px 60px',
    textAlign: 'left',
    marginLeft: '10%',
    marginRight: '10%',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div style={pageStyle}>
      <Navbar />  

      <header style={headerStyle}>
        <h1>Welcome to Upcoming Universe</h1>
        <p>Join us in making the planet greener and cleaner for future generations.</p>
        <button style={buttonStyle}>Get Started</button>
      </header>

      <section style={sectionStyle}>
        <h2>Upcoming Universe</h2>
        <p>
          Green World is dedicated to raising awareness about environmental issues
          and promoting sustainable practices. Our mission is to inspire individuals
          and communities to take actionable steps toward building a better tomorrow.
        </p>
        <p>
          The Earth's resources belong to all its inhabitants. These resources are meant
          to be shared, not exploited by humans. Sharing the land with animals and plants
          is our duty, and interfering with their lives is unjust and harmful. We are
          merely passengers on this planet. Earth does not belong to us—we are borrowing
          it from future generations. As the saying goes: "We do not inherit the Earth
          from our ancestors; we borrow it from our children."
        </p>
      </section>

      <section style={{ ...sectionStyle, backgroundColor: '#f4f4f4'}}>
        <h3>Key Issues</h3>
        <h4>Ocean Pollution: A Crisis of Our Making</h4>
        <p>
          We must take responsibility for our actions. The species living in the depths
          of the ocean are in danger because of us. Plastics, chemicals, fertilizers,
          and detergents—human-made products—are destroying the Earth's natural resources.
          It is our duty to reverse this damage and protect marine life.
        </p>

        <h4>The Role of Animals in Our Ecosystem</h4>
        <p>
          Animals are as important to our ecosystem as any other element. They maintain
          the ecological pyramid and are a vital part of our environment. However, human
          activities—such as urban expansion and habitat destruction—are causing irreversible
          harm to animal and plant species. We must act now to preserve biodiversity.
        </p>

        <h4>Feminism: A Call for Equality</h4>
        <p>
          Feminism is about providing women with choices. It is not a tool to judge or
          criticize other women; it is about freedom, liberation, and equality. Contrary
          to common belief, feminism is not about prioritizing women over others—it
          stands for equality across all genders.
        </p>

        <h4>Most Pressing Global Issues</h4>
        <ul>
          <li>Global Warming</li>
          <li>Ocean Pollution</li>
          <li>Melting Glaciers</li>
          <li>Space Pollution</li>
          <li>Food Security</li>
          <li>Women and Child Safety</li>
          <li>Different Types of Pollution</li>
          <li>Climate Change</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h3>Our World Needs Healing</h3>
        <p>
          Our planet is on the brink of destruction. It needs change. It needs to heal from
          the damage we have caused. Humans, often considered the most intelligent species,
          are neglecting their primal instinct—to protect their habitat.
        </p>
        <p>
          Scientists warn that if we do not address climate change in the coming years, we
          may lose this battle. This is our chance to save the Earth. Let us spread awareness
          about critical issues like melting ice caps, ocean pollution, food chain imbalances
          caused by animal exploitation, vanishing species, overflowing landfills, air
          pollution, rainforest destruction, water pollution, and energy depletion.
        </p>
      </section>

      <section style={{ ...sectionStyle, backgroundColor: '#f4f4f4' }}>
        <h3>Our Initiatives</h3>
        <ul>
          <li>Tree Plantation Drives</li>
          <li>Waste Management Workshops</li>
          <li>Community Clean-Up Events</li>
          <li>Educational Campaigns</li>
          <li>Distribution Drives</li>
          <li>Sharing Happiness with Children and the Elderly</li>
          <li>Feeding Stray Animals</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h3>Share Your Views</h3>
        <p>
          We would love to hear your ideas, opinions, or observations. Share your thoughts
          with us via email at: <a href="mailto:upcominguniversewp@gmail.com">upcominguniversewp@gmail.com</a>
        </p>
        <p>
          Let us know how we can bring about positive change in our society. We value your
          insights and will be happy to listen.
        </p>
      </section>

      <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px 0', textAlign: 'center' }}>
        <p>&copy; Upcoming Universe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
