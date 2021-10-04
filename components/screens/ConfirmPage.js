import React, { useRef, useState, useEffect } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import CodeInput from 'react-native-confirmation-code-input'
import colors from '../helpers/colors'

import { capitalize, makeNumberLookGood } from '../helpers/functions'
import axios from 'axios'

const ConfirmPage = (props) => {

  const userInfoFromServer = useSelector((state) => state.userRegister)
  const { error, loading, userData ,userNumber} = userInfoFromServer
 // const { phoneNumber, verificationNumber } = userData
  console.log(userInfoFromServer)
 // console.log(userInfoFromServer)


  // const getVerificationCodeFromServer = async (userNum) => {
  //   try {
  //     const { data } = await axios.get(
  //       `http://172.20.10.2:5050/api/v1/users/1${userNum}`
  //     )

  //     const { verificationNumber: vnum, phoneNumber } = data.data.user
  //     setVerifiactionNumber(vnum)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  let userNumStyled = (
    <Text style={{ fontWeight: 'bold' }}>{makeNumberLookGood(userNumber)}</Text>
  )

  return (
    <Container>
      <TextBox>
        <Text style={{ fontSize: 20 }}>
          {capitalize('enter')} a 4 digit code that you recived on number &nbsp;
          {userNumStyled}
        </Text>
      </TextBox>
      <CodeBox>
        <CodeInput
          keyboardType="numeric"
          secureTextEntry={false}
          compareWithCode="112344"
          activeColor={colors.blackLight}
          inactiveColor={colors.black}
          autoFocus={true}
          ignoreCase={true}
          codeLength={4}
          inputPosition="center"
          size={60}
          className="border-circle"
          codeInputStyle={{ borderWidth: 2, fontWeight: '500', fontSize: 25 }}
        />
      </CodeBox>
    </Container>
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
