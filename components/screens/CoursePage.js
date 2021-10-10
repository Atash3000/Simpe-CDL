import React, { Fragment } from 'react'

import { View, Text, ImageBackground} from 'react-native'
import primaryImage from '../images/primary-3.png'
import { AntDesign } from '@expo/vector-icons'
import { data } from '../helpers/data'
import CourseItem from '../utils/CourseItem'
import NavigateBack from '../utils/NavigateBack'
import SafeArea from '../utils/SafeArea'
import styled from 'styled-components'
import { StatusBar } from 'expo-status-bar'

const CoursePage = ({ navigation, route }) => {
  const courseItems = Object.keys(data)
  const { slug: selectedState } = route.params
  const moveToNextPage = (testName) => {
    navigation.navigate('RoadMap', { testName: testName })
  }

  const state = selectedState + ' ' + 'cdl'.toLocaleUpperCase()
  const Card = courseItems.map((course) => (
    <CourseItem
      key={course}
      title={course}
      onPress={moveToNextPage.bind(this, course)}
    />
  ))
  return (
    <Fragment>
      <BackgroundImage source={primaryImage} resizeMode="cover">
        <SafeArea>
          <Container>
            <NavigateBack goBackToPrevPage={() => navigation.goBack()} />
            <Heading>
              <HeadingText>{state}</HeadingText>
            </Heading>
            <Main>{Card}</Main>
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

const Container = styled(View)`
  flex: 1;
  position: relative;
  justify-content: space-around;
`

// @ background-color: red;
const Heading = styled(View)`
  height: 20%;

  justify-content: space-around;
`

const HeadingText = styled(Text)`
  color: ${(props) => props.theme.colors.ui.white[100]};
  font-size: ${(props) => props.theme.sizes[28]};
  font-weight :${(props) => props.theme.fontWeight[700]}
  text-align:center;
`

const Main = styled(View)`
  padding: 0 15px;
  flex: 0.8;
`

export default CoursePage
