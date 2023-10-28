import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Inter',
            'sans-serif',
        ].join(','),
        fontWeight: 500,
    }
})

export default theme