import { USER_SIGN_IN_FAIL } from "../constants/numberConstants";
import { USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/userConstants";


const initState = {
  loading: false,
  error: null,
  userData: {},
  userNumber:''
}
export const userSigUpReducer = (state =initState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true,userNumber:action.payload }
    case USER_SIGNUP_SUCCESS:
      return { ...state, userData: action.payload,loading:false }
    case USER_SIGN_IN_FAIL:
      return { ...state, error: action.payload }
    default:
      return state
  }
}