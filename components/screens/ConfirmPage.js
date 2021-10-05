import React, { useRef, useState, useEffect } from 'react'
import { KeyboardAvoidingView, Text } from 'react-native'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import CodeInput from 'react-native-confirmation-code-input'
import colors from '../helpers/colors'

import { capitalize, makeNumberLookGood } from '../helpers/functions'


const ConfirmPage = ({navigation}) => {
const [enteredCodeIsValid,setEnteredCodeIsValid] = useState(false)
  const userInfoFromServer = useSelector((state) => state.userRegister)
  const { error, loading, userNumber, userVerificationNumber } =
    userInfoFromServer

 // console.log(userInfoFromServer)


  const userVerNumToString = userVerificationNumber ? userVerificationNumber.toString() : '';
  useEffect(() => {
    if (enteredCodeIsValid) {
     
      navigation.replace('Home')
    }
},[enteredCodeIsValid])

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Container>
        <TextBox>
          <Text style={{ fontSize: 20 }}>
            {capitalize('enter')} a 4 digit code that you recived on number
            &nbsp;
            <Text style={{ fontWeight: 'bold' }}>
              {makeNumberLookGood(userNumber)}
            </Text>
          </Text>
        </TextBox>
        <CodeBox>
          <CodeInput
            keyboardType="numeric"
            secureTextEntry={false}
            compareWithCode={userVerNumToString}
            activeColor={colors.blackLight}
            inactiveColor={colors.black}
            autoFocus={true}
            ignoreCase={true}
            codeLength={4}
            inputPosition="center"
            size={60}
            className="border-circle"
            onFulfill={setEnteredCodeIsValid}
            codeInputStyle={{ borderWidth: 2, fontWeight: '500', fontSize: 25 }}
          />
        </CodeBox>
      </Container>
    </KeyboardAvoidingView>
  )
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: ${colors.whiteDark};
`
const CodeBox = styled.View`
  flex-direction: row;

  height: 10%;
  justify-content: center;
  align-items: center;
`

const TextBox = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  height: 25%;
`
export default ConfirmPage
