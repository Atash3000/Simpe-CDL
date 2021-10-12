import React, { Fragment } from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import styled from 'styled-components/native'
import image from '../images/logo.png'
import colors from '../helpers/colors'
import { AntDesign } from '@expo/vector-icons'
import { capitalize } from '../helpers/functions'
import { useSelector } from 'react-redux'
import SafeArea from '../utils/SafeArea'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

const WelcomePage = ({ navigation }) => {
  return (
    <Fragment>
      <BackgroundImage source={image} resizeMode="cover">
        <Container>
          <SkipButton
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.7}
          >
            <SkipText>skip</SkipText>
            <ArrowRight name="arrowright" />
          </SkipButton>
          <LogoContainer>
            <LogoTextLarge>simple</LogoTextLarge>
            <LogotextMedium>cdl</LogotextMedium>
          </LogoContainer>
          <WelcomeContainer>
            <Heading>
              {capitalize('welcome')} to {'CDL'.toUpperCase()} practice test
            </Heading>
            <ButtonContinue
              onPress={() => navigation.navigate('Login')}
              activeOpacity={0.7}
            >
              <TextContinue>continue</TextContinue>
              <ArrowRight name="arrowright" />
            </ButtonContinue>
          </WelcomeContainer>
        </Container>
      </BackgroundImage>
      <StatusBar style="light" />
    </Fragment>
  )
}

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
`

const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: flex-end;
`

const LogoContainer = styled.View`
  position: absolute;
  top:8%;
  left: 8%
  border-radius: 200px;
`

const LogoTextLarge = styled(Text)`
 color: ${(props) => props.theme.colors.brand.primary};
    font-size: ${(props) => props.theme.sizes[36]};
    font-weight: ${(props) => props.theme.fontWeight[700]},
    text-transform: capitalize;
`

const LogotextMedium = styled(LogoTextLarge)`
  font-size: ${(props) => props.theme.sizes[32]};
  color: ${(props) => props.theme.colors.ui.white[300]};
  text-transform: uppercase;
`

const SkipButton = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.space[8]}
    ${(props) => props.theme.space[20]};
  background-color: ${(props) => props.theme.colors.ui.white[100]};
  ${(props) => props.theme.space[16]};
  position: absolute;
  top: 9%;
  right: 5%;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const SkipText = styled(Text)`
text-align:center;
font-size:${(props) => props.theme.sizes[16]};
letter-spacing:1px;
font-weight:${(props) => props.theme.fontWeight[600]}
 font-family: ${(props) => props.theme.fonts.body.semiBold};
 color:${(props) => props.theme.colors.ui.black[400]};
 text-transform:capitalize;
`

const WelcomeContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.white[400]};
  padding: 6%;
  padding-top: 4%;
`

const Heading = styled.Text`
  font-family: ${(props) => props.theme.fonts.body.semiBold};
  font-size: ${(props) => props.theme.sizes[20]};
  font-weight: ${(props) => props.theme.fontWeight[600]};
  text-align: center;
  margin-bottom: 5%;
`

const ButtonContinue = styled(TouchableOpacity)`
  width: 100%;
  padding: ${(props) => props.theme.space[16]}
    ${(props) => props.theme.space[12]};
  background-color: ${(props) => props.theme.colors.brand.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const TextContinue = styled(Text)`
font-weight:${(props) => props.theme.fontWeight[600]}
font-family: ${(props) => props.theme.fonts.body.semiBold};
color:${(props) => props.theme.colors.ui.black[600]};
font-size:${(props) => props.theme.sizes[20]};
text-transform: capitalize;
margin: auto;
`

const ArrowRight = styled(AntDesign)`
  color: ${colors.blackLight};
  font-size: 24px;
`

export default WelcomePage
