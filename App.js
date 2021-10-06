import 'react-native-gesture-handler'
import React from 'react'

import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import store from './store/store'

import { name as appName } from './app.json'
import Root from './Root'
import Logout from './components/utils/Logout'

const App = () => {
  return (
    <Provider store={store}>
    
      <Root />
    </Provider>
  )
}
AppRegistry.registerComponent(appName, () => App)
export default App
