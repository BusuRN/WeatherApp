import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import FutureForecastScreen from '../screens/FutureForecastScreen';
import AirQualityScreen from '../screens/AirQualityScreen';
import LogoHeader from '../components/LogoHeader';

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerTitle: () => <LogoHeader />,
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name='FutureForecast'
                    component={FutureForecastScreen}
                />
                <Stack.Screen
                    name='AirQuality'
                    component={AirQualityScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigator


const styles = StyleSheet.create({})