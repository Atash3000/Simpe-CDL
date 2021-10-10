import {
  ON_CURRENT_QUESTION,
  ON_NEXT_QUESTION,
  USER_ANSWER_CORRECT,
  USER_ANSWER_REQUEST,
  USER_ANSWER_RESET,
  USER_ANSWER_WRONG,
  USER_LOGGED_IN_FAIL,
  USER_LOGGED_IN_REQUEST,
  USER_LOGGED_IN_SUCCESS,
  USER_LOG_OUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGN_IN_FAIL,
} from '../constants/userConstants'
import { storeData } from '../storage/asyncStorage'

const initState = {
  loading: false,
  error: null,
  userVerificationNumber: '',
  userNumber: '',
}
export const userSigUpReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        userNumber: action.payload,
        error: null,
      }
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        userVerificationNumber: action.verificationCode,
        userNumber: action.number,
        loading: false,
      }
    case USER_SIGN_IN_FAIL:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

const initState2 = {
  loading: false,
  error: null,
  userVerificationNumber: '',
  userNumber: '',
}
export const userLogedInReducers = (state = initState2, action) => {
  switch (action.type) {
    case USER_LOGGED_IN_REQUEST:
      return { ...state, loading: true }
    case USER_LOGGED_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        userNumber: action.phoneNumber,
        userVerificationNumber: action.verificationCode,
      }
    case USER_LOGGED_IN_FAIL:
      return { ...state, error: action.payload }
    case USER_LOG_OUT:
      return {}
    default:
      return state
  }
}

export const checkAnswerReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ANSWER_REQUEST:
      return {}
    case USER_ANSWER_CORRECT:
      const { answer, question } = action.payload
      const { id, correctAnswer } = question
      const isAnswerCorrect = answer === correctAnswer

      if (isAnswerCorrect) {
      }
      return {
       
        isAnswerCorrect: isAnswerCorrect,
        showHint: true,
        showButton: true,
        isButtonDisabled: true,
        questionId: id,
      }

    case USER_ANSWER_WRONG:
      const { answer: userAnswer, question: givenQuestion } = action.payload

      const isAnswerWrong = userAnswer !== givenQuestion.correctAnswer

      return {
       
        isAnswerCorrect: !isAnswerWrong,
        showHint: true,
        showButton: true,
        isButtonDisabled: true,
        questionId: givenQuestion.id,
      }

    default:
      return state
  }
}

export const questionSwitcherReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case ON_CURRENT_QUESTION:
      const up = (state.cart[0] = 777)
      //console.log(state.cart,'stateteeeeeee')
      return { ...state, key: '999' }
    default:
      return state
    //       const len = questionsArr.length;
    // const [randomIndex,setRandomIndex] = useState(()=> Math.floor(Math.random() * len+1))
  }
}
