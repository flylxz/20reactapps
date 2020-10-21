import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import { Navbar } from './components/Navbar';

import { Pomodoro } from './apps/a01-pomodoro/Pomodoro';
import { MDEditor } from './apps/a02-editor/MDEditor';
import { HightlightTabs } from './apps/a03-highlight-tabs/HightlightTabs';
import { PaperRockScissors } from './apps/a04-paper-rock-scissors/PaperRockScissors';

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
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}
