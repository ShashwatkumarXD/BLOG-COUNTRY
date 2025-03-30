// import React from 'react'
// import { RiArrowDownDoubleFill } from "react-icons/ri";

// function Hero() {
//     return (
//         <div>
//             <div className='h-[95%] flex flex-col items-center mb-11 py-30 px-40 gap-7'>
//                 <p className='text-4xl font-bold text-[#FF3B30]'>Where will you go next?</p>
//                 <p className="text-gray-700 text-center px-56">
//                     Embark on a journey to explore breathtaking destinations, hidden gems, and unforgettable experiences. Whether you're seeking adventure, relaxation, or cultural discoveries, this blog is your guide to making every trip extraordinary. Let’s turn your travel dreams into reality—one destination at a time!
//                 </p>
//                 <img src='/logo1.png' className='absolute top-[20%] left-[20%] rotate-45 opacity-30 w-[30%]'/>
//             </div>
//         </div>
//     )
// }

// export default Hero

import React, { useEffect, useRef } from 'react';
import { RiArrowDownDoubleFill } from 'react-icons/ri';
import gsap from 'gsap';

function Hero() {
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.to(arrowRef.current, {
      opacity: 0,
      yoyo: true,
      repeat: -1,
      duration: 0.8,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center py-16 px-4 sm:px-8 md:px-20 lg:px-40 gap-6">
      <p className="text-3xl sm:text-4xl font-bold text-[#FF3B30] text-center">
        Where will you go next?
      </p>
      <p className="text-gray-700 text-center text-sm sm:text-base md:text-lg max-w-4xl">
        Embark on a journey to explore breathtaking destinations, hidden gems, and unforgettable experiences.
        Whether you're seeking adventure, relaxation, or cultural discoveries, this blog is your guide to making
        every trip extraordinary. Let’s turn your travel dreams into reality—one destination at a time!
      </p>

      <img
        src="/logo1.png"
        className="absolute top-[20%] left-[20%] rotate-45 opacity-20 w-[40%] max-w-xs sm:max-w-md md:max-w-lg pointer-events-none"
        alt="Background Logo"
      />

      {/* Blinking arrow */}
      <div ref={arrowRef} className="text-[#FF3B30] mt-6 text-3xl sm:text-4xl animate-pulse">
        <RiArrowDownDoubleFill />
      </div>
    </div>
  );
}

export default Hero;
