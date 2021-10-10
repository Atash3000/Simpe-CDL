import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key, value) => {
  let arr = [value]
  try {
    const jsonValue = JSON.stringify(arr)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e)
    // saving error
  }
}


  export const getDateFromStorage = async (key='') => {
    try {
      let jsonValue = await AsyncStorage.getItem(key)
      if (jsonValue !== null) {
       // console.log(JSON.parse(jsonValue),'getasync val')
        return JSON.parse(jsonValue)
      }
    } catch (err) {
      
      console.log(err)
    }
}
  