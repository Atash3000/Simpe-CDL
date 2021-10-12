import { SAVE_EXAM_STATE, SAVE_EXAM_TYPE } from '../constants/testConstants'

export const examInfoReducer = (state = { userData: [] }, action) => {
  switch (action.type) {
    case SAVE_EXAM_STATE:
      const selectedState = action.payload
    
      const obj = {
        state: action.payload,
      }
     

     
      return { ...state, userData:[...state.userData,obj] }
    case SAVE_EXAM_TYPE:
      
      const obj1 = {
      exam:action.payload
      }
      const target = Object.assign(obj1,state.userData[0])
     
      return { ...state, userData: [target] }
    default:
      return state
  }
}
