import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import FutureForecastScreen from '../screens/FutureForecastScreen';
import AirQualityScreen from '../screens/AirQualityScreen';
import LogoHeader from '../components/LogoHeader';
import { PRIMARY } from '../constants/COLORS';

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    {
                        headerTitle: () => <LogoHeader />,
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: PRIMARY,
                            height: 100,
                        },
                    }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        // headerStyle: { backgroundColor: PRIMARY },
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