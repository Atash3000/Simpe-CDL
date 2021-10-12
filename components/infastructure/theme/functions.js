import { Dimensions } from 'react-native'

export function responsive(props, pixels = 0, val = 0) {
  let { space } = props.theme
  let height = Dimensions.get('screen').height

  const breakPoint =
    height >= 1000
      ? space[pixels + val * val]
      : height < 1000 && height >= 900
      ? space[pixels]
      : height < 900 && height >= 800
      ? space[pixels - val]
      : height < 800 && height >= 700
      ? space[pixels - (val + val)]
      : height < 700 && height >= 600
      ? space[pixels - (val + val + val)]
      : height < 600 && height >= 500 && space[pixels - (val + val + val + val)]

  return breakPoint
}

// console.log(responsive(windowDimensions))
