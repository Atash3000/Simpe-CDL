import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Pressable } from 'react-native'
import styled from 'styled-components'
import { ProgressBar, Colors } from 'react-native-paper'
import UserProgressBar from './UserProgressBar'

const CourseItem = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Card>
        <Title>{props.title}</Title>

        <StyledProgressBar color={'#fff'} />
      </Card>
    </Pressable>
  )
}

const Card = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.black[400]};
  padding: ${(props) => props.theme.responsive(props, 10, 1)}
    ${(props) => props.theme.responsive(props, 20, 1)};
  border-radius: 12px;
  box-shadow: 3px 4px 2px black;
  margin-bottom: ${(props) => props.theme.responsive(props, 10, 1)};
`

const Title = styled(Text)`
  font-size: 20px;
  text-align: left;
  margin: 5px 0;
  color: #fff;
  text-transform: capitalize;
`



const StyledProgressBar = styled(UserProgressBar)`
  height: 3px;
  margin: 5px 0;
  background-color:${props=>props.theme.colors.ui.black[100]} ;
`

export default CourseItem
