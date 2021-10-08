import React, { Fragment, useState } from 'react'
import colors from '../helpers/colors'
import primaryImage from '../images/primary-2.png'
import { AntDesign } from '@expo/vector-icons'
import data from '../helpers/states'
import styled from 'styled-components'

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native'
import { capitalize } from '../helpers/functions'
import NavigateBack from '../utils/NavigateBack'
import Logout from '../utils/Logout'
import SafeArea from '../utils/SafeArea'
import { StatusBar } from 'expo-status-bar'

const MainPage = (props) => {
  const { navigation } = props
  const usaStates = data.map((el) => el.name).sort()
  const [states] = useState(usaStates)
  const onPressHandler = (stateName) => {
    navigation.navigate('Course', { slug: stateName })
  }
  const goBackToPrevPage = () => {
    navigation.navigate('Welcome')
  }

  return (
    <Fragment>
      <BackgroundImage source={primaryImage} resizeMode="cover">
        <SafeArea>

          <Main>
          <NavigateBack goBackToPrevPage={goBackToPrevPage} />
            <Title>{capitalize('select')} your state</Title>
            <Inner>
              <ScrollView
                contentContainerStyle={styles.contentContainer}
                centerContent={true}
              >
                {states.map((state, index) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      key={index}
                      onPress={() => onPressHandler(state)}
                      style={styles.button}
                    >
                      <View style={styles.innerButton}>
                        <AntDesign name="caretright" size={20} color="black" />
                        <StateName>{state}</StateName>
                      </View>
                    </TouchableOpacity>
                  )
                })}
              </ScrollView>
            </Inner>
          </Main>
        </SafeArea>
      </BackgroundImage>
      <StatusBar style="dark" />
    </Fragment>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 33,
    paddingVertical: 10,
  },

  button: {
    backgroundColor: colors.white,
    padding: 22,
    borderRadius: 15,
    marginBottom: '2.5%',
    width: '100%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  innerButton: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
})

const Title = styled(Text)`
  font-size: 30px;
  font-weight: 600;
  color: ${colors.blackLight};
  margin-top: 20%;
`

const StateName = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${colors.blackLight};
`
//@  background-color: red;
const Main = styled.View`
position:relative;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

const Inner = styled.View`
  height: 75%;
  width: 100%;
`

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
`
export default MainPage
