import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export const Navbar = () => {
  const openNav = () => {
    document.getElementById('myNav').style.width = '100%';
  };

  const closeNav = () => {
    document.getElementById('myNav').style.width = '0%';
  };

  return (
    <nav>
      <div id='myNav' className='overlay'>
        <span className='closebtn' onClick={closeNav}>
          &times;
        </span>

        <div className='overlay-content'>
          <Link to='/'>Home</Link>
          <Link to='/Pomodoro'>Pomodoro Timer</Link>{' '}
          <Link to='/MDEditor'>MarkDown Editor</Link>
          <Link to='/HightlightTabs'>Hightlight Tabs</Link>
          <Link to='/PaperRockScissors'>Paper Rock Scissors</Link>
        </div>
      </div>
      <span className='openbtn' onClick={openNav}>
        &equiv;
      </span>
    </nav>
  );
};
