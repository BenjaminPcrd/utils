import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

// components
import { Pressable, Text } from 'react-native'

// styles
import { Sizing, Typography, Outlines, ThemeContext, ThemeType } from '../../styles'

type Props = {
    title: string
    primary?: boolean
    secondary?: boolean
    success?: boolean
    warning?: boolean
    danger?: boolean
    onPress: () => void
}

const Button: React.FC<Props> = ({ title, primary, secondary, success, warning, danger, onPress }) => {
    const { theme } = useContext(ThemeContext)
    const styles = createStyles(theme)
    return (
        <Pressable 
            onPress={onPress} 
            style={state => [
                styles.default,
                { opacity: state.pressed ? 0.75 : 1 },
                primary && styles.primary,
                secondary && styles.secondary,
                success && styles.success,
                warning && styles.warning,
                danger && styles.danger
            ]}
        >
            <Text 
                style={[
                    styles.defaultText,
                    primary && styles.textPrimary,
                    secondary && styles.textSecondary,
                    success && styles.textSuccess,
                    warning && styles.textWarning,
                    danger && styles.textDanger
                ]}
            >
                {title}
            </Text>
        </Pressable>
    )
}
const createStyles = (theme: ThemeType) => StyleSheet.create({
    default: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: Sizing.x10,
        margin: Sizing.x10,
        ...Outlines.border.small,
        borderColor: theme.onBackground,
        backgroundColor: theme.surface
    },
    primary: {
        borderWidth: 0,
        backgroundColor: theme.primary
    },
    secondary: {
        borderWidth: 0,
        backgroundColor: theme.secondary
    },
    success: {
        borderWidth: 0,
        backgroundColor: theme.success
    },
    warning: {
        borderWidth: 0,
        backgroundColor: theme.warning
    },
    danger: {
        borderWidth: 0,
        backgroundColor: theme.danger
    },

    defaultText: {
        ...Typography.semibold.x30,
        color: theme.onSurface
    },
    textPrimary: {
        color: theme.onPrimary
    },
    textSecondary: {
        color: theme.onPrimary
    },
    textSuccess: {
        color: theme.onPrimary
    },
    textWarning: {
        color: theme.onPrimary
    },
    textDanger: {
        color: theme.onPrimary
    }
})



export default Button