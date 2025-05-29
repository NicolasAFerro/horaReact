import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './Questions.css';
import { Option } from './Option';
const Questions = () => {
  //estado atual e a função para alterar o estado
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  function onSelectOption(option) {
    dispatch({
      type: 'CHECK_ANSWER',
      //envia dados:
      payload: { answer: currentQuestion.answer, option },
    });
  }
  console.log(quizState);
  return (
    <div id='question'>
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id='options-container'>
        {currentQuestion.options.map(option => (
          <Option
            option={option}
            key={option}
            selectedOption={() => onSelectOption(option)}
            answer={currentQuestion.answer}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button
          onClick={() => {
            dispatch({ type: 'CHANGE_QUESTION' });
          }}
        >
          Continuar
        </button>
      )}
    </div>
  );
};

export default Questions;
