import { createTheme } from "@mui/material/styles";

//Theme clair
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#003366',
        },
        secondary: {
            main: '#dfe9ff',// Couleur plate secondaire
        },
        accent: {
            main: '#FF6F61', // couleur d'accent ici si besoin
        },
        background: {
            default: "",
            paper: '#edf2f7',
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

//Theme sombre
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#7e57c2',
        },
        accent: {
            main: '#FF8A65',
        },
        background: {
            default: '',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#bbbbbb',
        },
    },
    typography: {
        fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    },
    shape: {
        borderRadius: 8,
    },
});