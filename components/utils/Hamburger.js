import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
const Hamburger = ({navigation}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.toggleDrawer()}
    >
      <Entypo name="menu" size={37} color="white" />
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    top: '7%',
    right: '5%',
    zIndex:999,
    position: 'absolute',
  },
})
export default Hamburger
