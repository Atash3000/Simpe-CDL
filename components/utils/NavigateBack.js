import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import colors from '../helpers/colors'



const NavigateBack = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.goBackToPrevPage}
      style={styles.iconBox}
    >
      <View style={styles.iconInner}>
        <AntDesign name="left" size={37} color={props.color || colors.white} />
        <Text style={ [styles.iconText,props.color]}>back</Text>
      </View>
    </TouchableOpacity>
  )
};



const styles = StyleSheet.create({
  iconBox: {
    position: 'absolute',
    top: '7%',
    zIndex: 999,
    left: 10,
  },
  iconInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 22,
    fontWeight: '500',
    color:colors.white,
 
    textTransform: 'capitalize',
  },
})

export default NavigateBack
