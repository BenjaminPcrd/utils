import Colors from './colors'
import * as Sizing from './sizing'
import * as Typography from './typography'

type ThemeType = {
    isDark: boolean
    colors: {
        primary: string
        secondary: string
        success: string
        danger: string
        warning: string
        error: string
        background: string
        foreground: string
        card: string
        text: string
    }
}

const Theme: ThemeType = {
    isDark: false,
    colors: {
        primary: Colors.blue,
        secondary: Colors.purple,
        success: Colors.green,
        danger: Colors.red,
        warning: Colors.orange,
        error: Colors.red,
        background: Colors.lighter,
        foreground: Colors.darker,
        card: Colors.white,
        text: Colors.black,
    }
}

export {
    Colors,
    Sizing,
    Typography,
    Theme,
    type ThemeType
}