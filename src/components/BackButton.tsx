import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { WHITE } from '../constants/COLORS';

const BackButton = () => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                navigation.goBack();
            }}
            style={styles.container}>
            <Text style={styles.backButton}>
                {"<"}
            </Text>
            {/* <RNVectorIcon
                name={'chevron-left'}
                family={'Feather'}
                size={37}
                color={WHITE}
            /> */}
        </Pressable>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    container: {
        marginLeft: -16,
    },
    backButton: {
        color: WHITE,

    },
});
