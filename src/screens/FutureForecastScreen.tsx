import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FutureForecast from '../components/FutureForecast'
import { PRIMARY } from '../constants/COLORS'

const FutureForecastScreen = ({ route }) => {
    const [forecastData, setForecastData] = useState(null);
    const city = route.params?.city
    const title = route.params?.title
    const id = route.params?.id

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1e6c3383411a4a98aa4132232241112&q=${city}&days=14`);
            const data = await response.json();
            console.log('Full forecast data:', data.forecast.forecastday);
            setWeatherData(data);
        };
        getData();
    }, []);


    return (
        <ScrollView style={styles.container}>
            {weatherData?.forecast?.forecastday?.map((item, index) => {
                console.log(item)
                return <FutureForecast
                    weatherData={weatherData}
                    dateTitle={item.date}
                    condition={item?.day?.condition?.text}
                    showDivider={false}
                    temperature={item.day.avgtemp_c}
                    minTemp={item.day.mintemp_c}
                    maxTemp={item.day.maxtemp_c}
                    showLastDivider={index < weatherData?.forecast?.forecastday.length - 1}
                    showFavorites={false}
                />
            })}

        </ScrollView>
    )
}

export default FutureForecastScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY,
        paddingHorizontal: 15,
    },
})