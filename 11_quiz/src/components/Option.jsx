import React from 'react';

import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Option.css';

export const Option = ({ option, selectedOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? 'correct' : ''
      }  ${quizState.answerSelected && option !== answer ? 'wrong' : ''}`}
      onClick={() => {
        selectedOption();
      }}
    >
      <p>{option}</p>
    </div>
  );
};
