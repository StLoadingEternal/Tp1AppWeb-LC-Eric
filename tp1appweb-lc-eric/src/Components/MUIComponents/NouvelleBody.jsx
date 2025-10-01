import * as React from 'react';
import {Card, CardMedia, CardContent, CardActions, IconButton, Typography, Box} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import InfoOutlineSharpIcon from '@mui/icons-material/InfoOutlineSharp';




export default function NouvelleBody({editer, supprimer, lire, newsProps}) {

    /*Corps d'une nouvelle affichant les informations de la nouvelle et permettant diverses actions sur la nouvelle (modifier, supprimer, lire)*/
    return (
        <Card
            className={"makeitglass"}
            sx={{
                maxWidth: 500,
                height: '100%',
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
            <CardMedia
                component="img"
                height="280"
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
                <IconButton aria-label="Détails" onClick={() => lire(newsProps.id)}>
                    <InfoOutlineSharpIcon />
                </IconButton>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'text.primary',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        marginLeft: 'auto'
                    }}
                >
                    {newsProps.categorie}
                </Typography>
            </CardActions>
        </Card>
    );
}
