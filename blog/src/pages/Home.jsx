import React from 'react';
import BlogList from '../components/BlogList';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  const handleLogout = async () => {
    await fetch('http://localhost:5000/logout', {
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
