import { Grid, TextField, Typography, Button } from "@mui/material";
import NouvelleModel from "../../models/NouvelleModel.js";
import CategorieDeroulante from "../MUIComponents/CategorieDeroulante.jsx";

export default function FormNews({changerNouvelle, ajouterNouvelle, nouvelle, onClose }) {


    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        //Données du critère ajouter ou modifier
        const nouvelleSoumise = new NouvelleModel(
            nouvelle?.id,
            formData.get("date"),
            formData.get("titre"),
            formData.get("image"),
            formData.get("texte"),
            formData.get("resume"),

            nouvelle?.createur || "", // on garde les createurs si déjà définis
            formData.get("categorie")
        );

        if (nouvelle === undefined) {
            // Ajout quand aucune nouvelle n'est passée
            ajouterNouvelle(nouvelleSoumise);
        } else {
            // Modification dans le cas contraire
            changerNouvelle(nouvelleSoumise);
        }
        //Fermerture du formulaire
        if (onClose)
            onClose();
    }

    return (
        /*Modification ou ajout d'un nouveau critère*/
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} padding={4}>
                <Grid item xs={12}>
                    <Typography variant="h4" textAlign="center">{nouvelle ? "Modifier une nouvelle" : "Ajouter une nouvelle"}</Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        name="titre"
                        label="Titre"
                        defaultValue={nouvelle?.titre}
                        variant="outlined"
                        fullWidth
                        required

                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        name="resume"
                        label="Résumé"
                        defaultValue={nouvelle?.resume}
                        variant="outlined"
                        fullWidth
                        required
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        name="texte"
                        label="Contenu"
                        defaultValue={nouvelle?.texte}
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        required
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        name="image"
                        label="Image (URL)"
                        defaultValue={nouvelle?.image}
                        variant="outlined"
                        fullWidth
                        required

                    />
                </Grid>

                <CategorieDeroulante/>

                <Grid item xs={12} sm={6}>
                    <TextField
                        name="date"
                        label="Date"
                        type="date"
                        defaultValue={nouvelle?.date}
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        required
                    />
                </Grid>

                <Grid item xs={12} sm={6} textAlign="center">
                    <Button variant="contained" color="primary" type="submit">
                        Enregistrer
                    </Button>
                    <Button variant="outlined" color="accent" onClick={onClose} style={{ marginLeft: 10 }}>
                        Annuler
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}