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
        utilisateurContext.setUserActu(utilisateur.id);

    }

    return (
        <ListItem
            key={utilisateur.id}
            disablePadding
        >
            <ListItemButton onClick={changerUtilisateur}>
                <ListItemAvatar>
                    <Avatar
                        alt={`Avatar`}
                        src={''}
                    />
                </ListItemAvatar>
                <ListItemText  id={utilisateur.id} primary={utilisateur.nom} />
            </ListItemButton>
        </ListItem>
    )

}