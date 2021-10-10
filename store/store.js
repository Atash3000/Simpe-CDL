import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { checkAnswerReducer, userLogedInReducers, userSigUpReducer } from './reducers/userReducers';
import { getData } from './storage/asyncStorage';



    
let res = getData('userInfo').then(response=>console.log(response))
       
const initailState = {
  userLogin: {
    selectedState: 1235,
    //userInfo: getData('userInfo'),
  },
}

const reducer = combineReducers({
  userRegister: userSigUpReducer,
  userLogin: userLogedInReducers,
  userAnswers: checkAnswerReducer,
})

const store = createStore(reducer, initailState, applyMiddleware(thunk))
export default store
