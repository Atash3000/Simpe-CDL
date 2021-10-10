import React, { Fragment, useEffect, useState } from 'react'
import { View, Text, ImageBackground, Vibration } from 'react-native'
import styled from 'styled-components'

import primaryImage from '../images/primary-3.png'
import { data } from '../helpers/data'
import NavigateBack from '../utils/NavigateBack'
import Hamburger from '../utils/Hamburger'
import SafeArea from '../utils/SafeArea'
import { StatusBar } from 'expo-status-bar'
import UserProgressBar from '../utils/UserProgressBar'
import CardMedium from '../utils/CardMedium'
import { useSelector, useDispatch } from 'react-redux'
import { moveToNextQuestion } from '../../store/actions/userActions'

const QuestionPage = (props) => {
  const dispatch = useDispatch()
  const answerState = useSelector((state) => state.userAnswers)
  const cartState = useSelector((state) => state.questionCard)
  const { isAnswerCorrect } = answerState
  const { navigation, route } = props
  const { testName, chapter } = route.params
  const [questionsArr] = useState(() => data[testName][chapter])
  const len = questionsArr.length
  const [randomIndex, setRandomIndex] = useState(() =>
    Math.floor(Math.random() * len )
  )
  const [randomQuestion, setRandomQuestion] = useState(
    questionsArr[randomIndex]
  )
  console.log(answerState)
  const nextQuestionButton = () => {

    dispatch(moveToNextQuestion(questionsArr))
   
  }

  return (
    <Fragment>
      <BackgroundImage source={primaryImage} resizeMode="cover">
        <SafeArea>
          <Container>
            <Hamburger navigation={navigation} />
            <NavigateBack goBackToPrevPage={() => navigation.goBack()} />
            <Main>
              <Title>{testName}</Title>
              <Chapter>{chapter}</Chapter>
              <Score>
                question {randomIndex}/{len}
              </Score>
            </Main>
            <Inner>
              <CardMedium
                onPress={nextQuestionButton}
                question={randomQuestion}
              />
            </Inner>
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
  flex: 0.3;
  justify-content: center;
`

const Inner = styled(View)`
  flex: 0.7;
  padding: 0 15px;
`

const Title = styled(Text)`
  color: #fff;
  margin-bottom:10px;
  font-size:${(props) => props.theme.sizes[24]};
    font-weight :${(props) => props.theme.fontWeight[600]}
  text-transform:capitalize;
  text-align:center;

`
const Chapter = styled(Text)`
  color: #fff;
  
  font-size:${(props) => props.theme.sizes[20]};
    font-weight :${(props) => props.theme.fontWeight[600]}
  text-transform:capitalize;
  text-align:center;

`
const Score = styled(Text)`
  color: #fff;
  text-align: center;
  margin-top: 10px;
  letter-spacing: 1px;
  text-transform: capitalize;

  font-size: ${(props) => props.theme.sizes[20]};
  font-weight: ${(props) => props.theme.fontWeight[600]};
`

const StyledProggressBar = styled(UserProgressBar)`
  background-color: ${(props) => props.theme.colors.ui.white[300]};
  height: 5px;
  border-radius: 23px;
`

export default QuestionPage
