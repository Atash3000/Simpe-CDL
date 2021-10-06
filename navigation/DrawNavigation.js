import 'react-native-gesture-handler'
import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import MainPage from '../components/screens/MainPage'
import AppNavigation from './AppNavigation'
import WelcomePage from '../components/screens/WelcomePage'
const Drawer = createDrawerNavigator()
function DrawNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5, color: 'red' },
      }}
    >
      <Drawer.Screen
        name="ello"
        options={{ drawerLabel: 'First page Option' }}
        component={AppNavigation}
      />
      <Drawer.Screen name="HEllosss" component={WelcomePage} />
    </Drawer.Navigator>
  )
}

export default DrawNavigation
