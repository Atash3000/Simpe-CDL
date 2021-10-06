import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomePage from '../components/screens/WelcomePage'
import ConfirmPage from '../components/screens/ConfirmPage'
import LoginPage from '../components/screens/LoginPage'
import MainPage from '../components/screens/MainPage'
import QuestionPage from '../components/screens/QuestionPage'
import CoursePage from '../components/screens/CoursePage'
const Stack = createNativeStackNavigator()

function AppNavigation(props) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={props.isLoggedIn ? 'Home' : 'Welcome'}
    >
  
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="Question" component={QuestionPage} />
      <Stack.Screen name="Course" component={CoursePage} />

      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="ConfirmPage" component={ConfirmPage} />
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  )
}

export default AppNavigation
