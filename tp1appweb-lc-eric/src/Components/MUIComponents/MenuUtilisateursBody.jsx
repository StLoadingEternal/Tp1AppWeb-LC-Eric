import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Utilisateur from "../Utilisateur.jsx";
import MenuUtilisateur from "../MenuUtilisateur.jsx";

export default function MenuUtilisateurBody({children}) {


    return (
        <List dense sx={{
            width: 'maxLength', maxWidth: 360, bgcolor: 'background.black' }}>
            {children}
        </List>
    );
}
