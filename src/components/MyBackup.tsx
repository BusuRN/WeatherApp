import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment'
import { ACCENT } from '../constants/COLORS'

const SunriseInfo = ({ weatherData }) => {
    return (
        <View style={styles.temperatureContainer}>
            <Text style={styles.text}>
                {/* Next line converts AM/PM hour to 24h format */}
                Sunrise:{' '}
                {moment(weatherData?.forecast?.forecastday?.[0]?.astro?.sunrise, [
                    'h:mm A',
                ]).format('HH:mm')}
            </Text>
            <Text style={styles.text}>
                Sunset:{' '}
                {moment(weatherData?.forecast?.forecastday?.[0]?.astro?.sunset, [
                    'h:mm A',
                ]).format('HH:mm')}
            </Text>
        </View>
    )
}

export default SunriseInfo

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