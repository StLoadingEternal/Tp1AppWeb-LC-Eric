import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {useContext} from "react";
import {NewsContext} from "./Contexts/NewsContext.jsx";
import {UtilisateurContext} from "./Contexts/utilisateurContext.jsx";

export default function Utilisateur({utilisateur}){

    let utilisateurContext = useContext(UtilisateurContext);

    /**
     * Changement de l'utilisateur connecté. On met à jour l'état d'utilisateur connecté.
     */
    function changerUtilisateur() {

        utilisateurContext.setUserActu(old => {
            return {
                id: utilisateur.id,
                role: utilisateur.role
            };
        });
        console.log(utilisateur.id)//Trace utilisateur connecté (id)
    }


    const estSelectionne = utilisateurContext.userActu.id === utilisateur.id;

    //Demarqué l'utilisateur connecté
    const styleItemSelectionne = {
        '&.Mui-selected': {
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
                backgroundColor: 'primary.dark',
            },
        },
    };

    return (
        <ListItem sx={{color:"text.primary"}}>
            <ListItemButton selected={estSelectionne} onClick={changerUtilisateur} sx={styleItemSelectionne}>
                <ListItemAvatar>
                    <Avatar
                        alt={`Avatar`}
                        src={''}
                    />
                </ListItemAvatar>
                <ListItemText id={utilisateur.id} primary={utilisateur.nom}/>
            </ListItemButton>
        </ListItem>
    )
}