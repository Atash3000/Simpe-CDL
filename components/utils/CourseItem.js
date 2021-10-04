import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'

const CourseItem = (props) => {
  

  return (
    <TouchableOpacity onPress={props.onPressHandler}  activeOpacity={0.8}  underlayColor='transparent' style={props.style}>
      <Text  style={props.textStyle} >{ props.title}</Text>
    </TouchableOpacity>
  )
}

export default CourseItem
