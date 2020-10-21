import React, { useState, useEffect } from 'react';

import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';

import './PaperRockScissors.scss';

const choices = [
  { id: 1, name: 'rock', component: Rock, losesTo: 2 },
  { id: 2, name: 'paper', component: Paper, losesTo: 3 },
  { id: 3, name: 'scissors', component: Scissors, losesTo: 1 },
];

export const PaperRockScissors = () => {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null); // win, lose, draw

  useEffect(() => {
    const randomChioce = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChioce);
  }, [gameState]);

  const restartGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setGameState(null);
  };

  const handleUserChoice = (choice) => {
    const choosenChoice = choices.find((c) => c.id === choice);
    setUserChoice(choosenChoice);

    if (choosenChoice.losesTo === computerChoice.id) {
      setLosses((losses) => losses + 1);
      setGameState('lose');
    } else if (computerChoice.losesTo === choosenChoice.id) {
      setWins((wins) => wins + 1);
      setGameState('win');
    } else if (computerChoice.id === choosenChoice.id) {
      setGameState('draw');
    }
  };

  const renderComponent = (choice) => {
    const Component = choice.component; // paper, rock ,scissor
    return <Component />;
  };

  return (
    <div className='papper-rock-scissors-app'>
      {/* information goes here */}
      <div className='info'>
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className='wins-losses'>
          <div className='wins'>
            <span className='number'>{wins}</span>
            <span className='text'>{wins === 1 ? 'Win' : 'Wins'}</span>
          </div>

          <div className='losses'>
            <span className='number'>{losses}</span>
            <span className='text'>{losses === 1 ? 'Loss' : 'Losses'}</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      {gameState && (
        <div className={`game-state ${gameState}`} onClick={restartGame}>
          <div>
            <div className='game-state-content'>
              <p>{renderComponent(userChoice)}</p>
              {/* <p>You {gameState}!</p> */}
              {gameState === 'win' && <p>Congrats! You won!</p>}
              {gameState === 'lose' && <p>Sorry! You lost!</p>}
              {gameState === 'draw' && <p>You drew!</p>}
              <p>{renderComponent(computerChoice)}</p>
            </div>
            <button>Play Again</button>
          </div>
        </div>
      )}

      <div className='choices'>
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className='rock' onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className='paper' onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className='scissors' onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className='vs'>vs</div>

        {/* show the computer's choice */}
        <div>
          <button className='computer-choice'>?</button>
        </div>
      </div>
    </div>
  );
};
