import React, { useState, useEffect, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons'
import axios from 'axios'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'
import styled from 'styled-components'
import colors from '../helpers/colors'
import { capitalize } from '../helpers/functions'

import PhoneInput from 'react-native-phone-number-input'
import { useSelector, useDispatch } from 'react-redux'

import { createNewUser } from '../../store/actions/userActions'

const LoginPage = ({ navigation }) => {
  const dispatch = useDispatch()
  const [enteredNumberIsValid, setEnteredNumberIsValid] = useState(false)
  const [formattedValue, setFormattedValue] = useState('')

  const nextButtonHandler = () => {
    Keyboard.dismiss()
    navigation.replace('ConfirmPage')
    dispatch(createNewUser(formattedValue))
  }

  useEffect(() => {
    if (formattedValue.length === 12) {
      setEnteredNumberIsValid(true)
    }
    return () => setEnteredNumberIsValid(false)
  }, [formattedValue])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Inner>
          <Heading>{capitalize('enter')} your mobile number</Heading>
          <SubText>
            By continuing you may receive an SMS for verification, Message and
            data rates may apply*.
          </SubText>
        </Inner>
        <InputBox>
          <PhoneInput
            defaultCode="US"
            placeholder="(201) 555-0122"
            withDarkTheme
            layout="first"
            autoFocus
            onChangeFormattedText={(text) => {
              setFormattedValue(text)
            }}
            containerStyle={{ width: '100%' }}
          />
        </InputBox>
        <ButtonBox>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.prevBtn}
          >
            <AntDesign name="arrowleft" size={26} color={colors.black} />
          </TouchableOpacity>
          {enteredNumberIsValid && (
            <TouchableOpacity
              onPress={nextButtonHandler}
              activeOpacity={0.8}
              style={styles.nextBtn}
            >
              <Text style={styles.textBtn}>next</Text>
              <AntDesign name="arrowright" size={26} color={colors.white} />
            </TouchableOpacity>
          )}
        </ButtonBox>
      </Container>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  nextBtn: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.blackLight,
    width: '75%',
    padding: '3%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },

  prevBtn: {
    width: '19%',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3%',
  },
  textBtn: {
    fontSize: 20,
    color: colors.white,
    marginHorizontal: '30%',
    textTransform: 'capitalize',
  },
})

const Container = styled.View`
  flex: 1;
  padding: 0 5% 0 5%;
  align-items: center;

  background-color: ${colors.whiteDark};
`

const ButtonBox = styled.View`
  flex-direction: row;

  width: 100%;
  justify-content: space-between;

  margin-top: 25px;
`

const Inner = styled.View`
  margin: 15% 0 5% 0;
  padding-top: 2%;
  width: 100%;
`

const Heading = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: ${colors.black};
  margin-bottom: 5px;
  text-align: left;
`

const SubText = styled.Text`
  text-align: left;
  margin-top: 5px;
`

const InputBox = styled.View`
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 100%;
`

export default LoginPage
