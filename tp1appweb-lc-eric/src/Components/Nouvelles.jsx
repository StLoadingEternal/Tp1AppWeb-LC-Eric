import Nouvelle from "./Nouvelle.jsx";
import {useContext, useState} from "react";
import {Grid} from "@mui/material";
import {NewsContext} from "./Contexts/NewsContext.jsx";
import NewsDialog from "./DialogComponents/NewsDialog.jsx";
import ConfirmationDialog from "./DialogComponents/ConfirmationDialog.jsx";
import FormNews from "./FormComponents/FormNews.jsx";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {v4 as uuidv4} from 'uuid';
import Typography from "@mui/material/Typography";
import TexteDialog from "./DialogComponents/TexteDialog.jsx";
import Box from "@mui/material/Box";
import appliquerFiltres from "../scripts/filtrerNouvelles.js";
import Role from "../models/Role.js";
import {CritereContext} from "./Contexts/CritereContext.jsx";

export default function Nouvelles({nouvelles, currentUser, critere}) {

    //Etat qui indique si un dialog est ouvert. aussi indique l'action a réalisé sur une nouvelle(id) quand on ouvre le dialog
    const [openDialog, setOpenDialog] = useState({isEditing: false, id: -1, action: ""});

    //Contexte des criteres
    const critereContext = useContext(CritereContext);

    //Contexte des nouvelles
    const newsContext = useContext(NewsContext);

    //Utilisateur actuel
    console.log(currentUser)

    /**
     * Cette methode permet de checker si la nouvelle est verifi/e le critere
     * @returns {false|*|boolean}
     */
    function filtrerNouvelles() {
        return appliquerFiltres(nouvelles, critere)
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


    /**
     * Ouvrir le dialog pour modifier une nouvelle
     * @param id
     */
    function editer(id) {
        setOpenDialog({isEditing: true, id: id, action: "editer"});
    }

    /**
     * Ouvrir le dialog pour confirmer une suppression de nouvelle
     * @param id
     */
    function supprimer(id) {
        setOpenDialog({isEditing: true, id: id, action: "supprimer"});
    }

    /**
     * Ouvrir le dialog pour lire le texte complet des nouvelles
     * @param id
     */
    function lire(id) {
        setOpenDialog({isEditing: true, id: id, action: "lire"});
    }

    //Actions qui change l'état

    //Suppression de la nouvelle implique la suppression du critere selectionne
    /**
     * supprimer une nouvelle. Supprime les critères concernant la nouvelle
     * @param id
     */
    function supprimerNouvelle(id) {
        newsContext.setNews(old => old.filter(nouvelle => nouvelle.id !== id));
        if (critere != null){
            // supprimer le critere appliqu/e
            critereContext.setCriteres(old => old.filter(c => critere.id !== c.id))
        }

        setOpenDialog({isEditing: false, id: -1, action: ""})
    }

    /**
     * Modifer une nouvelle
     * @param nouvelle
     */
    function changerNouvelle(nouvelle) {
        newsContext.setNews(old => [nouvelle, ...old.filter(n => n.id !== nouvelle.id)]);
    }

    /**
     * Ajouter une nouvelle
     * @param nouvelle
     */
    function ajouterNouvelle(nouvelle) {
        nouvelle.id = uuidv4();//Id unique
        nouvelle.createur = currentUser.id// Id du créateur
        newsContext.setNews(old => [nouvelle, ...old]);
    }

    //La nouvelle {id} sur laquelle on effectue une action (modifier, supprimer, nouvelle nulle => ajout d'une nouvelle)
    const nouvelleSelectionne = newsContext.news.find(n => n.id === openDialog.id);

    //Les nouvelles de l'utilisateurs filtrés par critère appliqué
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
                    mt: 2,
                    mb: 5,
                    letterSpacing: 2,
                }}
            >
                Actualités Sportives Mondiales
            </Typography>
            {/*Ajout d'une nouvelle au clic. id = -1 => aucune nouvelle n'est passée au formulaire. Seul les journalistes peuvent ajouter*/}
            {currentUser.role !== Role.ADMIN && (
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Button
                        onClick={() => {
                            setOpenDialog({ isEditing: true, id: -1, action: "editer" });
                        }}
                        startIcon={<AddCircleOutlineIcon />}
                    >
                        Ajouter une Nouvelle
                    </Button>
                </Box>
            )}
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