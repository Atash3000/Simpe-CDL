import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
const Hamburger = (props) => {
  return (
  <View  style={styles.container} >
    <Entypo name="menu" size={props.size || 24} color="black" />
  </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    top: '10%',
    right: 45,
    position: 'absolute',
  },
})
export default Hamburger
