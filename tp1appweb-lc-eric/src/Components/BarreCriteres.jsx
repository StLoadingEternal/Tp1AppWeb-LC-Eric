import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useContext} from "react";
import {CritereContext} from "./CritereContext.jsx";


export default function BarreCriteres({criteres}){
    const critereContext = useContext(CritereContext);


    return (
        <Box>
            <Typography variant="h4" className="grandTitre" gutterBottom>
                Les Critères
            </Typography>

            {/* Container scrollable horizontalement */}
            <Box
                className={"barreCritere"}
            >
                {criteres.length > 0 ? (
                    criteres.map(cr => (
                        <>
                            <Card key={cr.id} sx={{ minWidth: 250, flexShrink: 0, maxWidth: 345 }}>
                                <CardActionArea>
                                    {/* Image ou icône pour le critère (optionnel) */}

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {cr.titre}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Catégorie : {cr.categorie}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Année : {cr.anneeNouvelle}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Mots-clés : {cr.motsCles.join(", ")}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>

                                    <Button onClick={() => critereContext.setCriteres(old => old.filter(critereSelected => cr.id !== critereSelected.id))}
                                            size="small" color="secondary">Supprimer</Button>
                                </CardActions>
                            </Card>
                        </>

                    ))
                ) : (
                    <Typography variant="h8">Pas de critères</Typography>
                )}
            </Box>
        </Box>
    );
}