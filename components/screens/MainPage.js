import React, { useState } from 'react'
import colors from '../helpers/colors'
import primaryImage from '../images/primary.png'
import { AntDesign } from '@expo/vector-icons'
import data from '../helpers/states'
import styled from 'styled-components'

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native'
import { capitalize } from '../helpers/functions'
import NavigateBack from '../utils/NavigateBack'
import Logout from '../utils/Logout'

const MainPage = (props) => {
  const { navigation } = props
  const usaStates = data.map((el) => el.name).sort()
  const [states] = useState(usaStates)
  const onPressHandler = (stateName) => {
    navigation.navigate('Course', { slug: stateName })
  }
  const goBackToPrevPage = () => {
    navigation.navigate('Welcome')
  }

  return (
    <ImageBackground
      source={primaryImage}
      resizeMode="repeat"
      style={styles.bgImage}
    >
     
      <NavigateBack goBackToPrevPage={goBackToPrevPage} />

      <Main>
        <Text style={styles.heading}> {capitalize('select')} your state</Text>
        <Inner>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            centerContent={true}
          >
            {states.map((state, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={index}
                  onPress={() => onPressHandler(state)}
                  style={styles.button}
                >
                  <View style={styles.innerButton}>
                    <AntDesign name="caretright" size={20} color="black" />
                    <Text style={styles.text}>{state}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </Inner>
      </Main>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: colors.blackLight,
    fontWeight: '600',
    marginVertical:'14%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  bgImage: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 33,
    paddingVertical: 10,
    
  },

  button: {
    backgroundColor: '#f9f9f7',
    padding: 22,
    borderRadius: 15,
    marginBottom: '2.5%',
    width: '100%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },

  text: {
    textAlign: 'left',
    marginLeft: 3,
    color: colors.blackLight,
    textTransform: 'capitalize',
    fontSize: 19,
    fontWeight: '700',
  },

  innerButton: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
})

//? padding-bottom:${Dimensions.get('screen').height /20}px;
const Main = styled.View`
padding-bottom:20px;
  width: 100%;
  height: 100%;
  align-items:center;
  justify-content:flex-end;
`

const Inner = styled.View`
height:70%;
width:100%;

`;
export default MainPage

// <View style={styles.inner}>
//       <ScrollView contentContainerStyle={styles.contentContainerStyle}>
//         {states.map((state, index) => {
//           return (
//             <TouchableOpacity
//               activeOpacity={0.9}
//               key={index}
//               onPress={() => onPressHandler(state)}
//               style={styles.button}
//             >
//               <View style={styles.innerButton}>
//                 <AntDesign name="caretright" size={20} color="black" />
//                 <Text style={styles.text}>{state}</Text>
//               </View>
//             </TouchableOpacity>
//           )
//         })}
//       </ScrollView>
//     </View>
