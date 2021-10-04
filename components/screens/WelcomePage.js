import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import styled from 'styled-components'
import image from '../images/truck-8.jpg'
import colors from '../helpers/colors'
import { AntDesign } from '@expo/vector-icons'
import { capitalize } from '../helpers/functions'

const WelcomePage = ({ navigation }) => {
  const skipToMainPage = () => {
    navigation.navigate('Home')
  }

  const goToLoginPage = () => {
    navigation.navigate('Login')
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <Container>
        <TouchableOpacity
          onPress={skipToMainPage}
          style={styles.btnSkip}
          activeOpacity={0.7}
        >
          <Text style={styles.skip}>skip</Text>
          <AntDesign name="arrowright" size={20} color={colors.black} />
        </TouchableOpacity>
        <LogoBox>
          <Text style={styles.simple}>{capitalize('simple')}</Text>
          <Text style={styles.cdl}>{'cdl'.toLocaleUpperCase()}</Text>
        </LogoBox>
        <View style={styles.welcomeBox}>
          <Heading>
            {capitalize('welcome')} to {'cdl'.toUpperCase()} practice test
          </Heading>
          <TouchableOpacity
            onPress={goToLoginPage}
            style={styles.button}
            activeOpacity={0.7}
          >
            <Text style={styles.text}>continue</Text>
            <AntDesign name="arrowright" size={26} color={colors.black} />
          </TouchableOpacity>
        </View>
      </Container>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // marginBottom: 30,

    padding: 12,
  },
  btnSkip: {
    position: 'absolute',
    backgroundColor: colors.whiteLight,
    top: '8%',
    right: '3%',
    paddingHorizontal: '10%',
    paddingVertical: 6,

    borderRadius: 78,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  skip: {
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 7,
    letterSpacing: 1,
    fontWeight: '500',
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
  },
  cdl: {
    color: colors.white,
    fontSize: 40,
    fontWeight: '700',
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

const WelcomeBox = styled.View``

const Heading = styled.Text`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5%;
`
export default WelcomePage
