import { registerRootComponent } from 'expo';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';

const Home = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login') }>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { /* Handle sign up */ }}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        <View>
            <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        </View>
    </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EF476F',
    },
    logo: {
        width: 300,
        height: 400,
        // resizeMode: 'contain',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 3,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    buttonsContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150,
    },
    button: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: '#000000',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 3,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    buttonText: {
        color: '#000000', 
        fontWeight: 'bold',
    },
});