import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoMoonOutline } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { GiSplitCross } from "react-icons/gi";
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FiSun } from "react-icons/fi";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  const navRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: '-100%', opacity: 0 }, // Start from above the viewport
        { y: '0%', opacity: 1, duration: 0.3 } // Animate to the viewport position
      );
    }
  }, [open]); 

  useGSAP(() => {
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children, // Select the children of the listRef element
        { y: '50%', opacity: 0 }, // Start from above the viewport
        { y: '0%', opacity: 1, duration: 0.1, stagger: 0.3 } // Stagger each item
      );
    }
  }, [open]);

  return (
    <>
      <div className='flex justify-between items-center bg-black text-white text-xl py-3 xl:py-6 px-2 sm:px-8 lg:px-4 xl:px- overflow-hidden '>
        <Link to="/">Shrikant Rajliwal</Link>
        <HiMenuAlt2 className='lg:hidden' onClick={toggleMenu} />
        <div className=' hidden h-full   gap-4 justify-end  text-xl lg:flex'>
            <ul className=' flex flex-row gap-8 items-center xl:gap-14'>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/Education">Education and Certifications</Link></li>
              <li><Link to="/Experience">Experience</Link></li>
              <li><Link to="/Project">Projects</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
      </div>
      {open && (
                  // <div className='fixed top-0 left-0 h-screen w-full bg-black opacity-100 z-40' onClick={toggleMenu}>
        <div ref={navRef} className='bg-gray-200 fixed top-0 left-0 h-screen w-full z-40 '>
          <div className='flex justify-between items-center py-3 px-4 text-xl '>
            <Link to="/Home">Shrikant Rajliwal</Link>
            <GiSplitCross onClick={toggleMenu} />
          </div>
          <div className='h-full w-full flex flex-col font-serif gap-4 justify-center text-center items-center text-3xl'>
            <ul ref={listRef} className='space-y-4'>
            <li><Link to="/Home">Home</Link></li>
              <li><Link to="/Education">Education and Certifications</Link></li>
              <li><Link to="/Experience">Experience</Link></li>
              <li><Link to="/Project">Projects</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        // </div>
      )}
    </>
  );
};

export default Navbar;
