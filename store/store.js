import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userLogedInReducers, userSigUpReducer } from './reducers/userReducers';
import { getData } from './storage/asyncStorage';



    

       
const initailState = {
  userRegister: {
    userDataInStorage: 555,

  },
}

const reducer = combineReducers({
  userRegister: userSigUpReducer,
  userLogin: userLogedInReducers,
})

const store = createStore(reducer, initailState, applyMiddleware(thunk))
export default store
