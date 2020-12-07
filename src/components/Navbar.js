import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to='/'>Home</Link>
          <Link to='/Pomodoro'>Pomodoro Timer</Link>{' '}
          <Link to='/MDEditor'>MarkDown Editor</Link>
          <Link to='/HightlightTabs'>Hightlight Tabs</Link>
          <Link to='/PaperRockScissors'>Paper Rock Scissors</Link>
          <Link to='/MovingLink'>Moving Link</Link>
          <Link to='/InfiniteImageGallery'>Infinite Image Gallery</Link>
          <Link to='/TriviaGame'>Trivia Game</Link>
          <Link to='/Authentication'>Authentication</Link>
          <Link to='/WebSpeech'>WebSpeech</Link>
          <Link to='/CalendarPicker'>Calendar Picker</Link>
        </div>
      </div>
      <span className='openbtn' onClick={openNav}>
        &equiv;
      </span>
    </nav>
  );
};
