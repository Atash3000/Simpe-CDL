import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { examInfoReducer } from './reducers/testReducers';
import { checkAnswerReducer, generateQuestionReducer, questionSwitcherReducer, userLogedInReducers, userSigUpReducer } from './reducers/userReducers';
import { getDateFromStorage } from './storage/asyncStorage'



    
       
const initailState = {
  // userAnswers:getDateFromStorage('correctAnswers'),
  userAnswers: {
    answerOption: {
      correctAnswers: getDateFromStorage('correctAnswers'),
      wrongAnswers: getDateFromStorage('wrongAnswers'),
    },
  },
  questionCard: {
    cart: ['123'],
  },
  examState: {
    userData:[],
  },
}

const reducer = combineReducers({
  examState:examInfoReducer,
  userRegister: userSigUpReducer,
  userLogin: userLogedInReducers,
  userAnswers: checkAnswerReducer,
  questionCard: questionSwitcherReducer,
  questionsState: generateQuestionReducer,
})

const store = createStore(reducer, initailState, applyMiddleware(thunk))
export default store
