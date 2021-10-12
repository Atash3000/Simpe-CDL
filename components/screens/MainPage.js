import React, { Fragment, useState, useRef } from 'react'
import colors from '../helpers/colors'
import primaryImage from '../images/primary-3.png'
import { AntDesign } from '@expo/vector-icons'
import data from '../helpers/states'
import styled from 'styled-components'

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { capitalize } from '../helpers/functions'
import NavigateBack from '../utils/NavigateBack'
import SafeArea from '../utils/SafeArea'
import { StatusBar } from 'expo-status-bar'
import { useDispatch } from 'react-redux'
import { SAVE_EXAM_STATE } from '../../store/constants/testConstants'
import { saveExamInfo } from '../../store/actions/testActions'

const MainPage = (props) => {
  const dispatch = useDispatch()
  const screenHeight = Dimensions.get('screen').height
  const { navigation } = props
  const usaStates = data.map((el) => el.name).sort()
  const [states] = useState(usaStates)
  const onPressHandler = (stateName) => {
    //  dispatch({ type: SAVE_EXAM_STATE, payload: stateName })
    // dispatch(saveExamInfo(stateName))
    navigation.navigate('Course', { slug: stateName })
  }
  const goBackToPrevPage = () => {
    navigation.navigate('Welcome')
  }

  return (
    <Fragment>
      <BackgroundImage source={primaryImage} resizeMode="cover">
        <SafeArea>
          <Container>
            <NavigateBack goBackToPrevPage={goBackToPrevPage} />
            <Title>{capitalize('select')} your state</Title>

            <StyledScrollView
              centerContent={true}
              contentContainerStyle={{ padding: 20 }}
            >
              {states.map((state, index) => {
                return (
                  <ScrollButton
                    activeOpacity={0.9}
                    key={index}
                    screenHeight={screenHeight}
                    onPress={() => onPressHandler(state)}
                  >
                    <StateName>{state}</StateName>
                    <AntDesign name="caretright" size={20} color="black" />
                  </ScrollButton>
                )
              })}
            </StyledScrollView>
          </Container>
        </SafeArea>
      </BackgroundImage>
      <StatusBar style="light" />
    </Fragment>
  )
}

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
`
const Container = styled.View`
  position: relative;
  flex: 1;
  justify-content: space-between;
`

const Title = styled(Text)`
  font-size: ${(props) => props.theme.sizes[28]};
  color: ${(props) => props.theme.colors.ui.white[300]};
  font-family: ${(props) => props.theme.fonts.body.semiBold};
  font-weight: ${(props) => props.theme.fontWeight[600]};
  margin-top: 20%;
  text-align: center;
`

const StyledScrollView = styled(ScrollView)`
  flex: 0.8;
`

const ScrollButton = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.responsive(props, 26, 0)};
  margin: ${(props) => props.theme.space[5]};
  background-color: ${(props) => props.theme.colors.ui.white[200]};
  border-radius: ${(props) => props.theme.space[15]};
  display: flex;
  box-shadow: 2px 3px 3px black;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const StateName = styled(Text)`
  font-size: ${(props) => props.theme.responsive(props, 20, 1)};
  color: ${(props) => props.theme.colors.ui.black[100]}};
  font-weight: 700;
  text-transform: capitalize;
`

export default MainPage
