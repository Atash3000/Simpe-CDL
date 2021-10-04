export const capitalize = (val)=>{
  if (typeof val !== 'string') {
    return;
  }
  let arr = val.split('')
  return  arr[0].toUpperCase() + arr.slice(1).join('')
}


export const makeNumberLookGood = (number) => {
    let arr = number.toString().split('')
    let fist3Digits = arr.slice(2, 5).join('')
    let second3Digits = arr.slice(5, 8).join('')
    let last4Digits = arr.slice(8).join('')
  let userNumDashed = `${fist3Digits}-${second3Digits}-${last4Digits}`
  return userNumDashed

}