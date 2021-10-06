import React, { useState } from 'react'

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native'
import colors from '../helpers/colors'
import primaryImage from '../images/primary.png'
import { AntDesign } from '@expo/vector-icons'
import { questions } from '../helpers/data'
import CourseItem from '../utils/CourseItem'
import NavigateBack from '../utils/NavigateBack'
import { capitalize } from '../helpers/functions'
import Logout from '../utils/Logout'




const CoursePage = (props) => {
  const courseItems = Object.keys(questions)
  const { navigation, route } = props
  const { slug } = route.params

  const [selectedState, setSelectedState] = useState(slug)
  const openQuestionPage = (testType) => {

    navigation.navigate('Question',{testType:testType})
  }
  return (
    <ImageBackground
      source={primaryImage}
      resizeMode="repeat"
      style={styles.bgImg}
    >
      <NavigateBack goBackToPrevPage={() => navigation.goBack()} />
      <Logout navigation={navigation} />
      <View style={styles.top}>
        <Text
          style={[
            styles.heading,
            { textTransform: 'uppercase', marginBottom: '5%' },
          ]}
        >
          {selectedState} CDL
        </Text>
        <Text style={styles.heading}>{capitalize('select')} test type</Text>
      </View>
      <View style={styles.container}>
        {courseItems.map((el) => (
          <CourseItem
            style={styles.box}
            title={el}
            textStyle={styles.textStyle}
            key={el}
            onPressHandler={openQuestionPage.bind(this, el)}
          />
        ))}
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  bgImg: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },


  heading: {
    fontSize: 25,
    color: colors.blackLight,
    fontWeight: '600',
    letterSpacing:1,
   
  },
  top: {
    alignItems: 'center',
    marginBottom: '10%',
  },

  container: {
    //backgroundColor: 'white',
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: colors.white,
    borderRadius: 25,
    marginBottom: '5%',

    width: '80%',
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  textStyle: {
    textAlign: 'left',

    fontSize: 18,
    padding: 15,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
})
export default CoursePage
