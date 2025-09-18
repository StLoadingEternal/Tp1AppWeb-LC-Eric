import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


export default function Utilisateur({utilisateur}){

    return (
        <ListItem
            key={utilisateur.id}
            disablePadding
        >
            <ListItemButton>
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