import { StyleSheet, ViewStyle } from 'react-native'
import Colors from './colors'

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

type Border = 'small' | 'base' | 'large'
const border: Record<Border, ViewStyle> = {
    small: {
        borderWidth: borderWidth.thin,
        borderRadius: borderRadius.small
    },
    base: {
        borderWidth: borderWidth.base,
        borderRadius: borderRadius.base
    },
    large: {
        borderWidth: borderWidth.thick,
        borderRadius: borderRadius.large
    }
}

export {
    borderRadius,
    borderWidth,
    shadow,
    border
}