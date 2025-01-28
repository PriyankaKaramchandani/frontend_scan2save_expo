import { registerRootComponent } from 'expo';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const home = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login') }>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { /* Handle sign up */ }}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        <View>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
    </View>
    );
};

export default home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EF476F',
    },
    // logoContainer: {
    //     width: 300,
    //     height: 400,
    //     margin: 20,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     shadowColor: '#000', // Shadow color
    //     // shadowOffset: { width: 0, height: 2 }, // Shadow offset
    //     shadowOpacity: 0.8, // Shadow opacity
    //     shadowRadius: 3, // Shadow radius
    //     // elevation: 5, // For Android shadow
    // },
    logo: {
        width: 300,
        height: 400,
        resizeMode: 'contain',
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.8, // Shadow opacity
        shadowRadius: 3, // Shadow radius
        elevation: 5, // For Android shadow
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
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.8, 
        shadowRadius: 3, 
        elevation: 5, 
    },
    buttonText: {
        color: '#000000', // Set text color to black
        fontWeight: 'bold',
    },
});