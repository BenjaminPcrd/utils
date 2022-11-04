import React from 'react'

// APIs
import { useState } from 'react'
import { StyleSheet } from 'react-native'

// types
import type { RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { StackParams } from '../../navigation'

// components
import { View, Text } from 'react-native'
import { Button } from '../../components'

// translation
import t from '../../translations'

// styles
import { Typography, Theme } from '../../styles'

type Props = {
    navigation: NativeStackNavigationProp<StackParams, 'Screen'>
    route: RouteProp<StackParams, 'Screen'>
}

const Screen: React.FC<Props> = ({ navigation }) => {
    const [text, setText] = useState('exemple')
    return (
        <View>
            <Text>{t('hello')}</Text>
            <Text style={styles.text}>{text}</Text>
            <Button secondary title='OtherScreen' onPress={() => navigation.navigate('OtherScreen')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        ...Typography.regular.x40,
        color: Theme.colors.text
    }
})

export default Screen