import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { userSigUpReducer } from './reducers/userReducers';

const initailState = {

}

const reducer = combineReducers({
  userRegister: userSigUpReducer,
})

const store = createStore(reducer, initailState, applyMiddleware(thunk))
export default store
