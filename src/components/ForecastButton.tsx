import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ACCENT, SECONDARY } from '../constants/COLORS'
import { FONT_LARGE, RADIUS_SMALL, SPACE_LARGE } from '../constants/LAYOUT'

const ForecastButton = ({ navigation, selectedCity, id }) => {
    return (
        <Pressable
            onPress={() => {
                navigation.navigate('FutureForecast', {
                    city: selectedCity,
                    title: "vdfvdvdvbedtv",
                    id: id,
                })
            }}
            style={styles.forecastContainer}>
            <Text style={styles.forecastValue}
            >
                3 days forecast
            </Text>
        </Pressable>
    )
}

export default ForecastButton

const styles = StyleSheet.create({
    forecastContainer: {
        backgroundColor: SECONDARY,
        borderRadius: RADIUS_SMALL,
        justifyContent: 'center',
        height: 55,
        marginVertical: SPACE_LARGE,
        paddingHorizontal: SPACE_LARGE,
    },
    forecastValue: {
        color: ACCENT,
        fontSize: FONT_LARGE,
        fontWeight: 'bold',
    },
})