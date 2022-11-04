import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import StackNavigator, { type StackParams } from './StackNavigator'

const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default Navigation
export {
    type StackParams
}