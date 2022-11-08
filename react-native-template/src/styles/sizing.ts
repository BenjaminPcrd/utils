import { Dimensions } from 'react-native'

const { height: screenHeight, width: screenWidth } = Dimensions.get('screen')
type Screen = 'width' | 'height'
const screen: Record<Screen, number> = {
    width: screenWidth,
    height: screenHeight
}

type Layout = 'x5' | 'x10' |'x15' |'x20' |'x30' |'x40' |'x50' |'x60' |'x70' |'x80' | 'x90'
const layout: Record<Layout, number> = {
    x5: 5,
    x10: 10,
    x15: 15,
    x20: 20,
    x30: 30,
    x40: 40,
    x50: 50,
    x60: 60,
    x70: 70,
    x80: 80,
    x90: 90
}

export const x5 = layout.x5
export const x10 = layout.x10
export const x15 = layout.x15
export const x20 = layout.x20
export const x30 = layout.x30
export const x40 = layout.x40
export const x50 = layout.x50
export const x60 = layout.x60
export const x70 = layout.x70
export const x80 = layout.x80
export const x90 = layout.x90

export {
    screen
}