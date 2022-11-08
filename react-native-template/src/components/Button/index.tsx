import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

// components
import {
    Pressable,
    Text
} from 'react-native'

// styles
import { Colors, Sizing, Typography, Outlines, ThemeContext, ThemeType } from '../../styles'

type Props = {
    title: string
    primary?: boolean
    secondary?: boolean
    warning?: boolean
    danger?: boolean
    onPress: () => void
}

const Button: React.FC<Props> = ({ title, primary, secondary, warning, danger, onPress }) => {
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
                warning && styles.warning,
                danger && styles.danger
            ]}
        >
            <Text 
                style={[
                    styles.defaultText,
                    primary && styles.textPrimary,
                    secondary && styles.textSecondary,
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
        ...Outlines.border.base,
        borderColor: Colors.black,
        backgroundColor: theme.colors.card
    },
    primary: {
        borderWidth: 0,
        backgroundColor: theme.colors.primary
    },
    secondary: {
        borderWidth: 0,
        backgroundColor: theme.colors.secondary
    },
    warning: {
        borderWidth: 0,
        backgroundColor: theme.colors.warning
    },
    danger: {
        borderWidth: 0,
        backgroundColor: theme.colors.danger
    },

    defaultText: {
        ...Typography.semibold.x30,
        color: theme.colors.text
    },
    textPrimary: {
        color: Colors.white
    },
    textSecondary: {
        color: Colors.white
    },
    textWarning: {
        color: Colors.white
    },
    textDanger: {
        color: Colors.white
    }
})



export default Button