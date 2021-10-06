import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import colors from '../helpers/colors'
import styled from 'styled-components'
import { questions } from '../helpers/data'
import NavigateBack from '../utils/NavigateBack'
import Hamburger from '../utils/Hamburger'

const QuestionPage = (props) => {
  const { navigation, route } = props
  const { testType } = route.params
  const arrayOfQuestions = questions[testType]
  const questionCount = arrayOfQuestions.length
  const title = arrayOfQuestions.slice(0, 1).map((el) => (
    <Text style={styles.title} key={el.id}>
      {el.title}
    </Text>
  ));


  const eachQuestin = arrayOfQuestions.map(el=>el.options)

  return (
    <Container>
      <Hamburger navigation={ navigation}/>
      <NavigateBack
        goBackToPrevPage={() => navigation.goBack()}
        color={colors.white}
      />
      <Head>
        <Text style={styles.text}>{testType}</Text>
        <Text style={styles.text}> question 1 of {questionCount} </Text>
      </Head>
      <Inner>
        <Box>
          {title}
         
        </Box>
      </Inner>
    </Container>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: colors.whiteDark,
    textTransform: 'lowercase',
  },
  title: {
    fontSize:25,
  },
  main: {
    height: '100%',
  },
})
const Container = styled.View`
  flex: 1;
  position: relative;
`
const Inner = styled.View`
  background-color: ${colors.primary};
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10%;
`
const Box = styled.View`
  background-color: ${colors.secondaryDark};
  width: 90%;
`

const Head = styled.View`
  width: 100%;
  height: 20%;

  position: relative;

  align-items: center;
  justify-content: flex-end;
  background-color: ${colors.blackLight};
`
export default QuestionPage
