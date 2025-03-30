import React from 'react';
import BlogList from '../components/BlogList';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  const handleLogout = async () => {
    await fetch('https://blog-country-api.onrender.com/logout', {
      method: 'POST',
      credentials: 'include'
    });
    window.location.reload();
  };

  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <BlogList />
    </div>
    // <div></div>
  );
};

export default Home;
