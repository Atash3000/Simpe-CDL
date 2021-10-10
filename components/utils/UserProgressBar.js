import React,{useState} from 'react'
import { View, Text } from 'react-native'
import { ProgressBar, } from 'react-native-paper'
import styled from 'styled-components';
import {data} from '../helpers/data'

const UserProgressBar = (props) => {
  const testSection = data['general knowledge'];
  const questinsLength = Object.keys(testSection).length +1
 // console.log(questinsLength)
    const [userProgress, setUserProgress] = useState(0.5)
  return (
    <Main>
      <ProgressStatus>{userProgress*100}%</ProgressStatus>
      <Progress color={'#fff'} progress={userProgress} {...props} />
    </Main>
  )
}

const Main = styled(View)``
const ProgressStatus = styled(Text)`
  color: white;
  margin: 2px 0;
`

const Progress = styled(ProgressBar)`
  height: 3px;
  margin: 5px 0;
  background-color: #f7f7f7;
`

export default UserProgressBar
