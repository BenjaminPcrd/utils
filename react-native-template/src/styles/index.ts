import Colors, { applyOpacity } from './colors'
import * as Sizing from './sizing'
import * as Typography from './typography'
import * as Outlines from './outlines'
import { createContext } from 'react'

type ThemeColors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'background' | 'surface' | 'onPrimary' | 'onSecondary' | 'onBackground' | 'onSurface'
type ThemeType = Record<ThemeColors, string>

const lightTheme: ThemeType = {
    primary: Colors.blue[700],
    secondary: Colors.purple[700],
    success: Colors.green[500],
    danger: Colors.red[500],
    warning: Colors.orange[500],

    background: Colors.grey[200],
    surface: Colors.white,

    onPrimary: Colors.white,
    onSecondary: Colors.white,
    onBackground: Colors.black,
    onSurface: Colors.black
}

const darkTheme: ThemeType = {
    primary: Colors.blue[500],
    secondary: Colors.purple[500],
    success: Colors.green[500],
    danger: Colors.red[500],
    warning: Colors.orange[500],

    background: Colors.grey[900],
    surface: applyOpacity(Colors.white, 0.1),

    onPrimary: Colors.black,
    onSecondary: Colors.black,
    onBackground: Colors.white,
        onSurface: Colors.white
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
    applyOpacity,
    Sizing,
    Typography,
    Outlines,
    lightTheme,
    darkTheme,
    ThemeContext,
    type ThemeType
}