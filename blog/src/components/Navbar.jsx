// import React from 'react'
// import { IoIosSearch } from "react-icons/io";
// import { IoIosExit } from "react-icons/io";



// function Navbar() {

//     const handleLogout = async () => {
//         await fetch('https://blog-country-api.onrender.com/logout', {
//             method: 'POST',
//             credentials: 'include'
//         });
//         window.location.reload();
//     };

//     return (
//         <div>
//             <div className='flex justify-center items-center p-5 gap-20'>
//                 <div className='flex justify-center items-center gap-1'>
//                     <img src='/logo.png' className='w-[40px] h-[40px]' />
//                     <p className='font-serif text-[20px] font-bold text-[#FF3B30]'>The Skytrails</p>
//                 </div>
//                 <div className='flex justify-center items-center gap-5'>
//                     <div className='flex items-center border-1 text-sm rounded-full text-[#FF3B30] pl-3'>
//                         <IoIosSearch className="text-[#FF3B30] text-xl cursor-pointer" />
//                         <input type='text' placeholder='Search your destination here' className='w-xs p-2 text-[#FF3B30] outline-0' />
//                     </div>
//                     <button onClick={handleLogout} className="p-2 text-xl text-[#FF3B30] font-semibold flex flex-row justify-center items-center gap-1"><IoIosExit /> Logout</button>
//                 </div>
//             </div>
//             <div className='flex justify-center items-center'>
//                 <svg width="740" height="1" viewBox="0 0 1172 1" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <line y1="0.5" x2="1172" y2="0.5" stroke="#404040" />
//                 </svg>
//             </div>
//         </div>
//     )
// }

// export default Navbar;

import React, { useState } from 'react';
import { IoIosSearch, IoIosExit, IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await fetch('https://blog-country-api.onrender.com/logout', {
      method: 'POST',
      credentials: 'include',
    });
    window.location.reload();
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" className="w-10 h-10" />
          <p className="font-serif text-xl font-bold text-[#FF3B30]">The Skytrails</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center border rounded-full pl-3">
            <IoIosSearch className="text-[#FF3B30] text-xl" />
            <input
              type="text"
              placeholder="Search your destination here"
              className="p-2 text-[#FF3B30] outline-none w-60"
            />
          </div>
          <button
            onClick={handleLogout}
            className="p-2 text-[#FF3B30] font-semibold flex items-center gap-1"
          >
            <IoIosExit className="text-xl" />
            Logout
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 px-6 pb-4 md:hidden">
          <div className="flex items-center border rounded-full pl-3 w-full">
            <IoIosSearch className="text-[#FF3B30] text-xl" />
            <input
              type="text"
              placeholder="Search your destination here"
              className="p-2 text-[#FF3B30] outline-none w-full"
            />
          </div>
          <button
            onClick={handleLogout}
            className="p-2 text-[#FF3B30] font-semibold flex items-center gap-1"
          >
            <IoIosExit className="text-xl" />
            Logout
          </button>
        </div>
      )}

      {/* Divider */}
      <div className="flex justify-center">
        <hr className="border-[#404040] w-full max-w-[1172px]" />
      </div>
    </div>
  );
}

export default Navbar;
