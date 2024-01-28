import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header>
        <div>
          <img className="logo" src="https://www.vlab.andcollege.du.ac.in/images/logo.png" alt='/'/>
          <h1 className=''>V-Lab @ ANDC</h1>
        </div>
        <ul className="navigation">
          <li><a href="../../../index.html">Home</a></li>
          <li><a href="../../../index.html#labs_section">Labs</a></li>
          {/* Use target="_blank" to open in a new tab */}
          <li><Link to="/team" target="_blank" rel="noopener noreferrer">Team</Link></li>
          <li><a href="https://www.andcollege.du.ac.in/" target="_blank" rel="noopener noreferrer">College Website</a></li>
        </ul>
      </header>
    </div>
  );
}
