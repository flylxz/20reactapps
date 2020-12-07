import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import { Navbar } from './components/Navbar';

import { Pomodoro } from './apps/a01-pomodoro/Pomodoro';
import { MDEditor } from './apps/a02-editor/MDEditor';
import { HightlightTabs } from './apps/a03-highlight-tabs/HightlightTabs';
import { PaperRockScissors } from './apps/a04-paper-rock-scissors/PaperRockScissors';
import { MovingLink } from './apps/a05-moving-link/MovingLink';
import { InfiniteImageGallery } from './apps/a06-infinite-image-gallery/InfiniteImageGallery';
import { TriviaGame } from './apps/a07-trivia-game/TriviaGame';
import { Authentication } from './apps/a08-authentication';
import { WebSpeech } from './apps/a09-web-speech-and-timers/WebSpeech';
import { CalendarPicker } from './apps/a10-calendar-picker/CalendarPicker';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Pomodoro' component={Pomodoro} />
        <Route path='/MDEditor' component={MDEditor} />
        <Route path='/HightlightTabs' component={HightlightTabs} />
        <Route path='/PaperRockScissors' component={PaperRockScissors} />
        <Route path='/MovingLink' component={MovingLink} />
        <Route path='/InfiniteImageGallery' component={InfiniteImageGallery} />
        <Route path='/TriviaGame' component={TriviaGame} />
        <Route path='/Authentication' component={Authentication} />
        <Route path='/WebSpeech' component={WebSpeech} />
        <Route path='/CalendarPicker' component={CalendarPicker} />
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}
