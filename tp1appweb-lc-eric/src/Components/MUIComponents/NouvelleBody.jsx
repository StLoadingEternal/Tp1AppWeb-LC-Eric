import * as React from 'react';
import {Card, CardMedia, CardContent, CardActions, IconButton, Typography, Box} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import InfoOutlineSharpIcon from '@mui/icons-material/InfoOutlineSharp';
import {NewsContext} from "../NewsContext.jsx";




export default function NouvelleBody({editer, supprimer, newsProps }) {
    //Utilisation du newsContext
    //const newsContext = useContext(NewsContext);

    // //Effacer une nouvelle(Alert?)
    // function handleClear() {
    //     console.log(nouvelleModel);
    //     newsContext.setNews((ancien) =>
    //         ancien.filter((nouvelle) => nouvelle.noReference !== nouvelleModel.noReference)
    //     );
    // }

    return (
        <Card
            className={"makeitglass"}
            sx={{
                maxWidth: 500,
                margin: "auto",
                borderRadius: 3,
                boxShadow: 5,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 8
                }
            }}


        >
            {/* Image pleine largeur */}
            <CardMedia
                component="img"
                height="250"
                image={newsProps.image}
                alt={newsProps.titre}
                sx={{
                    objectFit: 'cover'
                }}

            />

            <Box sx={{ px: 3, pt: 2 , backgroundColor: "transparent"}}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {newsProps.titre}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {new Date(newsProps.date).toLocaleDateString("fr-FR", {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </Typography>
            </Box>

            <CardContent sx={{ px: 3, pt: 1 }} >
                <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    {newsProps.resume}
                </Typography>
            </CardContent>

            <CardActions disableSpacing sx={{ px: 2 }}>
                <IconButton aria-label="Modifier" onClick={() => editer(newsProps.id)}>
                    <ModeEditIcon />
                </IconButton>
                <IconButton aria-label="Supprimer" onClick={() => supprimer(newsProps.id)}>
                    <ClearIcon />
                </IconButton>
                <IconButton aria-label="Détails">
                    <InfoOutlineSharpIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
