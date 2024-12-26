import React from 'react';
import Navbar from '../Components/Navbar';

const GalleryPage = () => {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    textAlign: 'center',
  };

  const sectionStyle = {
    padding: '50px 20px',
    textAlign: 'left',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headerStyle = {
    backgroundImage: 'url("../Images/d.jpg")', // Add your image path here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '80px 20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  };

  const imageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  };

  // const imageHoverStyle = {
  //   transform: 'scale(1.05)',
  // };

  const images = [
    '/Images/7.jpg',
    '/Images/8.jpg',
    '/Images/9.jpg',
    '/Images/10.jpg',
    '/Images/11.jpg',
    '/Images/12.jpg',
    '/Images/c.jpg',
    '/Images/h.jpg',
  ];

  return (
    <div style={pageStyle}>
    <Navbar/>
      <header style={headerStyle}>
        <h1>Gallery</h1>
        <p>Explore images related to sustainability, nature, and the environment.</p>
      </header>

      <section style={sectionStyle}>
        <h2>Environmental Wonders</h2>
        <div style={galleryStyle}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Environment ${index + 1}`}
                style={imageStyle}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
      </section>

      <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px 0', textAlign: 'center' }}>
        <p>&copy; Upcoming Universe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GalleryPage;
