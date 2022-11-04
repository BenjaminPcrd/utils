import { Dimensions, ViewStyle, StyleSheet } from 'react-native'
import Colors from './colors'

const { height: screenHeight, width: screenWidth } = Dimensions.get('screen')
type Screen = 'width' | 'height'
const screen: Record<Screen, number> = {
    width: screenWidth,
    height: screenHeight
}

type BorderRadius = 'small' | 'base' | 'large' | 'max'
const borderRadius: Record<BorderRadius, number> = {
    small: 5,
    base: 10,
    large: 20,
    max: 9999
}

type BorderWidth = 'hairline' | 'thin' | 'base' | 'thick'
const borderWidth: Record<BorderWidth, number> = {
    hairline: StyleSheet.hairlineWidth,
    thin: 1,
    base: 2,
    thick: 3
}

type Shadow = 'base'
const shadow: Record<Shadow, ViewStyle> = {
    base: {
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    }
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
    screen,
    borderRadius,
    borderWidth,
    shadow
}