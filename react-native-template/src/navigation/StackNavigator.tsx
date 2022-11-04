import React from 'react'

// navigation
import { createNativeStackNavigator, type NativeStackNavigationOptions } from '@react-navigation/native-stack'

// screens
import Screen from '../screens/Screen'
import OtherScreen from '../screens/OtherScreen'

// styles
import { Colors, Theme } from '../styles'

type StackParams = {
    Screen: undefined
    OtherScreen: undefined
}

const Stack = createNativeStackNavigator<StackParams>()
const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName='Screen' screenOptions={screenOptions} >
            <Stack.Screen name='Screen' component={Screen} />
            <Stack.Screen name='OtherScreen' component={OtherScreen} options={otherScreenOptions}/>
        </Stack.Navigator>
    )
}

const screenOptions: NativeStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Theme.colors.primary
    },
    headerTintColor: Colors.white
}

const otherScreenOptions: NativeStackNavigationOptions = {
    title: 'title of OtherScreen'
}

export default StackNavigator
export {
    type StackParams
}