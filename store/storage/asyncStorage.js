import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e)
    // saving error
  }
}


export const getData = async (key) => {
   let res = {}
   try {
     let jsonValue = await AsyncStorage.getItem(key)
     if (jsonValue !== null) {
       res= JSON.parse(jsonValue)
     }
   } catch (err) {
     setUserInfo(null)
     console.log(err)
  }
  return res
 }
