import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CLOUDS } from '../constants/CLOUDS'
import { FONT_MEDIUM, SPACE_LARGE, SPACE_SMALL } from '../constants/LAYOUT'
import { ACCENT } from '../constants/COLORS'

const HourTemperatureInfo = ({ weatherData }) => {
    return (
        <View>
            <ScrollView style={styles.horizontalScroll} contentContainerStyle={styles.horizontalContentScroll}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {weatherData?.forecast?.forecastday?.[0]?.hour.map(hour => (
                    <View style={styles.weatherHourContainer} key={hour.time}>
                        <Text style={styles.weatherHourText}>{`${hour.temp_c}°C`}</Text>
                        <Image
                            style={styles.smallSquare}
                            source={CLOUDS.find((item) => {
                                return item.code === hour?.condition?.code
                            })?.dayIconImage}
                        />
                        <Text style={styles.weatherHourText}>
                            {hour.time.split(' ')[1]}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default HourTemperatureInfo

const styles = StyleSheet.create({
    horizontalScroll: {
        marginHorizontal: - SPACE_LARGE,
    },
    horizontalContentScroll: {
        paddingHorizontal: SPACE_SMALL,
    },
    weatherHourContainer: {
        alignItems: 'center',
        marginHorizontal: SPACE_SMALL,
        marginTop: SPACE_LARGE,
    },
    weatherHourText: {
        color: ACCENT,
        fontSize: FONT_MEDIUM,
        fontWeight: 'bold',
    },
    smallSquare: {
        width: 50,
        height: 50,
    },


})