import React, { useEffect, useContext } from 'react'
import { StyleSheet } from 'react-native'

// types
import type { RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationOptions, NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { MainStackParams } from '../../navigation'

// components
import { View, Text } from 'react-native'
import { Button } from '../../components'

// translation
import t from '../../translations'

// styles
import { Typography, Colors, ThemeContext, ThemeType } from '../../styles'

type Props = {
    navigation: NativeStackNavigationProp<MainStackParams, 'Screen'>
    route: RouteProp<MainStackParams, 'Screen'>
}

const Screen: React.FC<Props> = ({ navigation }) => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const styles = createStyles(theme)
    useEffect(() => {
        navigation.setOptions(navigatorOptions(theme))
    }, [])
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{t('hello')}</Text>
            <Button title='toggleTheme' onPress={toggleTheme} />
        </View>
    )
}

const createStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    text: {
        ...Typography.regular.x40,
        color: theme.colors.text
    }
})

const navigatorOptions = (theme: ThemeType) => ({
    title: 'Title',
    headerStyle: {
        backgroundColor: theme.colors.primary
    },
    headerTintColor: Colors.white
}) as NativeStackNavigationOptions

export default Screen