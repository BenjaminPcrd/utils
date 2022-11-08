import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import Screen from '../screens/Screen'

type MainStackParams = {
    Screen: undefined
}

const Stack = createNativeStackNavigator<MainStackParams>()
const MainStack: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName='Screen' >
            <Stack.Screen name='Screen' component={Screen} />
        </Stack.Navigator>
    )
}

export default MainStack
export {
    type MainStackParams
}