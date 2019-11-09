import * as $C from '../constants/colors';

const breakpoints = ['320px', '640px', '1024px', '1400px'];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const space = [0, 4, 8, 16, 32, 40, 48, 56, 64, 128, 256, 512];
const fontSizes = [12, 14, 16, 18, 20, 24, 32, 42];

const colors = {
    BLUE_DARK: $C.BLUE_DARK,
    BLUE_GRADIENT: $C.BLUE_GRADIENT,
    BLUE_TRANSPARENT: $C.BLUE_TRANSPARENT,
    BLUE_WHITE: $C.BLUE_WHITE,
    GRAY: $C.GRAY,
    GRAY_DARK: $C.GRAY_DARK,
    GRAY_MEDIUM: $C.GRAY_MEDIUM,
    GRAY_WHITE: $C.GRAY_WHITE,
    GRAY_WHITE_TRANSPARENT: $C.GRAY_WHITE_TRANSPARENT,
    ORANGE_DARK: $C.ORANGE_DARK,
    ORANGE_GRADIENT: $C.ORANGE_GRADIENT,
    ORANGE_TRANSPARENT: $C.ORANGE_TRANSPARENT,
    ORANGE_LIGHT: $C.ORANGE_LIGHT,
    TRANSPARENT: $C.TRANSPARENT,
    WHITE: $C.WHITE
};

const fontFamilies = {
    poppins: '"Poppins", sans-serif',
};

const textStyles = {
    headLine1: {
        as: 'h1',
        fontSize: [7],
        fontWeight: 'normal',
        lineHeight: ['48px'],
        fontFamily: fontFamilies.poppins
    },
    headLine2: {
        as: 'h1',
        fontSize: [6],
        fontWeight: 'normal',
        lineHeight: ['36px'],
        fontFamily: fontFamilies.poppins
    },
    headLine3: {
        as: 'h1',
        fontSize: [5],
        fontWeight: 'bold',
        lineHeight: ['28px'],
        fontFamily: fontFamilies.poppins
    },
    headLine4: {
        as: 'h1',
        fontSize: [4],
        fontWeight: 'bold',
        lineHeight: ['24px'],
        fontFamily: fontFamilies.poppins
    },
    headLine5: {
        as: 'h3',
        fontSize: [3],
        fontWeight: 'normal',
        lineHeight: ['24px'],
        fontFamily: fontFamilies.poppins
    },
    paragraph: {
        as: 'p',
        fontSize: [2],
        fontWeight: 'normal',
        lineHeight: ['24px'],
        fontFamily: fontFamilies.poppins
    },
    spanText: {
        as: 'h5',
        fontSize: [1],
        fontWeight: 'normal',
        lineHeight: ['18px'],
        fontFamily: fontFamilies.poppins
    },
    labelText: {
        as: 'h6',
        fontSize: [0],
        fontWeight: 'normal',
        lineHeight: ['14px'],
        fontFamily: fontFamilies.poppins
    }
};

const sizes = ['400px', '720px', '1124px', '1480px'];

export default {
    breakpoints,
    colors,
    fontSizes,
    space,
    textStyles,
    sizes
};