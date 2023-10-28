const colors = {
    white: '#FFFFFF',
    black: '#000000',

    gray200: '#6b6b6b',

    gray800: '#1f1e25',
    gray900: '#131016',

    green500: '#00BFA6',
    red500: '#F44336',
};

export const theme = {
    ...colors,
    background: {
        bold: colors.gray900,
        light: colors.gray200,
    },
    text: {
        light: colors.white,
        bold: colors.gray200,
    },
};
