import React from 'react'
import { View, Text, Dimensions, Platform } from 'react-native'
import styled from 'styled-components'
import colors from '../helpers/colors'
import { Entypo } from '@expo/vector-icons'

const SplashPage = () => {
  return (
    <Container>
      <Main>
        <Inner>
          <IconBox>
            <Entypo name="documents" size={24} color={colors.blackLight} />
          </IconBox>
          <Heading>simple</Heading>
          <SubText>cdl</SubText>
        </Inner>
      </Main>
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: ${colors.white};
`

const Main = styled.View`
  background-color: ${Platform.OS === 'ios'
    ? colors.primary
    : colors.primaryLight};
  height: 70%;
  justify-content: center;
  border-radius: 200px;
`

const Inner = styled.View`
  justify-content: space-around;
  align-items: center;
`

const Heading = styled.Text`
  font-size: 37px;
  text-transform: capitalize;
  font-weight: 600;
  color: ${colors.black};
  margin-bottom: 2%;
`

const IconBox = styled.View`
  transform: scale(4);
  margin-bottom: 15%;
`

const SubText = styled.Text`
  font-size: 40px;
  font-weight: 700;
  color: ${colors.black};
  text-transform: uppercase;
`

export default SplashPage
