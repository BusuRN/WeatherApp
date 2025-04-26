import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import Divider from './Divider'
import { CLOUDS } from '../constants/CLOUDS'
import { ACCENT, WHITE } from '../constants/COLORS'
import RNVectorIcon from './RNVectorIcon'
import AsyncStorage from '@react-native-async-storage/async-storage'
import formatTemperature from '../utils/formatTemperature'


interface FutureForecastProps {
    dateTitle: string
    condition: string
    showDivider: boolean
    temperature: number
    feelsLike?: number
    minTemp: number
    maxTemp: number
    showLastDivider: boolean
    showFavorites?: boolean
    setFavourites?: Dispatch<SetStateAction<string[]>>
    selectedCity?: string
    favourites?: string[]
    conditionCode: number
    is_day: 0 | 1,

}

const FutureForecast: FC<FutureForecastProps> = ({ dateTitle, condition, showDivider,
    temperature, feelsLike, minTemp, maxTemp, showLastDivider, showFavorites,
    setFavourites, selectedCity, favourites, conditionCode, is_day }) => {
    return (
        <View>
            <View style={styles.titleRow}>
                <Text style={styles.text}>{dateTitle}</Text>
                {showFavorites && setFavourites && (
                    <Pressable
                        style={styles.favorites}
                        hitSlop={{
                            left: 30,
                            right: 30,
                            bottom: 30,
                        }}

                        onPress={() => {

                            if (selectedCity && favourites?.includes(selectedCity)) {
                                const newFavourites = favourites.filter((item) => {
                                    return item != selectedCity
                                })
                                setFavourites(newFavourites)
                            } else if (favourites && selectedCity) {
                                setFavourites([...favourites, selectedCity])
                                AsyncStorage.setItem("favourites", JSON.stringify([...favourites, selectedCity]))

                            }
                        }}
                    >
                        <RNVectorIcon
                            name={selectedCity && favourites?.includes(selectedCity) ? "heart" : "hearto"}
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
                    <Text style={styles.text}>{formatTemperature(temperature)}</Text>
                    {/* <Text style={styles.text}>{`${weatherData?.current?.temp_c}°C`}</Text> */}
                </View>

                {is_day === 1 ? (
                    <Image
                        style={styles.square}
                        source={CLOUDS.find((item) => {
                            return item.code === conditionCode
                        })?.dayIconImage}
                    />
                ) : (
                    <Image
                        style={styles.square}
                        source={CLOUDS.find((item) => {
                            return item.code === conditionCode
                        })?.nightIconImage}
                    />
                )}
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
                    Min: {formatTemperature(minTemp)}
                    {/* Min: {`${weatherData?.forecast?.forecastday?.[0]?.day?.mintemp_c}°C`} */}
                </Text>
                <Text style={styles.text}>
                    Max: {formatTemperature(maxTemp)}
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


