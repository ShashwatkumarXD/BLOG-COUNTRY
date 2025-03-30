// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { TfiLayoutLineSolid } from "react-icons/tfi";
// import { FaChrome } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

// const Login = ({ setUser }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const res = await fetch('https://blog-country-api.onrender.com/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include',
//       body: JSON.stringify({ username, password })
//     });
//     if (res.ok) {
//       const data = await res.json();
//       setUser({ username: data.username });
//       navigate('/');
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className='flex flex-col py-20 px-60 justify-center items-center'>
//       <div className='absolute top-0 left-0'>Username: admin <br/>
//         Password: 1234
//       </div>
//       <form onSubmit={handleLogin} className=''>
//         <div className='flex flex-col justify-center items-center'>
//           <div className='flex justify-center items-center gap-2'>
//             <p className='text-2xl font-bold text-[#FF3B30] font-serif'>Welcome to The Skytrails</p>
//             <img src='/logo.png' className='w-[20px] h-[20px] mt-0.5' />
//           </div>
//           <p className='text-[#404040]'>Sign in to your account or create a new one</p>
//         </div>
//         <p className='flex justify-center items-center pt-3 text-[20px] font-semibold'>LOGIN</p>
//         <div>
//           <div>
//             <p className='font-serif'>Username</p>
//             <input
//               className="w-full p-2 mb-4 border border-[#FF3B30] outline-none rounded"
//               type='text'
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             ></input>
//           </div>
//         </div>
//         <div>
//           <div>
//             <p className='font-serif'>Password</p>
//             <input
//               className="w-full p-2 mb-4 border border-[#FF3B30] outline-none rounded"
//               type="password"
//               placeholder="*****"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full p-2 rounded border-1"
//         >
//           Login
//         </button>
//       </form>
//       <div className='relative flex justify-center items-center gap-1 mt-5'>
//         <TfiLayoutLineSolid className='mt-0.5' />
//         <span className='text-muted-foreground uppercase text-sm'>Or continue with</span>
//         <TfiLayoutLineSolid className='mt-0.5' />
//       </div>
//       <div className='flex justify-center items-center gap-16 pt-6'>
//         <div className='flex justify-center items-center gap-3'>
//           <FaChrome />
//           <span className='mb-0.5'>Google</span>
//         </div>
//         <div className='flex justify-center items-center gap-3'>
//           <FaGithub />
//           <span className='mb-0.5'>Github</span>
//         </div>
//       </div>
//     </div>


//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { FaChrome, FaGithub } from 'react-icons/fa';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('https://blog-country-api.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const data = await res.json();
      setUser({ username: data.username });
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 sm:px-8 md:px-20 lg:px-40">
      <div className="absolute top-2 left-2 text-xs text-gray-500">
        Username: <span className="font-semibold">admin</span> <br />
        Password: <span className="font-semibold">1234</span>
      </div>

      <form onSubmit={handleLogin} className="w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-[#FF3B30] font-serif text-center">Welcome to The Skytrails</p>
            <img src="/logo.png" alt="logo" className="w-5 h-5 mt-1" />
          </div>
          <p className="text-sm text-[#404040] text-center">Sign in to your account or create a new one</p>
        </div>

        <p className="text-lg font-semibold text-center mb-4">LOGIN</p>

        {error && (
          <div className="text-red-600 text-sm text-center mb-2">{error}</div>
        )}

        <div className="mb-4">
          <label className="block font-serif mb-1">Username</label>
          <input
            className="w-full p-2 border border-[#FF3B30] outline-none rounded"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block font-serif mb-1">Password</label>
          <input
            className="w-full p-2 border border-[#FF3B30] outline-none rounded"
            type="password"
            placeholder="*****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-[#FF3B30] text-white font-semibold rounded hover:bg-[#e13229] transition"
        >
          Login
        </button>
      </form>

      <div className="relative flex items-center justify-center gap-1 mt-6">
        <TfiLayoutLineSolid className="mt-0.5" />
        <span className="text-muted-foreground uppercase text-sm">Or continue with</span>
        <TfiLayoutLineSolid className="mt-0.5" />
      </div>

      <div className="flex justify-center items-center gap-10 pt-6 text-[#404040]">
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#FF3B30] transition">
          <FaChrome />
          <span>Google</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#FF3B30] transition">
          <FaGithub />
          <span>GitHub</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
