import React from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

export type RNVectorIconFamily =
    | 'MaterialIcons'
    | 'MaterialCommunityIcons'
    | 'Feather'
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial';
export interface RNVectorIconProps {
    name: string;
    family?: RNVectorIconFamily;
    size?: number;
    color?: ColorValue;
    style?: ViewStyle | null;
}

const IconList = {
    MaterialIcons,
    MaterialCommunityIcons,
    Feather,
    AntDesign,
    Entypo,
    EvilIcons,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    Octicons,
    SimpleLineIcons,
    Zocial,
};

const RNVectorIcon: React.FC<RNVectorIconProps> = ({
    name = 'account',
    family = 'Feather',
    size = 15,
    color = '#000000',
    style,
    ...restProps
}) => {
    const Icon = IconList[family];

    if (Icon) {
        return (
            <Icon
                name={name}
                size={size}
                color={color}
                style={style}
                {...restProps}
            />
        );
    }

    console.warn(
        `[RNVectorIcon] - Error: could not find icon family with family:${family}`,
    );
    return null;
};

export default RNVectorIcon;
