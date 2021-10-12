import {
  USER_LOGGED_IN_FAIL,
  USER_LOGGED_IN_REQUEST,
  USER_LOGGED_IN_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_LOG_OUT,
  USER_ANSWER_CORRECT,
  USER_ANSWER_WRONG,
  USER_ANSWER_REQUEST,
  USER_ANSWER_RESET,
  ON_NEXT_QUESTION,
  ON_CURRENT_QUESTION,
  ON_QUESTION_SUCCESS,
  ON_QUESTION_FAIL,
  ON_QUESTION_RESET,
} from '../constants/userConstants'
import axios from 'axios'
import { storeData } from '../storage/asyncStorage'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const createNewUser = (userNumber) => async (dispatch) => {
  dispatch({
    type: USER_SIGNUP_REQUEST,
    payload: userNumber,
  })
  try {
    const { data } = await axios.post('http://172.20.10.2:5050/api/v1/users', {
      phoneNumber: userNumber,
    })
    const number = data.data.phoneNumber
    const verificationCode = data.data.verificationNumber
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      number: number,
      verificationCode: verificationCode,
    })

    await storeData('userInfo', { number, verificationCode })
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

export const userLoggedInStatus = (phoneNumber) => async (dispatch) => {
  dispatch({
    type: USER_LOGGED_IN_REQUEST,
    payload: phoneNumber,
  })
  try {
    const { data } = await axios.get(
      `http://172.20.10.2:5050/api/v1/users/${phoneNumber}`
    )
    dispatch({
      type: USER_LOGGED_IN_SUCCESS,
      phoneNumber: data.data.user.phoneNumber,
      verificationCode: data.data.user.verificationNumber,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message

    dispatch({
      type: USER_LOGGED_IN_FAIL,
      payload: message,
    })
  }
}

export const logout = () => async (dispatch) => {
  await AsyncStorage.removeItem('userInfo')
  dispatch({
    type: USER_LOG_OUT,
    payload: {},
  })
}

export const checkUserAnswer =
  (question, answer, Vibration) =>
   (dispatch, getState) => {
    // dispatch({
    //   type: USER_ANSWER_REQUEST,
    //   payload: {},
    // })
    
      dispatch({
        type: USER_ANSWER_CORRECT,
        payload: { question, answer },
      })
    //  await storeData('correctAnswers',question.id)

   
      dispatch({
        type: USER_ANSWER_WRONG,
        payload: { question, answer,Vibration },
      })
      //Vibration.vibrate(2000)

     // await storeData('wrongAnswers', question.id)
 

   // console.log(getState().userAnswers.correctAnswers, 'get State functons')
    // await AsyncStorage.removeItem('correctAnswers')
    // await AsyncStorage.removeItem('wrongAnswers')
  }



export const moveToNextQuestion = (questionsArr) => (dispatch, getState) => {
  dispatch({
    type: ON_CURRENT_QUESTION,
    payload: questionsArr,
  })
  dispatch({
    type: ON_NEXT_QUESTION,
    payload: questionsArr,
  })
}


export const generateQuestion = (questionsArr) => (dispatch) => {
  dispatch({
    type: "ON_CURRENT_QUESTION",
    payload: questionsArr
  })

  dispatch({
    type: "ON_NEXT_QUESTION",
    payload: questionsArr
  })
};


export const checkUserDesition= (questionsArr, userAnswer) => (dispatch) => {
  dispatch({
    type: ON_QUESTION_SUCCESS,
    payload: { questionsArr, userAnswer }
  });
  dispatch({
    type: ON_QUESTION_FAIL,
    payload: { questionsArr, userAnswer },
  })
  dispatch({
    type: ON_QUESTION_RESET,
    payload:{}
  })
}