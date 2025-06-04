import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Displays an error message.
 */
const ErrorMessage = ({ message }: { message: string }) => (
    <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{message}</Text>
    </View>
);

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        fontSize: 16,
        color: '#ff0000',
        textAlign: 'center',
    },
});

export default ErrorMessage;