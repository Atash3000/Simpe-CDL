import React, { Fragment } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StatusBar,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

import primaryImage from '../images/primary-2.png'
const TestPath = () => {
  return (
    <Fragment>
      <BackgroundImage source={primaryImage} resizeMode="cover">
        <SafeArea>
          <Container>
            <Text>jkdfkj</Text>
          </Container>
        </SafeArea>
      </BackgroundImage>
      <StatusBar barStyle="default" translucent={true} />
    </Fragment>
  )
}

const Container = styled(View)`
  flex: 1;
 
`
const BackgroundImage = styled(ImageBackground)`
  flex: 1;
`

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`
export default TestPath
