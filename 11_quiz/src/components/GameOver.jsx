import React from 'react';
import { QuizContext } from '../context/quiz';
import { useContext } from 'react';
import './GameOver.css';

import WellDone from '../img/welldone.svg';

const GameOver = () => {
  //estado atual e a função para alterar o estado
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id='gameover'>
      <h2>Fim de Jogo!</h2>
      <p>Pontuação:{quizState.score} </p>
      <p>
        Você Acertou {quizState.score} de {quizState.questions.length} perguntas
      </p>
      <img src={WellDone} alt='' />
      <button
        onClick={() => {
          dispatch({ type: 'NEW_GAME' });
        }}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default GameOver;
