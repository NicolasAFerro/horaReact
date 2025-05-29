import { useContext, useEffect } from 'react';
import './App.css';
import { QuizContext } from './context/quiz';

import { Welcome } from './components/Welcome';
import Questions from './components/Questions';
import GameOver from './components/GameOver';
import PickCategory from './components/PickCategory';

function App() {
  //estado atual e a função para alterar o estado
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='App'>
      <h1>quiz de programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Category' && <PickCategory />}
      {quizState.gameStage === 'Playing' && <Questions />}
      {quizState.gameStage === 'End' && <GameOver />}
    </div>
  );
}

export default App;
