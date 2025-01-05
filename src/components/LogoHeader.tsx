import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import weatherLogo from '../assets/WeatherLogo.png';

const LogoHeader = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={weatherLogo} />
        </View>
    )
}

export default LogoHeader

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 60,
    },
    logo: {
        marginTop: "50",
        width: 100,
        height: 100,
        resizeMode: 'center'
    },

})