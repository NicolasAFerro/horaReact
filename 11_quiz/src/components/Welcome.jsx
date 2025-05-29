import React from 'react';
import Quiz from '../img/quiz.svg';

import './Welcome.css';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

export const Welcome = () => {
  //estado atual e a função para alterar o estado
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='welcome'>
      <h2>Bem vindo</h2>
      <p>Clique no botão abaixo apra iniciar:</p>
      <button
        //no click eu chamo a função de mudar o estado do contexto, o change state é só um nome
        onClick={() => {
          dispatch({ type: 'CHANGE_STATE' });
        }}
      >
        Iniciar
      </button>
      <img src={Quiz} alt='inicio do quiz' />
    </div>
  );
};
