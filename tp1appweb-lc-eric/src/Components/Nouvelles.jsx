import Nouvelle from "./Nouvelle.jsx";
import {useContext, useState} from "react";
import {Grid} from "@mui/material";
import {NewsContext} from "./NewsContext.jsx";
import NewsDialog from "./DrawerComponents/NewsDialog.jsx";
import ConfirmationDialog from "./DrawerComponents/ConfirmationDialog.jsx";
import FormNews from "./FormComponents/FormNews.jsx";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {parse, v4 as uuidv4} from 'uuid';
import Typography from "@mui/material/Typography";
import {CritereContext} from "./CritereContext.jsx";

export default function Nouvelles({nouvelles, setNouvelles, criteres}) {
    const [editing, setEditing] = useState({ isEditing: false, id: -1 });
    const [deleting, setDeleting] = useState({ isDeleting: false, id: -1 });


    //A voir l'utilisation de la référence
    //utilisation de UUID pour les ID

    /**
     * Cette methode permet de checker si la nouvelle est verifi/e le critere
     * @param cr
     * @param nouvelle
     * @returns {false|*|boolean}
     */
    function verifieCriteres(cr, nouvelle) {
        const texteNouvelle = (nouvelle.texte + nouvelle.resume).toLowerCase();
        const anneeNouvelle = new Date(nouvelle.date).getFullYear();


        return (
            // si l'annee selectionne correspond
            (parseInt(cr.anneeNouvelle) === anneeNouvelle) &&
            // si l'un des mots cles est contenu dans le resume ou le texte
            cr.motsCles.some(mot => texteNouvelle.includes(mot.toLowerCase())) &&
            // si la categorie correspond
            cr.categorie.toLowerCase() === nouvelle.categorie.toString().toLowerCase()
        );
    }

    function filtrerNouvelles() {
        console.log(criteres)
        return nouvelles
            .filter(nouvelle => {


                // Si aucun critère, on affiche tout
                if (criteres.length === 0)
                    return true;

                // Vérifier si au moins tous les criteres correspondent
                return criteres.every(cr => { // on parcours les criteres
                    return verifieCriteres(cr, nouvelle);
                });
            })
            .map(nouvelle => (
                <Nouvelle
                    newsProps={nouvelle}
                    key={nouvelle.id}
                    editer={editer}
                    supprimer={supprimer}
                />
            ));
    }




    function editer(id) {
        setEditing({ isEditing: true, id: id });
    }

    function supprimer(id) {
        setDeleting({ isDeleting: true, id: id });
    }

    function supprimerNouvelle(id) {
        setNouvelles(old => old.filter(nouvelle => nouvelle.id !== id));
        setDeleting({ isDeleting: false, id: -1 });
    }

    function changerNouvelle(nouvelle) {
        setNouvelles(old => [nouvelle, ...old.filter(n => n.id !== nouvelle.id)]);
        setEditing({ isEditing: false, id: -1 });
    }

    function ajouterNouvelle(nouvelle) {
        nouvelle.id = uuidv4(); // Id unique
        setNouvelles(old => [nouvelle, ...old]);
    }

    const nouvelleEditee = nouvelles.find(n => n.id === editing.id);
    const nouvelleASupprimer = nouvelles.find(n => n.id === deleting.id);
    const nouvellesFiltres = filtrerNouvelles();

    return (
        <>
            <Typography
                variant="h3"
                gutterBottom
                className={"grandTitre"}
            >
                Actu Sport
            </Typography>
            <Button onClick={() => {setEditing({ isEditing: true, id: -1 });}}>
                <AddCircleOutlineIcon />
                Ajouter une Nouvelle
            </Button>

            <Grid container spacing={2}>
                {nouvellesFiltres}
            </Grid>

            {/* Dialog modifier */}
            <NewsDialog
                open={editing.isEditing}
            >
                <FormNews
                    changerNouvelle={changerNouvelle}
                    ajouterNouvelle={ajouterNouvelle}
                    nouvelle={nouvelleEditee}
                    onClose={() => setEditing({ isEditing: false, id: -1 })}
                >
                </FormNews>
            </NewsDialog>

            {/* Dialog de confirmation de suppression */}
            <ConfirmationDialog
                open={deleting.isDeleting}
                onClose={() => setDeleting({ isDeleting: false, id: -1 })}
                nouvelle={nouvelleASupprimer}
                supprimerNouvelle={supprimerNouvelle}
            />
        </>
    );
}