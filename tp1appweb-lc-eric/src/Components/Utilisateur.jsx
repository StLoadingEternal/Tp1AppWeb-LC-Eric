import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {useContext} from "react";
import {NewsContext} from "./NewsContext.jsx";

export default function Utilisateur({currentUser, utilisateur}){

    let newsContext = useContext(NewsContext);

    function changerUtilisateur() {
        currentUser.current = utilisateur.id;
       // newsContext.setNews(
         //
        //)
    }

    return (
        <ListItem
            ref={currentUser}
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