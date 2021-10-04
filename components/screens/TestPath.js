import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'

const TestPath = () => {

  const [data,setData] = useState('')
  const getDataFromServer = async () => {
  try {
    let response = await fetch('http://172.20.10.2:5050/')
    let responseJson = await response.json()
    console.log(response)
    setData(responseJson.message)
    return responseJson.message
  } catch (error) {
    console.error(error)
  }
  }


  useEffect(() => {
    getDataFromServer()
  
  }, [])
  return (
    <View style={{ flex:1,backgroundColor:'green',alignItems:'center',paddingTop:'22%'}}>
      <Text style={{ fontSize: 45 }} >data:{ data}</Text>
    </View>
  )
}

export default TestPath
