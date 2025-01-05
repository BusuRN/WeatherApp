import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FutureForecast from '../components/FutureForecast'

const FutureForecastScreen = ({ navigation, route }) => {
    const city = route.params?.city
    const title = route.params?.title
    const id = route.params?.id

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=1e6c3383411a4a98aa4132232241112&q=${city}&days=7`);
            const data = await response.json();
            setWeatherData(data);
        };
        getData();
    }, []);


    return (
        <FutureForecast
            weatherData={weatherData}
            dateTitle={weatherData?.forecast?.forecastday?.[0]?.date}
            condition={weatherData?.forecast?.forecastday?.[0]?.day?.condition?.text}
        />
    )
}

export default FutureForecastScreen

const styles = StyleSheet.create({

})