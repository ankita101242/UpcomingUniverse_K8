import React from 'react';
import Navbar from '../Components/Navbar';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: 'Eco-Friendly Water Bottle (Resuable)',
      image: '/Images/d.jpg', 
      price: 12.99,
    },
    {
      id: 2,
      name: 'Biodegradable Shopping Bag',
      image: '/Images/c.jpg',
      price: 5.49,
    },
    {
      id: 3,
      name: 'Sustainable Bamboo Toothbrush',
      image: '/Images/a.jpg',
      price: 3.99,
    },
    {
      id: 4,
      name: 'Recycled Paper Notebooks (Decomposable)',
      image: '/Images/b.jpg',
      price: 8.99,
    },
  ];  

  const addToCart = (product) => {
    console.log('Added to cart:', product.name);
  };

  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const headerStyle = {
    backgroundImage: 'url("../Images/d.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '80px 20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  const sectionStyle = {
    padding: '50px 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    flex: '1', // This makes the main content grow to take up available space
  };

  const productCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  };

  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: 'auto', // Ensures footer stays at the bottom of the page
  };

  return (
    <div style={pageStyle}>
    <Navbar/>
      <div style={headerStyle}>
        <h1>Eco-Friendly Products</h1>
        <p>Shop sustainable, eco-friendly products to reduce your carbon footprint.</p>
      </div>

      <section style={sectionStyle}>
        {products.map((product) => (
          <div key={product.id} style={productCardStyle}>
            <img src={product.image} alt={product.name} style={imageStyle} />
            <h4>{product.name}</h4>
            <p>${product.price.toFixed(2)}</p>
            <button
              style={buttonStyle}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      <footer style={footerStyle}>
        <p>&copy; Upcoming Universe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShopPage;
