import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import styled from 'styled-components/native'
import image from '../images/truck-8.jpg'
import colors from '../helpers/colors'
import { AntDesign } from '@expo/vector-icons'
import { capitalize } from '../helpers/functions'

const WelcomePage = ({ navigation }) => {
  return (
    <BackgroundImage source={image} resizeMode="cover">
      <Container>
        <SkipButton
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.7}
        >
          <Text style={styles.skip}>skip</Text>
          <ArrowRight name="arrowright" />
        </SkipButton>
        <LogoBox>
          <Text style={styles.simple}>simple</Text>
          <Text style={styles.cdl}>cdl</Text>
        </LogoBox>
        <View style={styles.welcomeBox}>
          <Heading>
            {capitalize('welcome')} to {'cdl'.toUpperCase()} practice test
          </Heading>
          <ButtonContinue
            onPress={() => navigation.navigate('Login')}
            activeOpacity={0.7}
          >
            <Text style={styles.text}>continue</Text>
            <ArrowRight name="arrowright" />
          </ButtonContinue>
        </View>
      </Container>
    </BackgroundImage>
  )
}

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
`

const ArrowRight = styled(AntDesign)`
  color: ${colors.blackLight};
  font-size: 24px;
`

const ButtonContinue = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.brand.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: ${(props) => props.theme.space[12]};
`

const SkipButton = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.space[8]}
  background-color:${(props) => props.theme.colors.ui.white[100]};
  ${(props) => props.theme.space[16]};
  position: absolute;
  top: 10%;
  right: 5%;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const styles = StyleSheet.create({
  skip: {
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 7,
    letterSpacing: 1,
    fontWeight: '600',
    color: colors.blackLight,
    textTransform: 'capitalize',
  },
  text: {
    marginHorizontal: '30%',
    color: colors.black,
    fontSize: 23,
    fontWeight: '500',
    textTransform: 'capitalize',
  },

  simple: {
    color: colors.primary,
    fontSize: 35,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  cdl: {
    color: colors.white,
    fontSize: 40,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  welcomeBox: {
    backgroundColor: colors.whiteLight,
    padding: '6%',
    paddingTop: '4%',
    height: Dimensions.get('screen').height / 5,
  },
})

const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: flex-end;
`

const LogoBox = styled.View`
  position: absolute;
  top: 8%;
  left: 8%;

  border-radius: 200px;
`

const Heading = styled.Text`
  font-size: ${(props) => props.theme.sizes[20]};
  font-weight: ${(props) => props.theme.fontWeight[600]};
  text-align: center;
  margin-bottom: 5%;
`
export default WelcomePage
