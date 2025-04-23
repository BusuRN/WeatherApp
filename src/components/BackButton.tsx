import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { WHITE } from '../constants/COLORS';
import RNVectorIcon from './RNVectorIcon';

const BackButton = () => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                navigation.goBack();
            }}
            style={styles.container}
            hitSlop={{
                right: 30,
                bottom: 20,
                top: 20,
            }}
        >
            <RNVectorIcon
                name={'chevron-left'}
                family={'Feather'}
                size={37}
                color={WHITE}
            />
        </Pressable>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    container: {
        marginLeft: -16,
        borderWidth: 1,
    },
    backButton: {
        color: WHITE,

    },
});
