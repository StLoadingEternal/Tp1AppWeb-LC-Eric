import { createTheme } from "@mui/material/styles";

export const themeNouvelles = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#003366',
        },
        secondary: {
            main: '#006699',
        },
        accent: {
            main: '#FF6F61', // couleur d'accent ici si besoin
        },
        background: {
            default: '#F4F7FA',
            paper: '#ffffff',
        },
        text: {
            primary: '#212121',
            secondary: '#555',
        },
    },
    typography: {
        fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    },
    shape: {
        borderRadius: 8,
    },
});