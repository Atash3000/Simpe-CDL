import React, { useState } from 'react'
import { AppRegistry, View } from 'react-native'
import MainPage from './components/screens/MainPage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import CoursePage from './components/screens/CoursePage'
import { Provider } from 'react-redux'
import WelcomePage from './components/screens/WelcomePage'
import LoginPage from './components/screens/LoginPage'

const Stack = createNativeStackNavigator()

import QuestionPage from './components/screens/QuestionPage'
import ConfirmPage from './components/screens/ConfirmPage'
import store from './store/store'
import TestPath from './components/screens/TestPath'

function App() {
  const [registered, setRegistered] = useState(false)
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={registered ? 'Home' : 'Welcome'}
          >
            <Stack.Screen name="Welcome" component={WelcomePage} />
            <Stack.Screen name="ConfirmPage" component={ConfirmPage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Home" component={MainPage} />
            <Stack.Screen name="Question" component={QuestionPage} />
            <Stack.Screen name="Course" component={CoursePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  )
}

AppRegistry.registerComponent('Simple CDL', () => App)
export default App
