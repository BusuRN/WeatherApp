import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ACCENT } from '../constants/COLORS';

const Divider = () => {
  return (
    <View style={styles.divider}/>
  );
};

export default Divider;

const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: ACCENT,
    },

});
