'use client';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setisVisible] = useState(false);

  // show and hide functionality
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setisVisible(true);
      } else {
        setisVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // scroll functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      {isVisible && (
        <button
          className='bg-blue-700 cursor-pointer w-12 h-12 text-white p-2 rounded-full flex items-center justify-center focus:outline-none '
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
