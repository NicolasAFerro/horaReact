import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Category from '../img/category.svg';

import './PickCategory.css';

export default function PickCategory() {
  //estado atual e a função para alterar o estado
  const [quizState, dispatch] = useContext(QuizContext);
  const chooseCategoryAndReorderQuestions = category => {
    dispatch({ type: 'START_GAME', payload: category });
    dispatch({ type: 'REORDER_QUESTIONS' });
  };
  return (
    <div id='category'>
      <h2>Escolha uma categoria</h2>
      <p>perguntas serão referentes a uma das linguagens abaixo</p>
      <div>
        {quizState.questions.map(question => (
          <button
            onClick={() => {
              chooseCategoryAndReorderQuestions(question.category);
            }}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>

      <img src={Category} alt='' />
    </div>
  );
}
