import Typography from "@mui/material/Typography";
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useContext} from "react";
import {CritereContext} from "./Contexts/CritereContext.jsx";


export default function BarreCriteres({criteres, critereSelectedId, setCritereSelection}){
    const critereContext = useContext(CritereContext);

    /**
     * Cette fonction marche comme un toggle pour selectionner et deselectionner l'id
     * @param id
     */
    function selectionner(id){
        setCritereSelection((critereSelectedId === id ? null : id));
    }

    /**
     * Cette fonction recoit, l'id d'un critere qu'il doit supprimer
     * @param id
     */
    function supprimerCritere(id){
        critereContext.setCriteres(old => old.filter(critereSelected => id !== critereSelected.id))
    }


    return (
        <Box
        >
            <Typography variant="h4" className="grandTitre" gutterBottom sx={{
                fontSize: { xs: '18px', sm: '22px', md: '28px' },
            }}>
                Les Critères
            </Typography>

            {/* Container scrollable horizontalement */}
            <Box
                className={"barreCritereContent"}
            >
                {critereContext.criteres.length > 0 ? (
                    critereContext.criteres.map(cr => (
                        <>
                            <Card
                                key={cr.id}
                                onClick={() => selectionner(cr.id)}
                                // appliquer un style si le critere appartient a l'user
                                sx={{ minWidth: 250, flexShrink: 0, maxWidth: 345, backgroundColor: critereSelectedId === cr.id ? "accent.main" : "" }}>
                                <CardActionArea>
                                    {/* Image ou icône pour le critère (optionnel) */}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {cr.titre}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                                            Catégorie : {cr.categorie}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                                            Année : {cr.anneeNouvelle}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                                            Mots-clés : {cr.motsCles.join(", ")}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>

                                    <Button
                                        disabled={!criteres.includes(cr)} // desactive le bouton si le critere n'appartient pas a l'utilisateur
                                        variant="contained"
                                        onClick={() => supprimerCritere(cr.id)}
                                        size="small" color="text.secondary">Supprimer</Button>
                                </CardActions>
                            </Card>
                        </>

                    ))
                ) : (
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            color: 'primary.main',
                            fontWeight: 'bold',
                            fontSize: '1.5rem',
                            mt: 2
                        }}
                    >
                        Aucun critères existant
                    </Typography>
                )}
            </Box>
        </Box>
    );
}