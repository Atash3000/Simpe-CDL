import {
  USER_LOGGED_IN_FAIL,
  USER_LOGGED_IN_REQUEST,
  USER_LOGGED_IN_SUCCESS,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGN_IN_FAIL,
} from '../constants/userConstants'


const initState = {
  loading: false,
  error: null,
  userVerificationNumber:undefined,
  userNumber:undefined
}
export const userSigUpReducer = (state =initState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true,userNumber:action.payload,error:null}
    case USER_SIGNUP_SUCCESS:
      return { ...state,userVerificationNumber:action.verificationCode, userNumber: action.number,loading:false }
    case USER_SIGN_IN_FAIL:
      return { ...state, error: action.payload ,loading:false }
    default:
      return state
  }
}



export const userLogedInReducers = (state = {error:null,loading:false,isLoggedIn:false}, action) => {
  switch (action.type) {
    case USER_LOGGED_IN_REQUEST:
      return { ...state, loading: true,isLoggedIn:false }
    case USER_LOGGED_IN_SUCCESS:
      return { ...state, loading: false, logStatus: action.payload,isLoggedIn:true };
    case USER_LOGGED_IN_FAIL:
      return { ...state, loading: false, error: action.payload,isLoggedIn:false }
    default :return state
  }
}