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

function Root() {
  const [userInfo, setUserInfo] = useState({})
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { error, loading,userVerificationNumber} = userLogin

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (userVerificationNumber === userInfo["verificationCode"]) {
      return true
    }
    return false
  })
  console.log(userLogin)
  console.log(userInfo)
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

 // console.log(userInfo, 'userinforrrrrr')

  if (loading===true) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={isLoggedIn ? 'Home' : 'Welcome'}
      >
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="ConfirmPage" component={ConfirmPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen name="Question" component={QuestionPage} />
        <Stack.Screen name="Course" component={CoursePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root
