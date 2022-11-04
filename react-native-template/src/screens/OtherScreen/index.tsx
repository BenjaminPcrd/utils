import React from 'react'

// types
import type { RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { StackParams } from '../../navigation'

// components
import { View, Text } from 'react-native'

type Props = {
    navigation: NativeStackNavigationProp<StackParams, 'OtherScreen'>
    route: RouteProp<StackParams, 'OtherScreen'>
}

const OtherScreen: React.FC<Props> = () => {
    return (
        <View>
            <Text>OtherScreen</Text>
        </View>
    )
}

export default OtherScreen