import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import {
  Text,
  StyleSheet,
  Keyboard,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'
import styled from 'styled-components/native'
import colors from '../helpers/colors'
import { capitalize } from '../helpers/functions'

import PhoneInput from 'react-native-phone-number-input'
import { useDispatch } from 'react-redux'

import { createNewUser } from '../../store/actions/userActions'
import { StyleSheetManager } from 'styled-components'
import SafeArea from '../utils/SafeArea'

const LoginPage = ({ navigation }) => {
  const dispatch = useDispatch()
  const [enteredNumberIsValid, setEnteredNumberIsValid] = useState(false)
  const [formattedValue, setFormattedValue] = useState('')

  const nextButtonHandler = () => {
    Keyboard.dismiss()
    navigation.navigate('ConfirmPage')
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
      <BackgroundColor>
        <SafeArea>
          <Container>
            <Inner>
              <Heading>{capitalize('enter')} your mobile number</Heading>
              <SubText>
                By continuing you may receive an SMS for verification, Message
                and data rates may apply*.
              </SubText>
            </Inner>
            <PhoneInput
              defaultCode="US"
              placeholder="(201) 555-0122"
              withDarkTheme
              layout="first"
              autoFocus
              onChangeFormattedText={(text) => {
                setFormattedValue(text)
              }}
              containerStyle={{ width: '100%', marginTop: 25 }}
            />

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
                  <Text style={styles.textBtn}>
                    {capitalize('send')} {'sms'.toUpperCase()}
                  </Text>
                  <AntDesign name="arrowright" size={26} color={colors.white} />
                </TouchableOpacity>
              )}
            </ButtonBox>
          </Container>
        </SafeArea>
      </BackgroundColor>
    </TouchableWithoutFeedback>
  )
}

const BackgroundColor = styled(View)`
  flex: 1;

  background-color: ${(props) => props.theme.colors.ui.white[400]};
`

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
  },
})

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-right: ${(props) => props.theme.space[20]};
  padding-left: ${(props) => props.theme.space[20]};
`

const ButtonBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: ${(props) => props.theme.space[24]};
`

const Inner = styled.View`
  width: 100%;
  margin-top: ${(props) => props.theme.space[24]};
`

const Heading = styled.Text`
  text-align: left;
  font-size: ${(props) => props.theme.sizes[24]};
  font-weight: ${(props) => props.theme.fontWeight[600]};
  color: ${(props) => props.theme.colors.ui.black[900]};
  margin-bottom: ${(props) => props.theme.space[4]};
`

const SubText = styled.Text`
  text-align: left;
  margin-top: ${(props) => props.theme.space[4]};
`

export default LoginPage
