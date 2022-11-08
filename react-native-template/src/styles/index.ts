import Colors from './colors'
import * as Sizing from './sizing'
import * as Typography from './typography'
import * as Outlines from './outlines'
import { createContext } from 'react'

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
        card: string
        text: string
    }
}

const lightTheme: ThemeType = {
    isDark: false,
    colors: {
        primary: Colors.blue,
        secondary: Colors.purple,
        success: Colors.green,
        danger: Colors.red,
        warning: Colors.orange,
        error: Colors.red,
        background: Colors.lighter,
        card: Colors.white,
        text: Colors.black,
    }
}

const darkTheme: ThemeType = {
    isDark: true,
    colors: {
        ...lightTheme.colors,
        background: Colors.darker,
        card: Colors.dark,
        text: Colors.white,
    }
}

type ThemeContextType = {
    theme: ThemeType
    toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextType>({
    theme: lightTheme,
    toggleTheme: () => null
})

export {
    Colors,
    Sizing,
    Typography,
    Outlines,
    lightTheme,
    darkTheme,
    ThemeContext,
    type ThemeType
}