import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import MainPage from './components/screens/MainPage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import CoursePage from './components/screens/CoursePage'
import { useDispatch, useSelector } from 'react-redux'
import WelcomePage from './components/screens/WelcomePage'
import LoginPage from './components/screens/LoginPage'
import AppLoading from 'expo-app-loading'
const Stack = createNativeStackNavigator()

import QuestionPage from './components/screens/QuestionPage'
import ConfirmPage from './components/screens/ConfirmPage'

import { userLoggedInStatus } from './store/actions/userActions'
import AppNavigation from './navigation/AppNavigation'
import DrawNavigation from './navigation/DrawNavigation'

function Root() {
  const [userInfo, setUserInfo] = useState({})
  const dispatch = useDispatch()
  // console.log(userInfo)
  const userLogin = useSelector((state) => state.userLogin)
  const { error, loading, userVerificationNumber } = userLogin

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // console.log(userLogin)

  // console.log(userInfoFromServer,'userreguster')

  const getDateFromStorage = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem('userInfo')
      if (jsonValue !== null) {
        setUserInfo(JSON.parse(jsonValue))
      }
    } catch (err) {
      setUserInfo(null)
      console.log(err)
    }
  }
  useEffect(() => {
    getDateFromStorage()
  }, [])

  useEffect(() => {
    if (userInfo) {
      dispatch(userLoggedInStatus(userInfo['number']))
    }
  }, [userInfo])
  useEffect(() => {
    if (userVerificationNumber) {
      setIsLoggedIn(userVerificationNumber === userInfo['verificationCode'])
    }
  }, [userVerificationNumber])
  // console.log(userInfo, 'userinforrrrrr')

  // if (loading) {
  //   return <AppLoading />
  // }  <AppNavigation isLoggedIn={isLoggedIn} />
  //console.log(userVerificationNumber, 'vernum')
  return (
    <>
      <NavigationContainer>
        <DrawNavigation />
      </NavigationContainer>
    </>
  )
}

export default Root
