import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header className='h-24 '>
        <div className=''>
          <img className="logo" src="https://www.vlab.andcollege.du.ac.in/images/logo.png" alt='/'/>
          <h1 className='md:text-3xl font-bold font-Poppins'>V-Lab @ ANDC</h1>
        </div>
        <ul className="navigation font-Poppins  font-bold">
          <li><a href="../../../index.html"><span className='text-sm md:text-2xl'>Home</span></a></li>
          <li><a href="../../../index.html#labs_section"><span className='text-sm md:text-2xl'>Labs</span></a></li>
          {/* Use target="_blank" to open in a new tab */}
          <li><Link to="/team" target="_blank" rel="noopener noreferrer"><span className='text-sm md:text-2xl'>Team</span></Link></li>
          <li><a href="https://www.andcollege.du.ac.in/" target="_blank" rel="noopener noreferrer"><span className='text-xs md:text-2xl'>College Website</span></a></li>
        </ul>
      </header>
    </div>
  );
}
