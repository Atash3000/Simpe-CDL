import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Pressable } from 'react-native'
import styled from 'styled-components'
import { ProgressBar, Colors } from 'react-native-paper'

const CourseItem = (props) => {
  const [progres, setProgres] = useState(0)
  return (
    <Pressable onPress={props.onPress}>
      <Card>
        <Title>{props.title}</Title>
        <ProgressStatus>{progres}%</ProgressStatus>
        <Progress color={'#fff'} progress={progres} />
      </Card>
    </Pressable>
  )
}

const Card = styled(View)`
  background-color: ${(props) => props.theme.colors.ui.black[600]};
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 4px black;
  margin: 5px 0;
`

const Title = styled(Text)`
  font-size: 20px;
  text-align: left;
  margin: 5px 0;
  color: #fff;
  text-transform: capitalize;
`

const ProgressStatus = styled(Text)`
  color: white;
  margin: 2px 0;
`

const Progress = styled(ProgressBar)`
  height: 3px;
  margin: 5px 0;

  background-color: #f7f7f7;
`

export default CourseItem
