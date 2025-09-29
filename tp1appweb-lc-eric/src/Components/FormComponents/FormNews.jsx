import { Grid, TextField, Typography, Button } from "@mui/material";
import NouvelleModel from "../../models/NouvelleModel.js";

export default function FormNews({changerNouvelle, ajouterNouvelle, nouvelle, onClose }) {


    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const nouvelleSoumise = new NouvelleModel(
            nouvelle?.id,
            formData.get("date"),
            formData.get("titre"),
            formData.get("image"),
            formData.get("texte"),
            formData.get("resume"),
            nouvelle?.createurs || "", // on garde les createurs si déjà définis
            nouvelle?.categorie || "" // categorie
        );

        if (nouvelle === undefined) {
            // Ajout
            ajouterNouvelle(nouvelleSoumise);
        } else {
            // Édition
            changerNouvelle(nouvelleSoumise);
        }
        if (onClose)
            onClose();
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} padding={4}>
                <Grid item xs={12}>
                    <Typography variant="h4" textAlign="center">Modifier une nouvelle</Typography>
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

                <Grid item xs={12}>
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

                <Grid item xs={12}>
                    <TextField
                        name="image"
                        label="Image (URL)"
                        defaultValue={nouvelle?.image}
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

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

                <Grid item xs={12} textAlign="center">
                    <Button variant="contained" color="primary" type="submit">
                        Enregistrer
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={onClose} style={{ marginLeft: 10 }}>
                        Annuler
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}