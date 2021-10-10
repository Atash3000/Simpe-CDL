import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { checkAnswerReducer, questionSwitcherReducer, userLogedInReducers, userSigUpReducer } from './reducers/userReducers';
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
}

const reducer = combineReducers({
  userRegister: userSigUpReducer,
  userLogin: userLogedInReducers,
  userAnswers: checkAnswerReducer,
  questionCard: questionSwitcherReducer,
})

const store = createStore(reducer, initailState, applyMiddleware(thunk))
export default store
