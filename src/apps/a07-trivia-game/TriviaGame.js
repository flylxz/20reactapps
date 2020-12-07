import React, { useState } from 'react';

import { Question } from './components/Question';
import { CategorySelector } from './components/CategorySelector';
import { ResultModal } from './components/ResultModal';
import { Scoreboard } from './components/Scoreboard';
import { InsertEmoji } from './components/Emoji';

import { useTrivia } from './useTrivia';

import './TriviaGame.scss';

export const TriviaGame = () => {
  const { question, getQuestion, category, setCategory } = useTrivia();

  const [isCorrect, setIsCorrect] = useState(null);

  // to useTrivia
  // const [question, setQuestion] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState('any');

  // const getQuestion = useCallback(() => {
  //   setIsCorrect(null);

  //   let url = `https://opentdb.com/api.php?amount=1`;
  //   if (selectedCategory !== 'any') {
  //     url += `&category=${selectedCategory}`;
  //   }

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setQuestion(data.results[0]));
  // }, [selectedCategory]);

  // useEffect(() => {
  //   getQuestion();
  // }, [getQuestion, selectedCategory]);

  const handleQuestionAnswered = (answer) => {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  };

  const handleNextQuestion = () => {
    setIsCorrect(null);
    getQuestion();
  };

  return (
    <div className='trivia-app-wrapper'>
      <div className='app'>
        {/* show the result modal ----------------------- */}
        {isCorrect !== null && (
          <ResultModal
            isCorrect={isCorrect}
            question={question}
            getQuestion={handleNextQuestion}
          />
        )}

        {/* question header ----------------------- */}
        <div className='question-header'>
          <CategorySelector category={category} chooseCategory={setCategory} />
          <Scoreboard isCorrect={isCorrect} />
        </div>

        {/* the question itself ----------------------- */}
        <div className='question-main'>
          {question && (
            <Question
              question={question}
              answerQuestion={handleQuestionAnswered}
            />
          )}
        </div>

        {/* question footer ----------------------- */}
        <div className='question-footer'>
          <button onClick={handleNextQuestion}>
            Go to next question <InsertEmoji symbol='👉' label='next' />
          </button>
        </div>
      </div>
    </div>
  );
};
