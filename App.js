import 'react-native-gesture-handler'
import React from 'react'

import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import store from './store/store'

import { name as appName } from './app.json'
import Root from './Root'
import Logout from './components/utils/Logout'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/infastructure/theme'
import {
  useFonts as useMontserrat,
  Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading'

const App = () => {
  const [montserratLoaded] = useMontserrat({
    Montserrat_100Thin,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_900Black,
  })

  if (!montserratLoaded) {
   return  <AppLoading/>
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </Provider>
  )
}
AppRegistry.registerComponent(appName, () => App)
export default App
