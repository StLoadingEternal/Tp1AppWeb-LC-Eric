import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {useContext} from "react";
import {NewsContext} from "./NewsContext.jsx";
import {UtilisateurContext} from "./utilisateurContext.jsx";

export default function Utilisateur({utilisateur}){
    let utilisateurContext = useContext(UtilisateurContext);

    function changerUtilisateur() {
        console.log("Test");
        utilisateurContext.setUserActu(old => {
            return {
                id: utilisateur.id,
                role: utilisateur.role
            };
        });
        console.log(utilisateur.id)
    }

    const estSelectionne = utilisateurContext.userActu.id === utilisateur.id;

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
        <ListItem sx={utilisateurContext.userActu.id === utilisateur.id ? styleItemSelectionne : ""}>
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