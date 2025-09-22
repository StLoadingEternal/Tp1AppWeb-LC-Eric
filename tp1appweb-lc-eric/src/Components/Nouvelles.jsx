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
import { v4 as uuidv4 } from 'uuid';
import Typography from "@mui/material/Typography";

export default function Nouvelles() {
    const [editing, setEditing] = useState({ isEditing: false, id: -1 });
    const [deleting, setDeleting] = useState({ isDeleting: false, id: -1 });

    const newsContext = useContext(NewsContext);

    const nouvelles = newsContext.news.map(news => (
        <Nouvelle
            {...news}
            key={news.id}
            editer={editer}
            supprimer={supprimer}
        />
    ));

    function editer(id) {
        setEditing({ isEditing: true, id: id });
    }

    function supprimer(id) {
        setDeleting({ isDeleting: true, id: id });
    }

    function supprimerNouvelle(id) {
        newsContext.setNews(old => old.filter(nouvelle => nouvelle.id !== id));
        setDeleting({ isDeleting: false, id: -1 });
    }

    function changerNouvelle(nouvelle) {
        newsContext.setNews(old => [nouvelle, ...old.filter(n => n.id !== nouvelle.id)]);
        setEditing({ isEditing: false, id: -1 });
    }

    function ajouterNouvelle(nouvelle) {
        nouvelle.id = uuidv4(); // Id unique
        newsContext.setNews(old => [nouvelle, ...old]);
    }

    const nouvelleEditee = newsContext.news.find(n => n.id === editing.id);
    const nouvelleASupprimer = newsContext.news.find(n => n.id === deleting.id);

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
                Les nouvelles du monde
            </Typography>
            <Button onClick={() => {setEditing({ isEditing: true, id: -1 });}}>
                <AddCircleOutlineIcon />
                Ajouter une Nouvelle
            </Button>

            <Grid container spacing={2}>
                {nouvelles}
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