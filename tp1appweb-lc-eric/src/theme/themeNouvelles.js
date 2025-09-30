import { createTheme } from "@mui/material/styles";

export const themeNouvelles = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#003366',
        },
        secondary: {
            main: '#dfe9ff',        // Couleur plate secondaire
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
    customGradients: {
        secondary: 'linear-gradient(to bottom right, #f0f4ff, #dfe9ff)',
    },
    typography: {
        fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    },
    shape: {
        borderRadius: 8,
    },
});