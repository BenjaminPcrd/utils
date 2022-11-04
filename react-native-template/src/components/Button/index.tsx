import React from 'react'

// API
import { StyleSheet } from 'react-native'

// components
import {
    Pressable,
    Text
} from 'react-native'

// styles
import { Theme, Colors, Sizing, Typography } from '../../styles'

type Props = {
    title: string
    primary?: boolean
    secondary?: boolean
    danger?: boolean
    onPress: () => void
}

const Button: React.FC<Props> = ({ title, primary, secondary, danger, onPress }) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={state => [
                styles.default,
                { opacity: state.pressed ? 0.75 : 1 },
                primary && styles.primary,
                secondary && styles.secondary,
                danger && styles.danger
            ]}
        >
            <Text 
                style={[
                    styles.defaultText,
                    primary && styles.textPrimary,
                    secondary && styles.textSecondary,
                    danger && styles.textDanger
                ]}
            >
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    default: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: Sizing.x10,
        margin: Sizing.x10,
        borderRadius: Sizing.borderRadius.base,
        borderWidth: Sizing.borderWidth.thin,
        borderColor: Colors.black
    },
    primary: {
        borderWidth: 0,
        backgroundColor: Theme.colors.primary
    },
    secondary: {
        borderWidth: 0,
        backgroundColor: Theme.colors.secondary
    },
    danger: {
        borderWidth: 0,
        backgroundColor: Theme.colors.danger
    },

    defaultText: {
        ...Typography.semibold.x30,
        color: Colors.black
    },
    textPrimary: {
        color: Colors.white
    },
    textSecondary: {
        color: Colors.white
    },
    textDanger: {
        color: Colors.white
    }
})

export default Button