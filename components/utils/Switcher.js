import React, { useState } from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
import { View, StyleSheet } from 'react-native'
import colors from '../helpers/colors'
export default function Switcher() {
  const [status, setStatus] = useState(false)

  const toogleHandler = () => {
    setStatus(!status)
  }

  return (
    <View style={styles.container}>
      <ToggleSwitch
        isOn={status}
        onColor="green"
        offColor="red"
        label={status ? 'light mode' : 'dark mode'}
        labelStyle={{ color: colors.white, fontWeight: '900' }}
        size="large"
        onToggle={toogleHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '8%',
    right: '8%',
  },
})
