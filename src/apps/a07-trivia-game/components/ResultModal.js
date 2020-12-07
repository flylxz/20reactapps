import React from 'react';
import { InsertEmoji } from './Emoji';

export const ResultModal = ({ isCorrect, question, getQuestion }) => {
  return (
    <div className={`result-modal ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
      <div className='overlay' />
      <div className='result-modal-content'>
        {isCorrect && (
          <h3>
            <InsertEmoji symbol='👊👊👊' label='won' />
            <br />
            YOU WON!
          </h3>
        )}

        {!isCorrect && (
          <h3>
            <InsertEmoji symbol='😟😢😟' label='lost' />
            <br />
            YOU LOST!
          </h3>
        )}

        {!isCorrect && (
          <div className='correct-answer'>
            <small>The correct answer was:</small>
            <br />
            <strong
              dangerouslySetInnerHTML={{ __html: question.correct_answer }}
            ></strong>
          </div>
        )}

        <button onClick={getQuestion}>
          Go to next question <InsertEmoji symbol='👉' label='next' />
        </button>
      </div>
    </div>
  );
};
