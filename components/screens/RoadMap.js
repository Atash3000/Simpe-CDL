import React, { Fragment } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styled from 'styled-components'
import primaryImage from '../images/primary-4.png'
import { data } from '../helpers/data'
import NavigateBack from '../utils/NavigateBack'
import Hamburger from '../utils/Hamburger'
import SafeArea from '../utils/SafeArea'
import { StatusBar } from 'expo-status-bar'
import UserProgressBar from '../utils/UserProgressBar'
import MiniCard from '../utils/MiniCard'
import { useDispatch, useSelector } from 'react-redux'
import { USER_ANSWER_REQUEST } from '../../store/constants/userConstants'

const RoadMap = (props) => {
 
  const { navigation, route } = props
  const { testName } = route.params
  const dispatch = useDispatch()
  const testSection = data[testName]
  const questinsLength = Object.keys(testSection).length + 1
  const chapters = Object.keys(data[testName])

  const pressHadler = (val) => {
    // we dispatch to cleanup state of users answer s
  dispatch({ type: USER_ANSWER_REQUEST })
    navigation.navigate('Question', {
      testName: testName,
      chapter: val,
    })
  }
  const perChapter = chapters.map((element) => (
    <MiniCard
      key={element}
      chapter={element}
      onPress={() => pressHadler(element)}
    />
  ))

  return (
    <Fragment>
      <BackgroundImage source={primaryImage} resizeMode="cover">
        <SafeArea>
          <Container>
            <Hamburger navigation={navigation} />
            <NavigateBack goBackToPrevPage={() => navigation.goBack()} />
            <Main>
              <Title>{testName}</Title>
              <StyledProggressBar color={'white'} />
              <Info>
                <InfoText>Total {questinsLength}</InfoText>
                <InfoText>Mistakes 0</InfoText>
                <InfoText>Mastered 12</InfoText>
              </Info>
            </Main>

            <Inner>{perChapter}</Inner>
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
  flex: 1;
  position: relative;
`

const Main = styled(View)`
  height: 35%;
  justify-content: center;
  padding: 0 25px;
  padding-top: 0px;
`

const Info = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  padding: ${(props) => props.theme.space[12]};
`

const InfoText = styled(Text)`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.ui.white[300]};
  font-size: ${(props) => props.theme.sizes[16]};
  font-weight: ${(props) => props.theme.fontWeight[500]};
  padding: ${(props) => props.theme.space[4]};
`

const Inner = styled(View)`
  height: 65%;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 20px 40px 0 40px;
`

const Title = styled(Text)`
  color: ${(props) => props.theme.colors.ui.white[500]};
  font-size:${(props) => props.theme.sizes[28]};
  font-weight :${(props) => props.theme.fontWeight[600]}
  text-transform:capitalize;
  text-align:center;

`

const StyledProggressBar = styled(UserProgressBar)`
  background-color: ${(props) => props.theme.colors.ui.black[100]};
  height: 3px;
  border-radius: ${(props) => props.theme.space[24]};
`

export default RoadMap
