import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styled from 'styled-components'
import { FontAwesome } from '@expo/vector-icons'
// <FontAwesome name="unlock-alt" size={24} color="black" />
const MiniCard = (props) => {
  const [isLocked, setIsLocked] = useState(()=>props.chapter!=='chapter 1')
  return (
    <Pressable {...props}>
      <Container>
        <Main>
          <Icon name={isLocked ? 'lock' : 'unlock-alt'} />
        </Main>
      <ChapterText>{ props.chapter}</ChapterText>
      </Container>
    </Pressable>
  )
}

const Container = styled.View`
padding:4px;
margin:5px;
`

const Main = styled(View)`
  box-shadow: 5px 2px 10px;

  background-color: ${(props) => props.theme.colors.ui.black[400]};
  width: 75px;
  height: 75px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
const Icon = styled(FontAwesome)`
  color: ${(props) => props.theme.colors.ui.white[200]};
  font-size: ${(props) => props.theme.sizes[28]};
`

const ChapterText = styled(Text)`
  color: ${(props) => props.theme.colors.ui.black[500]};
  font-size: ${(props) => props.theme.sizes[16]};
  font-weight:${props=>props.theme.fontWeight[600]}
  text-transform:capitalize;
`
export default MiniCard
