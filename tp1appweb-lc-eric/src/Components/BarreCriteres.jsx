import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useContext} from "react";
import {CritereContext} from "./CritereContext.jsx";


export default function BarreCriteres({criteres, critereSelectedId, setCritereSelection}){
    const critereContext = useContext(CritereContext);

    /**
     * Cette fonction marche comme un toggle pour selectionner et deselectionner l'id
     * @param id
     */
    function selectionner(id){
        setCritereSelection((critereSelectedId === id ? null : id));
    }

    return (
        <Box>
            <Typography variant="h4" className="grandTitre" gutterBottom>
                Les Critères
            </Typography>

            {/* Container scrollable horizontalement */}
            <Box
                className={"barreCritere"}
            >
                {critereContext.criteres.length > 0 ? (
                    critereContext.criteres.map(cr => (
                        <>
                            <Card
                                key={cr.id}
                                onClick={() => selectionner(cr.id)}
                                className={critereSelectedId === cr.id ? "selected" : ""} // appliquer un style si le critere appartient a l'user
                                sx={{ minWidth: 250, flexShrink: 0, maxWidth: 345 }}>
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

                                    <Button
                                        disabled={!criteres.includes(cr)} // desactive le bouton si le critere n'appartient pas a l'utilisateur
                                        onClick={() => critereContext.setCriteres(old => old.filter(critereSelected => cr.id !== critereSelected.id))}
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