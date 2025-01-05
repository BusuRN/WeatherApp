import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ACCENT } from '../constants/COLORS'

const LatLonInfo = ({ weatherData }) => {
    return (
        <View style={styles.temperatureContainer}>
            <Text style={styles.text}>Lat: {weatherData?.location?.lat}</Text>
            <Text style={styles.text}>Lon: {weatherData?.location?.lon}</Text>
        </View>
    )
}

export default LatLonInfo

const styles = StyleSheet.create({
    temperatureContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    text: {
        color: ACCENT,
        fontSize: 24,
        marginVertical: 10,
        fontWeight: '700',
        textAlign: 'center',
    },
})