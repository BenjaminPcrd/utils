import React, { Dispatch, SetStateAction, useContext } from 'react'
import { StyleSheet } from 'react-native'

// components
import { View, Text, TextInput} from 'react-native'

// styles
import { Sizing, Outlines, applyOpacity, ThemeContext, ThemeType } from '../../styles'

type Props = {
    label: string
    placeholder?: string
    secureTextEntry?: boolean
    primary?: boolean
    secondary?: boolean
    success?: boolean
    warning?: boolean
    danger?: boolean
    value: string
    onChangeText: Dispatch<SetStateAction<string>>
}

const Input: React.FC<Props> = ({ label, placeholder, secureTextEntry, primary, secondary, success, warning, danger, value, onChangeText }) => {
    const { theme } = useContext(ThemeContext)
    const styles = createStyles(theme)
    return (
        <View style={styles.container}>
            <Text style={[styles.label]}>
                {label}
            </Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={[
                    styles.default,
                    primary && styles.primary,
                    secondary && styles.secondary,
                    success && styles.success,
                    warning && styles.warning,
                    danger && styles.danger
                ]}
                placeholderTextColor={applyOpacity(theme.onSurface, 0.5)}
                cursorColor={theme.primary}
            />
        </View>
    )
}
const createStyles = (theme: ThemeType) => StyleSheet.create({
    container: {
        margin: Sizing.x10,
        padding: Sizing.x10,
        backgroundColor: theme.surface,
        borderRadius: Outlines.borderRadius.small
    },
    label: {
        color: theme.onSurface
    },
    default: {
        margin: Sizing.x10,
        padding: Sizing.x10,
        ...Outlines.border.small,
        borderColor: theme.onSurface
    },
    primary: {
        borderColor: theme.primary
    },
    secondary: {
        borderColor: theme.secondary
    },
    success: {
        borderColor: theme.success
    },
    warning: {
        borderColor: theme.warning
    },
    danger: {
        borderColor: theme.danger
    }
})



export default Input