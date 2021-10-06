import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/userActions'

const Logout = (props) => {
   const {navigation} = props
 const dispatch = useDispatch()
  const pressHandler = () => {
    navigation.navigate('Welcome')
    dispatch(logout())
    
  }
  return (
    <TouchableOpacity
      onPress={pressHandler}
      style={{
       
        top: '10%',
        zIndex:88,
        right: '5%',
        backgroundColor: 'black',
      }}
    >
      <Text style={{ fontSize: 25, color: 'red' }}>Logout</Text>
    </TouchableOpacity>
  )
}

export default Logout
