import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '10px 20px',
    borderBottom: '1px solid #ccc',
    width: '100%',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'black',
    flex: 1, 
    textAlign: 'center',
  };

  const linksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
    flex: 1, 
    justifyContent: 'center', // Centers the links horizontally
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontSize: '16px',
    transition: 'color 0.3s',
  };

  const hoverStyle = (e, isHovering) => {
    e.target.style.color = isHovering ? 'gray' : 'black';
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Upcoming Universe</div>
      <ul style={linksStyle}>
        <li>
          <Link
            to="/homepage"
            style={linkStyle}
            onMouseEnter={(e) => hoverStyle(e, true)}
            onMouseLeave={(e) => hoverStyle(e, false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={linkStyle}
            onMouseEnter={(e) => hoverStyle(e, true)}
            onMouseLeave={(e) => hoverStyle(e, false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/blogs"
            style={linkStyle}
            onMouseEnter={(e) => hoverStyle(e, true)}
            onMouseLeave={(e) => hoverStyle(e, false)}
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            style={linkStyle}
            onMouseEnter={(e) => hoverStyle(e, true)}
            onMouseLeave={(e) => hoverStyle(e, false)}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            style={linkStyle}
            onMouseEnter={(e) => hoverStyle(e, true)}
            onMouseLeave={(e) => hoverStyle(e, false)}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={linkStyle}
            onMouseEnter={(e) => hoverStyle(e, true)}
            onMouseLeave={(e) => hoverStyle(e, false)}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link to ="/"
          style={linkStyle}
          onMouseEnter={(e) => hoverStyle(e, true)}
          onMouseLeave={(e) => hoverStyle(e, false)}
          >Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
