import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ChecklistIcon from '@mui/icons-material/Checklist';
import {useState} from "react";
import FormNews from "../FormComponents/FormNews.jsx";

export default function BarDrawer() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <ListItem key={'Ajouter nouvelle'} disablePadding>
                    <ListItemButton >
                        <ListItemIcon>
                            <AddCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Ajouter nouvelle'} />
                    </ListItemButton>
                    <Divider />
                </ListItem>

                <ListItem key={'Créer critère'} disablePadding>
                    <ListItemButton >
                        <ListItemIcon>
                             <AddCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Créer critère'} />
                    </ListItemButton>
                    <Divider />
                </ListItem>

                <ListItem key={'Sélectionner Critère'} disablePadding>
                    <ListItemButton >
                        <ListItemIcon>
                             <ChecklistIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Sélectionner Critère'} />
                    </ListItemButton>
                    <Divider />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <MenuIcon onClick={toggleDrawer(true)}/>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}