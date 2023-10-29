import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Inter',
            'sans-serif',
        ].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 9,
                },
            },
        },
    },
    palette: {
        yellow: {
            main: '#FFC300'
        },
        white: {
            main: '#FFFFFF',
        },
        blue: {
            main: '#00BEFF',
            dark: '#003cff',
        },
        black: {
            main: '#000000'
        }
    }
})

export default theme
