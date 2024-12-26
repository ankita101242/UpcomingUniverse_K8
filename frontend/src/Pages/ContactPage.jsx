import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
    textAlign: 'center',
  };

  const headerStyle = {
    backgroundImage: 'url("../Images/c.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '80px 20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  const sectionStyle = {
    padding: '50px 20px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
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

  const messageStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    height: '150px',
  };

  return (
    <div style={pageStyle}>
    <Navbar/>
      <header style={headerStyle}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below.</p>
      </header>

      <section style={sectionStyle}>
        <h2>Get in Touch</h2>
        {isSubmitted ? (
          <p style={{ color: 'green' }}>Thank you for contacting us! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              style={inputStyle}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              style={inputStyle}
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              style={messageStyle}
              required
            ></textarea>
            <button type="submit" style={buttonStyle}>
              Send Message
            </button>
          </form>
        )}
      </section>

      <footer style={{ backgroundColor: '#333', color: 'white', padding: '20px 0', textAlign: 'center' }}>
        <p>&copy; Upcoming Universe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
