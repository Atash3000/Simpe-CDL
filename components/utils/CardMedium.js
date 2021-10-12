import React, { Fragment, useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'

import {
  View,
  Text,
  Vibration,
  TouchableOpacity,
} from 'react-native'
import styled from 'styled-components'
import { checkUserAnswer, checkUserDesition } from '../../store/actions/userActions'
import { useSelector, useDispatch } from 'react-redux'

const CardMedium = ({ question, onPress }) => {
  const dispatch = useDispatch()
  const answerState = useSelector((state) => state.userAnswers)
  const { isAnswerCorrect, showHint, showButton, isButtonDisabled } =
    answerState
  const { title, options, id, hint, correctAnswer } = question
  const optionsArr = Object.values(options)
  const [indexOfWrongAnswer, setIndexOfWrongAnswer] = useState(-1)
  const [indexOfCorrectAnswer, setIndexOfCorrectAnswer] = useState(-1)
  const checkAnswer = (userAnswer) => {
    if (!userAnswer) {
      return
    }
    dispatch(checkUserAnswer(question, userAnswer))
    setIndexOfCorrectAnswer(optionsArr.indexOf(correctAnswer))
    setIndexOfWrongAnswer(optionsArr.indexOf(userAnswer))
  }

  useEffect(() => {
    if (isAnswerCorrect === false) {
      Vibration.vibrate(200)
    }
  }, [isAnswerCorrect])

  //
  return (
    <Container>
      <Title>{title}</Title>
      <Fragment>
        {optionsArr.map((element, index) => {
          const isCorrect = index === indexOfCorrectAnswer
          const isWrong = index === indexOfWrongAnswer
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              disabled={isButtonDisabled}
              onPress={() => checkAnswer(element)}
              key={index}
            >
              <Main style={isCorrect ? {backgroundColor:'green'} : isWrong && {backgroundColor:'red'}}>
                <QuestionText>{element}</QuestionText>
              </Main>
            </TouchableOpacity>
          )
        })}
      </Fragment>
      <Fragment>
        {showHint && (
          <HintContainer>
            <HintText>{hint}</HintText>
          </HintContainer>
        )}
      </Fragment>
      {showButton && (
        <NextButton onPress={onPress}>
          <Next>Next question</Next>
          <Caretright name="caretright" />
        </NextButton>
      )}
    </Container>
  )
}

const Container = styled(View)`
  justify-content: space-between;
`
const Title = styled(Text)`
  font-size: ${(props) => props.theme.sizes[20]};
  text-align: center;
  margin: 5px 0;

  font-weight: ${(props) => props.theme.fontWeight[600]};
  color: ${(props) => props.theme.colors.ui.black[400]};
`

const Main = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.black[400]};

  margin: 5px 0;
  border-radius: 10px;
  padding: 0 8px;
  justify-content: center;
  min-height: 65px;
  box-shadow: 1px 1px 3px;
`
const QuestionText = styled(Text)`
  font-size: ${(props) => props.theme.sizes[20]};
  margin: 3px 0px;
  text-align: center;
  color: ${(props) => props.theme.colors.ui.white[600]};
`

const HintContainer = styled(View)`
  padding: 5px 10px;
  box-shadow: 1px 1px 3px;
  align-items: center;
  margin: 5px 0;

  background-color: ${(props) => props.theme.colors.ui.white[500]};
`
const HintText = styled(Text)`
  font-size: ${(props) => props.theme.sizes[16]};
`
const NextButton = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.ui.black[200]};
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin: 5px 0;
`
const Next = styled.Text`
  font-size: 20px;

  color: ${(props) => props.theme.colors.ui.white[600]};
`
const Caretright = styled(AntDesign)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.ui.white[600]};
`
export default CardMedium
