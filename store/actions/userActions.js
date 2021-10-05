import {
  USER_LOGGED_IN_FAIL,
  USER_LOGGED_IN_REQUEST,
  USER_LOGGED_IN_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from '../constants/userConstants'
import axios from 'axios'
import { storeData } from '../storage/asyncStorage'




export const createNewUser = (userNumber) => async (dispatch) => {
  dispatch({
    type: USER_SIGNUP_REQUEST,
    payload: userNumber,
  })
  try {
    const {data} = await axios.post('http://172.20.10.2:5050/api/v1/users', {
      phoneNumber: userNumber,
    })
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      number: data.data.phoneNumber,
      verificationCode:data.data.verificationNumber
    })

    await storeData('userInfo','123')
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: message,
    })
  }
}



export const userLoggedInStatus = (status,phoneNumber) =>async(dispatch)=> {
  dispatch({
    type: USER_LOGGED_IN_REQUEST,
    payload:status
  })
  try {
    const { data } = await axios.get(
      `http://172.20.10.2:5050/api/v1/users/${phoneNumber}`
    )
    dispatch({
      type: USER_LOGGED_IN_SUCCESS,
      payload:data.data
    })
  } catch (error) {
     const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: USER_LOGGED_IN_FAIL,
      payload:message
    })
  }
  
}