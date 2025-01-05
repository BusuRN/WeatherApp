import { Dimensions, Appearance, Platform } from 'react-native';

// Screen Dimensions
export const SCREEN_HEIGHT: number = Dimensions.get('screen').height;
export const SCREEN_WIDTH: number = Dimensions.get('screen').width;

// Misc
export const PLATFORM_OS = Platform.OS;
export const IS_ANDROID: boolean = Platform.OS === 'android';
export const IS_IOS: boolean = Platform.OS === 'ios';
export const IS_DARK: boolean = (Appearance.getColorScheme() === 'dark');

// Border Radius
export const RADIUS_XXSMALL = 2;
export const RADIUS_XSMALL = 4;
export const RADIUS_SMALL = 8;
export const RADIUS_MEDIUM = 12;
export const RADIUS_LARGE = 16;
export const RADIUS_XLARGE = 18;
export const RADIUS_XXLARGE = 22;

//  Border widths
export const BORDER_XXSMALL = 0.5;
export const BORDER_XSMALL = 1;
export const BORDER_SMALL = 1.5;
export const BORDER_MEDIUM = 2;
export const BORDER_LARGE = 2.5;
export const BORDER_XLARGE = 3;
export const BORDER_XXLARGE = 3.5;

// Spacing
export const SPACE_XXSMALL = 2;
export const SPACE_XSMALL = 4;
export const SPACE_SMALL = 8;
export const SPACE_MEDIUM = 12;
export const SPACE_LARGE = 16;
export const SPACE_XLARGE = 18;
export const SPACE_XXLARGE = 22;
export const BOTTOM_SCREEN_SPACE = SPACE_XLARGE * 2;

// Font
export const FONT_XXSMALL = 10;
export const FONT_XSMALL = 12;
export const FONT_SMALL = 14;
export const FONT_MEDIUM = 16;
export const FONT_LARGE = 18;
export const FONT_XLARGE = 20;
export const FONT_XXLARGE = 24;


// Workouts
export const EXERCISE_DETAILS_CARD_WIDTH = SCREEN_WIDTH;
export const EXERCISE_DETAILS_CARD_HEIGHT = Math.round(SCREEN_WIDTH / 0.746);
export const EXERCISE_DETAILS_REST_CARD_HEIGHT = Math.round(SCREEN_WIDTH / 1.2);
