import Nouvelle from "./Nouvelle.jsx";
import {useContext, useState} from "react";
import {Grid} from "@mui/material";
import {NewsContext} from "./NewsContext.jsx";
import NewsDialog from "./DialogComponents/NewsDialog.jsx";
import ConfirmationDialog from "./DialogComponents/ConfirmationDialog.jsx";
import FormNews from "./FormComponents/FormNews.jsx";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {parse, v4 as uuidv4} from 'uuid';
import Typography from "@mui/material/Typography";
import {CritereContext} from "./CritereContext.jsx";
import TexteDialog from "./DialogComponents/TexteDialog.jsx";
import Box from "@mui/material/Box";

export default function Nouvelles({nouvelles, currentUser, criteres}) {
    //Etat qui indique si un dialog est ouvert
    const [openDialog, setOpenDialog] = useState({isEditing: false, id: -1, action: ""});


    //Contexte des nouvelles
    const newsContext = useContext(NewsContext);

    //Utilisateur actuel
    console.log(currentUser)


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
                    lire={lire}
                />
            ));
    }




    //Dialog pour modifier
    function editer(id) {
        setOpenDialog({isEditing: true, id: id, action: "editer"});
    }

    //Dialog pour supprimer
    function supprimer(id) {
        setOpenDialog({isEditing: true, id: id, action: "supprimer"});
    }

    //Dialog pour lire
    function lire(id) {
        setOpenDialog({isEditing: true, id: id, action: "lire"});
    }

    //Actions qui change l'état

    //Suppression
    function supprimerNouvelle(id) {
        newsContext.setNews(old => old.filter(nouvelle => nouvelle.id !== id));
        setOpenDialog({isEditing: false, id: -1, action: ""})
    }

    function changerNouvelle(nouvelle) {
        newsContext.setNews(old => [nouvelle, ...old.filter(n => n.id !== nouvelle.id)]);

        // newsContext.setNews(old => {
        //     let nouvelleChanger = old.find(n => parseInt(nouvelle.id) === parseInt(n.id) ).clone();
        //     nouvelleChanger.titre = nouvelle.titre;
        //     nouvelleChanger.resume = nouvelle.resume;
        //     nouvelleChanger.date = nouvelle.date;
        //     nouvelleChanger.texte = nouvelle.texte;
        //     nouvelleChanger.image = nouvelle.image;
        //
        //     return [nouvelleChanger, ...old.filter(n => n.id !== nouvelle.id)]
        // })
    }

    //Ajouter
    function ajouterNouvelle(nouvelle) {
        nouvelle.id = uuidv4();//Id unique
        nouvelle.createurs = [currentUser]// Id des créateurs
        newsContext.setNews(old => [nouvelle, ...old]);
    }

    //La nouvelle {id} sur laquelle on effectue une action
    const nouvelleSelectionne = newsContext.news.find(n => n.id === openDialog.id);
    const nouvellesFiltres = filtrerNouvelles();

    return (
        <>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: 'primary.main',
                    mt: 4,
                    mb: 2,
                    letterSpacing: 2,
                }}
            >
                Actualités Sportives Mondiales
            </Typography>
            {/*Ajout d'une nouvelle au clic. id = -1 */}
            <Box sx={{textAlign: 'center', mb: 3}}>
                <Button onClick={() => {
                    setOpenDialog({isEditing: true, id: -1, action: "editer"});
                }}>
                    <AddCircleOutlineIcon/>
                    Ajouter une Nouvelle
                </Button>
            </Box>
            <Grid container spacing={2}>
                {nouvellesFiltres}
            </Grid>

            {/* Modifier une nouvelle */}
            <NewsDialog
                open={openDialog.isEditing && openDialog.action === "editer"}
            >
                <FormNews
                    changerNouvelle={changerNouvelle}
                    ajouterNouvelle={ajouterNouvelle}
                    nouvelle={nouvelleSelectionne}
                    onClose={() => setOpenDialog({isEditing: false, id: -1, action: ""})}
                >
                </FormNews>
            </NewsDialog>
            {/* Supprimer une nouvelle */}
            <ConfirmationDialog
                open={openDialog.isEditing && openDialog.action === "supprimer"}
                nouvelle={nouvelleSelectionne}
                supprimerNouvelle={supprimerNouvelle}
                onClose={() => setOpenDialog({isEditing: false, id: -1, action: ""})}
            />
            {/* Lire une nouvelle */}
            <TexteDialog
                open={openDialog.isEditing && openDialog.action === "lire"}
                nouvelle={nouvelleSelectionne}
                onClose={() => setOpenDialog({isEditing: false, id: -1, action: ""})}
            />
        </>
    );
}