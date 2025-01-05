/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import AppNavigator from './src/navigation/AppNavigator';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <AppNavigator></AppNavigator>
  );
}

const styles = StyleSheet.create({

});

export default App;
