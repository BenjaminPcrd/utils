import React, { useState } from 'react'
import { Appearance } from 'react-native'

import Navigation from './navigation'

// styles
import { ThemeContext, lightTheme, darkTheme } from './styles'

const App: React.FC = () => {
    const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme())
    const initialThemeContext = { 
        theme: colorScheme == 'light' ? lightTheme : darkTheme, 
        toggleTheme: () => setColorScheme(prev => prev == 'light' ? 'dark' : 'light')
    }
    
    return (
        <ThemeContext.Provider value={initialThemeContext}>
            <Navigation />
        </ThemeContext.Provider>
        
    )
}

export default App