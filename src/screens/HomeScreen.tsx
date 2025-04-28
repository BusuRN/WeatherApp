import {
    Keyboard,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ACCENT, PRIMARY, } from '../constants/COLORS';
import {
    FONT_MEDIUM,
    SPACE_LARGE,
    SPACE_MEDIUM,
    SPACE_SMALL,
} from '../constants/LAYOUT';
import { ActivityIndicator } from 'react-native';
import Divider from '../components/Divider';
import { CITIES } from '../constants/CITIES';
import SunriseInfo from '../components/SunriseInfo';
import LatLonInfo from '../components/LatLonInfo';
import HourTemperatureInfo from '../components/HourTemperatureInfo';
import ForecastButton from '../components/ForecastButton';
import FutureForecast from '../components/FutureForecast';
import FavoritesCities from '../components/FavoritesCities';
import AsyncStorage from '@react-native-async-storage/async-storage';
import capitalizedFirstLetter from '../utils/capitalizedFirstLetter';

const HomeScreen = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('Bucuresti');
    const [focused, setFocused] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [selectedCity, setSelectedCity] = useState('Bucuresti')
    const [didInitialize, setDidInitialize] = useState(false)
    const [favourites, setFavourites] = useState<string[]>([])
    const [loading, setLoading] = useState(true);


    const filteredCities = CITIES.filter(city => {
        return city.nume.toLowerCase().includes(searchTerm.toLowerCase());
    }).splice(0, 6);


    useEffect(() => {
        const getAsyncData = async () => {
            const stringValue = await AsyncStorage.getItem("favourites")
            setFavourites(JSON.parse(stringValue))
            console.log(JSON.parse(stringValue))
        }
        getAsyncData();
    }, [])

    useEffect(() => {
        const saveLastCity = async () => {
            console.log("selectedCity", selectedCity);
            if (!didInitialize) {
                return
            }
            await AsyncStorage.setItem('lastCity', selectedCity)
        }
        saveLastCity()
    }, [selectedCity, didInitialize])


    useEffect(() => {
        const loadLastCity = async () => {
            const lastCity = await AsyncStorage.getItem('lastCity')

            console.log("lastCity", lastCity);

            if (lastCity) {

                setSelectedCity(lastCity)
                setSearchTerm(capitalizedFirstLetter(lastCity))
            }
            setDidInitialize(true)
        }
        loadLastCity()
    }, [])

    useEffect(() => {
        const getData = async () => {
            setLoading(true); // Start loading
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1e6c3383411a4a98aa4132232241112&q=${selectedCity}&days=14`);
            const data = await response.json();
            setWeatherData(data);
            setLoading(false); // Stop loading
        };
        getData();
    }, [selectedCity]);




    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: PRIMARY }}>
                <ActivityIndicator size="large" color={ACCENT} />
            </View>
        );
    }


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.searchCity}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search"
                    placeholderTextColor={`${ACCENT}80`}
                    selectionColor={ACCENT}
                    value={searchTerm}
                    // clearButtonMode='always'
                    onChangeText={(text) => {
                        setSearchTerm(text);
                        console.log(text);
                    }}
                    onFocus={() => {
                        setFocused(true);
                    }}
                    onBlur={() => {
                        setFocused(false);
                    }}
                />
                {focused &&
                    filteredCities.map(city => {
                        return (
                            <Pressable
                                key={city.nume}
                                onPress={() => {
                                    setSelectedCity(city.slug)
                                    setSearchTerm(city.nume)
                                    setFocused(false)
                                    Keyboard.dismiss()
                                }}
                            >
                                <Text style={styles.searchResult}
                                >
                                    {city.nume}
                                </Text>
                            </Pressable>
                        );
                    })}
            </View>
            <FutureForecast
                weatherData={weatherData}
                dateTitle={"Today"}
                condition={weatherData?.current?.condition.text}
                showDivider={true}
                temperature={weatherData?.current?.temp_c}
                feelsLike={weatherData?.current?.feelslike_c}
                minTemp={weatherData?.forecast?.forecastday?.[0]?.day?.mintemp_c}
                maxTemp={weatherData?.forecast?.forecastday?.[0]?.day?.maxtemp_c}
                showLastDivider={true}
                showFavorites={true}
                setFavourites={setFavourites}
                selectedCity={selectedCity}
                favourites={favourites}
                conditionCode={weatherData?.current?.condition?.code}
                isDay={weatherData?.current?.is_day}

            />
            {/* <View style={styles.feelsLikeContainer}>
                <Text style={styles.feelsLikeLabel}>Feels Like:</Text>
                <Text style={styles.feelsLikeValue}>
                    {`${weatherData?.current?.feelslike_c}°C`}
                </Text>
            </View>
            <View style={styles.temperatureContainer}>
                <Text style={styles.text}>
                    Min: {`${weatherData?.forecast?.forecastday?.[0]?.day?.mintemp_c}°C`}
                </Text>
                <Text style={styles.text}>
                    Max: {`${weatherData?.forecast?.forecastday?.[0]?.day?.maxtemp_c}°C`}
                </Text>
            </View> */}
            <HourTemperatureInfo weatherData={weatherData} />
            <ForecastButton navigation={navigation} selectedCity={selectedCity} id={23} />
            <FavoritesCities
                favourites={favourites}
                setFavourites={setFavourites}
                setSelectedCity={setSelectedCity}
                setSearchTerm={setSearchTerm}
            />
            {/* <Pressable style={{ backgroundColor: "teal", padding: 20, }}
                onPress={async () => {
                    await AsyncStorage.setItem("player", JSON.stringify({ name: "Busuioc", age: 44, level: 12 }))
                }}
            >
                <Text>Save Data</Text>
            </Pressable> */}
            {/* <Pressable style={{ backgroundColor: "pink", padding: 20 }}
                onPress={async () => {
                    const stringValue = await AsyncStorage.getItem("favourites")
                    setFavourites(JSON.parse(stringValue))

                    console.log(JSON.parse(stringValue))
                }}
            >
                <Text>Get Data</Text>
            </Pressable> */}
            <View style={styles.footerContainer}>
                <SunriseInfo weatherData={weatherData} />
                <Divider />
                <LatLonInfo weatherData={weatherData} />
            </View>
        </ScrollView >
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: PRIMARY,
        flex: 1,
    },
    scrollContent: {
        padding: SPACE_LARGE,
        flexGrow: 1,
    },
    searchCity: {
        borderWidth: 1.5,
        borderRadius: 28,
        borderColor: ACCENT,
        width: '100%',
        padding: SPACE_MEDIUM,
    },
    searchBar: {
        color: ACCENT,
        padding: SPACE_MEDIUM,
        fontWeight: '600',
        fontSize: 22,
        margin: -SPACE_MEDIUM,
    },
    searchResult: {
        color: ACCENT,
        fontSize: 24,
        fontWeight: '700',
        paddingVertical: SPACE_MEDIUM / 2,
    },
    weatherContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    },
    square: {
        width: 75,
        height: 75,
    },
    text: {
        color: ACCENT,
        fontSize: 24,
        marginVertical: 10,
        fontWeight: '700',
        textAlign: 'center',
    },
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
    footerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
});


