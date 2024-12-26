import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import GalleryPage from './Pages/GalleryPage';
import ShopPage from './Pages/ShopPage';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';
import ArticlePage from './Pages/ArticlePage';

function App() {
  const isLoggedIn = localStorage.getItem('authToken') !== null;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/homepage" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/about" element={isLoggedIn ? <AboutPage /> : <Navigate to="/" />} />
        <Route path="/blogs" element={isLoggedIn ? <BlogPage /> : <Navigate to="/" />} />
        <Route path="/gallery" element={isLoggedIn ? <GalleryPage /> : <Navigate to="/" />} />
        <Route path="/shop" element={isLoggedIn ? <ShopPage /> : <Navigate to="/" />} />
        <Route path="/contact" element={isLoggedIn ? <ContactPage /> : <Navigate to="/" />} />
        <Route path="/article" element={isLoggedIn ? <ArticlePage /> : <Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;
