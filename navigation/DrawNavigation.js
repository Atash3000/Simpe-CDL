import 'react-native-gesture-handler'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import MainPage from '../components/screens/MainPage'

import WelcomePage from '../components/screens/WelcomePage'
import colors from '../components/helpers/colors'
import AppNavigation from './AppNavigation'
const Drawer = createDrawerNavigator()
function DrawNavigation() {
  //<Ionicons name="menu-sharp" size={24} color="black" />
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.whiteDark,
          width: '65%',
        },
        headerShown:false,
        drawerPosition: 'left',
        drawerType: 'slide',
        overlayColor: 'transparent',
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen name="MainPage" component={AppNavigation} />
      <Drawer.Screen name="HELLO" component={MainPage} />
    </Drawer.Navigator>
  )
}

export default DrawNavigation
