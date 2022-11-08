import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import MainStack, { type MainStackParams } from './MainStack'

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}

export default Navigation
export {
    type MainStackParams
}