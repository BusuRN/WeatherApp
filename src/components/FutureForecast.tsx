import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Divider from './Divider'
import { CLOUDS } from '../constants/CLOUDS'
import { ACCENT, WHITE } from '../constants/COLORS'
import RNVectorIcon from './RNVectorIcon'


const FutureForecast = ({ weatherData, dateTitle, condition, showDivider,
    temperature, feelsLike, minTemp, maxTemp, showLastDivider, showFavorites,
    setFavourites, selectedCity, favourites }) => {
    return (
        <View>
            <View style={styles.titleRow}>
                <Text style={styles.text}>{dateTitle}</Text>
                {showFavorites && (
                    <Pressable style={styles.favorites}
                        onPress={() => {
                            if (favourites.includes(selectedCity)) {
                                const newFavourites = favourites.filter((item) => {
                                    return item != selectedCity
                                })
                                setFavourites(newFavourites)
                            } else {
                                setFavourites([...favourites, selectedCity])

                            }
                        }}
                    >
                        <RNVectorIcon
                            name={favourites.includes(selectedCity) ? "heart" : "hearto"}
                            family='AntDesign'
                            size={30}
                            color={WHITE}
                        />
                    </Pressable>
                )}

            </View>
            {showDivider && <Divider />}
            {/* <Divider /> */}
            <View style={styles.weatherContainer}>
                <View>
                    <Text style={styles.text}>
                        {condition}
                        {/* {weatherData?.current?.condition.text} */}
                    </Text>
                    <Text style={styles.text}>{`${temperature}°C`}</Text>
                    {/* <Text style={styles.text}>{`${weatherData?.current?.temp_c}°C`}</Text> */}
                </View>
                <Image
                    style={styles.square}
                    source={CLOUDS.find((item) => {
                        return item.code === weatherData?.current?.condition?.code
                    })?.dayIconImage}
                />
            </View>
            {showDivider && <Divider />}
            {/* <Divider /> */}
            {
                !!feelsLike && (
                    <View style={styles.feelsLikeContainer}>
                        <Text style={styles.feelsLikeLabel}>Feels Like:</Text>
                        <Text style={styles.feelsLikeValue}>
                            {`${feelsLike}°C`}
                            {/* {`${weatherData?.current?.feelslike_c}°C`} */}
                        </Text>
                    </View>
                )
            }
            <View style={styles.temperatureContainer}>
                <Text style={styles.text}>
                    Min: {`${minTemp}°C`}
                    {/* Min: {`${weatherData?.forecast?.forecastday?.[0]?.day?.mintemp_c}°C`} */}
                </Text>
                <Text style={styles.text}>
                    Max: {`${maxTemp}°C`}
                    {/* Max: {`${weatherData?.forecast?.forecastday?.[0]?.day?.maxtemp_c}°C`} */}
                </Text>
            </View>
            {showLastDivider && <Divider />}
            {/* <Divider /> */}
        </View >
    )
}

export default FutureForecast

const styles = StyleSheet.create({
    weatherContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleRow: {
        justifyContent: 'center',
    },
    text: {
        color: ACCENT,
        fontSize: 24,
        marginVertical: 10,
        fontWeight: '700',
        textAlign: 'center',
        alignSelf: 'center',
    },
    favorites: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
    },
    square: {
        width: 75,
        height: 75,
    },
    feelsLikeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    feelsLikeValue: {
        color: ACCENT,
        fontSize: 36,
        marginVertical: 10,
        fontWeight: '700',
        textAlign: 'center',
    },
    feelsLikeLabel: {
        color: ACCENT,
        fontSize: 24,
        marginVertical: 10,
        fontWeight: '700',
        textAlign: 'center',
    },
    temperatureContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})