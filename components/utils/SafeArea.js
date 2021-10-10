import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import styled from 'styled-components'

const UniversalSafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`

const SafeArea = (props) => {
  return <UniversalSafeArea>{props.children}</UniversalSafeArea>
}

export default SafeArea
