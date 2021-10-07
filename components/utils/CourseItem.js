import React from 'react'
import { View, Text, TouchableOpacity, Alert, Pressable } from 'react-native'
import styled from 'styled-components'
import { ProgressBar, Colors } from 'react-native-paper';


const CourseItem = (props) => {
  return (
    <Card>
      <Title>{props.title}</Title>
      <ProgressBar progress={0.4} style={{backgroundColor:'red',padding:10}} />
    </Card>
  )
}

const Card = styled(View)`
  background-color: blue;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  box-shadow: -7px  10px -3px ;
`

const Title = styled(Text)`
  font-size: 20px;
  text-align: center;
  background-color: yellow;
  text-transform: capitalize;
`

export default CourseItem
