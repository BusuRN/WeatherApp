import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WeatherLogo from '../assets/WeatherLogo.png';
import { BLACK, PRIMARY, WHITE } from '../constants/COLORS';

const LogoHeader = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={WeatherLogo} />
        </View>
    )
}

export default LogoHeader

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY,
    },
    logo: {
        width: 70,
        height: 40,
        resizeMode: 'contain',
    },
});
