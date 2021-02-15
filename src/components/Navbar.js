import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

export const Navbar = () => {
  const openNav = () => {
    document.getElementById('myNav').style.width = '100%';
    document.querySelector('.openbtn').style.display = 'none';
  };

  const closeNav = () => {
    document.getElementById('myNav').style.width = '0%';
    document.querySelector('.openbtn').style.display = 'block';
  };

  return (
    <nav>
      <div id='myNav' className='overlay'>
        <span className='closebtn' onClick={closeNav}>
          &times;
        </span>

        <div className='overlay-content'>
          <NavLink to='/' activeClassName='active-navlink'>
            Home
          </NavLink>
          <NavLink to='/Pomodoro' activeClassName='active-navlink'>
            Pomodoro Timer
          </NavLink>
          <NavLink to='/MDEditor' activeClassName='active-navlink'>
            MarkDown Editor
          </NavLink>
          <NavLink to='/HightlightTabs' activeClassName='active-navlink'>
            Hightlight Tabs
          </NavLink>
          <NavLink to='/PaperRockScissors' activeClassName='active-navlink'>
            Paper Rock Scissors
          </NavLink>
          <NavLink to='/MovingLink' activeClassName='active-navlink'>
            Moving Link
          </NavLink>
          <NavLink to='/InfiniteImageGallery' activeClassName='active-navlink'>
            Infinite Image Gallery
          </NavLink>
          <NavLink to='/TriviaGame' activeClassName='active-navlink'>
            Trivia Game
          </NavLink>
          <NavLink to='/Authentication' activeClassName='active-navlink'>
            Authentication
          </NavLink>
          <NavLink to='/WebSpeech' activeClassName='active-navlink'>
            WebSpeech
          </NavLink>
          <NavLink to='/CalendarPicker' activeClassName='active-navlink'>
            Calendar Picker
          </NavLink>
          <NavLink to='/MathCard' activeClassName='active-navlink'>
            Math Card
          </NavLink>
        </div>
      </div>
      <span className='openbtn' onClick={openNav}>
        &equiv;
      </span>
    </nav>
  );
};
