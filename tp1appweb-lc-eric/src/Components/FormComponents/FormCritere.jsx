import { Button, Grid, TextField, Typography } from "@mui/material";
import CritereModel from "../../models/CritereModel.js";
import {useContext, useRef} from "react";
import {CritereContext} from "../Contexts/CritereContext.jsx";
import {UtilisateurContext} from "../Contexts/utilisateurContext.jsx";
import CategorieDeroulante from "../MUIComponents/CategorieDeroulante.jsx";

export default function FormCritere() {
    const critereContext = useContext(CritereContext);
    let critereRefId = useRef(0);
    let utilisateurContext = useContext(UtilisateurContext);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        //Données du nouveau critère
        let id = ++critereRefId.current;
        let noReference = utilisateurContext.userActu.id;
        let titre = formData.get("titre");
        let dateCritere = formData.get("dateCritere");
        let anneeNouvelle = formData.get("anneeNouvelle");
        let motsCles = [formData.get("motCle1"), formData.get("motCle2"), formData.get("motCle3")].filter(Boolean); // filtre les valeurs vides ou nulles
        let categorie = formData.get("categorie");

        let critere = new CritereModel(id, noReference, titre, dateCritere, categorie, anneeNouvelle, motsCles);

        critereContext.setCriteres(old => [...old, critere]);
        e.target.reset();

    }

    return (
        /* Formulaire d'ajout de critère*/
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" textAlign="left">
                        Ajouter un critère
                    </Typography>
                </Grid>

                {/* Titre */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="titre"
                        label="Titre"
                        placeholder="Titre du critère"
                        variant="filled"
                        fullWidth
                        required
                    />
                </Grid>

                {/* Date du critère (Mois Année) */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="dateCritere"
                        label="Date du critère"
                        type="date"
                        variant="filled"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                </Grid>

                {/* Année des nouvelles */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="anneeNouvelle"
                        label="Année des nouvelles"
                        type="number"
                        placeholder="Ex : 2024"
                        variant="filled"
                        fullWidth
                        required
                    />
                </Grid>

                {/* Mots-clés */}
                <Grid item xs={12}>
                    <Typography variant="subtitle1" textAlign="left">
                        Mots-clés (3 maximum)
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                name="motCle1"
                                label="Mot-clé 1"
                                variant="filled"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                name="motCle2"
                                label="Mot-clé 2"
                                variant="filled"
                                fullWidth

                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                name="motCle3"
                                label="Mot-clé 3"
                                variant="filled"
                                fullWidth

                            />
                        </Grid>
                    </Grid>
                </Grid>

                {/* Catégorie */}
                <CategorieDeroulante></CategorieDeroulante>

                {/* Bouton de soumission */}
                <Grid item xs={12} textAlign="center">
                    <Button variant="contained" color="primary" type="submit">
                        Créer un nouveau critère
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}