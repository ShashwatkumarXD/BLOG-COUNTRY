import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
// import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://blog-country-api.onrender.com/me', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      {/* <Navbar/> */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login setUser={setUser} />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;