import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ACCENT, SECONDARY } from '../constants/COLORS'
import { FONT_LARGE, RADIUS_LARGE, RADIUS_SMALL, RADIUS_XXLARGE, SPACE_LARGE, SPACE_SMALL } from '../constants/LAYOUT'
import capitalizedFirstLetter from '../utils/capitalizedFirstLetter'



const FavoritesCities = ({ favourites, setFavourites, setSelectedCity, setSearchTerm }) => {
    return (
        <View>
            <ScrollView
                style={styles.horizontalScroll}
                contentContainerStyle={styles.horizontalContentScroll}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {favourites.map((city) => {
                    return (
                        <Pressable
                            style={styles.favoritesContainer}
                            key={city}
                            onPress={() => {
                                setSelectedCity(city)
                                setSearchTerm(
                                    capitalizedFirstLetter(city)
                                )
                                // setSearchTerm(
                                //     city
                                //         .split("-")
                                //         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                //         .join("-")
                                // );
                            }}
                        >
                            <Text style={styles.favoritesValue}>
                                {/* {city} */}
                                {capitalizedFirstLetter(city)}
                                {/* {city.split("-").map((word) => {
                                    return word.charAt(0).toUpperCase() + word.slice(1)
                                }).join("-")} */}
                                {/* {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()} */}
                            </Text>
                        </Pressable>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default FavoritesCities

const styles = StyleSheet.create({

    horizontalScroll: {
        marginHorizontal: - SPACE_LARGE,
    },
    horizontalContentScroll: {
        paddingHorizontal: SPACE_SMALL,
    },
    favoritesContainer: {
        backgroundColor: SECONDARY,
        borderRadius: RADIUS_XXLARGE,
        marginHorizontal: SPACE_SMALL,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    favoritesValue: {
        color: ACCENT,
        fontSize: FONT_LARGE,
        fontWeight: 'bold',
    },

})