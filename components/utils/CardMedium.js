import React, { Fragment } from 'react'
import { View, Text, Pressable } from 'react-native'
import styled from 'styled-components'

const CardMedium = ({ question }) => {
  const { title, options,id } = question
  const optionsArr = Object.values(options)
  return (
    <Container>
      <Title>{title}</Title>
      <Fragment>
        {optionsArr.map((element, index) => {
          return (
            <Pressable key={index}>
              <Main>
                <QuestionText>{element}</QuestionText>
              </Main>
            </Pressable>
          )
        })}
      </Fragment>
    </Container>
  )
}

const Container = styled(View)`
flex:0.5;
justify-content:space-around;
`
const Title = styled(Text)`
  font-size: ${(props) => props.theme.sizes[24]};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeight[600]};
  color: ${(props) => props.theme.colors.ui.black[400]};
`

const Main = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.black[400]};
  margin: 5px 0;
  border-radius: 10px;
 padding: 0 8px;
  justify-content:center;
  min-height:65px;
  box-shadow: 5px 2px 10px;
`
const QuestionText = styled(Text)`
  font-size: ${(props) => props.theme.sizes[20]};
  margin: 3px 0px;
  text-align:center;

  color: ${(props) => props.theme.colors.ui.white[600]};
`
export default CardMedium;


