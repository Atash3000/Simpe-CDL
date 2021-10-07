import React from 'react'
import { SafeAreaView, Platform, StyleSheet, Dimensions } from 'react-native'

const SafeArea = (props) => {
  const android = Platform.OS === 'android';
  const largeScreen = Dimensions.get('window').height >700
  //console.log(largeScreen)
  return (
    <SafeAreaView
      style={{ flex: 1, paddingVertical: Platform.OS === 'ios' ? props.paddingVertical : 0 }}
      {...props}
    >
      {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  x: {
   

}
})


export default SafeArea
