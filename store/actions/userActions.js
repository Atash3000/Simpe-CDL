import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from '../constants/userConstants'
import axios from 'axios'
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
      payload: data.data,
    })
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
