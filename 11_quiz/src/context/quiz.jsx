import { createContext, useReducer } from 'react'; //importa do react
import questions from '../data/questions_complete';

//estados do jogo
const STAGES = ['Start', 'Category', 'Playing', 'End'];

//posso dizer qual o estado inicial, quando o cara
//entra
const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

//estado atual e ação que altera o estado
//isso aqui que vou pegar mais para a frente
const quizReducer = (state, action) => {
  /*   console.log(state, action); */
  switch (action.type) {
    case 'CHANGE_STATE':
      return { ...state, gameStage: STAGES[1] };

    case 'START_GAME': {
      let quizQuestions = null;
      state.questions.forEach(question => {
        if (question.category === action.payload) {
          quizQuestions = question.questions;
        }
      });

      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[2],
      };
    }

    case 'REORDER_QUESTIONS': {
      const reordererQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        questions: reordererQuestions,
      };
    }
    case 'CHANGE_QUESTION': {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;
      if (!questions[nextQuestion]) endGame = true;
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[3] : state.gameStage,
        answerSelected: false,
      };
    }
    case 'NEW_GAME': {
      return initialState;
    }
    case 'CHECK_ANSWER': {
      if (state.answerSelected) return state;
      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;
      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };
    }
    default:
      return state;
  }
};

export const QuizContext = createContext(); //instancia o contexto

//injeção de dependencia
//posso escolher todos os childrens ou componentes especificos
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
