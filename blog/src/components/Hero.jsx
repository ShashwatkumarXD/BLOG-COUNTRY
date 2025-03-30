import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Hero() {
    return (
        <div>
            <div className='h-[95%] flex flex-col items-center mb-11 py-30 px-40 gap-7'>
                <p className='text-4xl font-bold text-[#FF3B30]'>Where will you go next?</p>
                <p className="text-gray-700 text-center px-56">
                    Embark on a journey to explore breathtaking destinations, hidden gems, and unforgettable experiences. Whether you're seeking adventure, relaxation, or cultural discoveries, this blog is your guide to making every trip extraordinary. Let’s turn your travel dreams into reality—one destination at a time!
                </p>
                <img src='/logo1.png' className='absolute top-[20%] left-[20%] rotate-45 opacity-30 w-[30%]'/>
            </div>
        </div>
    )
}

export default Hero