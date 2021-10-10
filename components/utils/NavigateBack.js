import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import colors from '../helpers/colors'

let smallScreen = Dimensions.get('screen').height < 750

const NavigateBack = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.goBackToPrevPage}
      style={styles.iconBox}
    >
      <View style={styles.iconInner}>
        <AntDesign name="left" size={30} color={colors.white} />
        <Text style={styles.iconText}>back</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconBox: {
    position: 'absolute',

    top: smallScreen ? '1.5%' : '3%',
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
    color: colors.white,

    textTransform: 'capitalize',
  },
})

export default NavigateBack
