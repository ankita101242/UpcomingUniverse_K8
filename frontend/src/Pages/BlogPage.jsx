import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const authToken = localStorage.getItem('authToken'); // Example token fetch from localStorage

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:9696/api/posts/all', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [authToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Navbar />

      <header
        style={{
          backgroundImage: 'url("../Images/b.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 20px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '37vh', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
        <h1>Our Blogs</h1>
        <p>Read insightful articles about sustainability, environment, and green practices.</p>
      </header>

      <section style={{ padding: '50px 20px', textAlign: 'left', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Latest Blog Posts</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {blogs.map((blog, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: '#fff',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h4>{blog.title}</h4>
              <p>{blog.content ? blog.content.substring(0, 100) + '...' : 'No excerpt available'}</p>
              <Link
                to={`/posts/${blog.postId}`} 
                style={{
                  padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none',
                  borderRadius: '5px', cursor: 'pointer', fontSize: '16px', textAlign: 'center', textDecoration: 'none',
                }}
              >
                Read More
              </Link>
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

export default BlogsPage;
