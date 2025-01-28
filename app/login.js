import { registerRootComponent } from 'expo';

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Login() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Login Page</Text>
    </View>
    );
}
