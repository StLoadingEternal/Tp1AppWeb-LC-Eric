import Utilisateur from "./Utilisateur.jsx";
import {utilisateursJson} from "../scripts/utilisateurs.js";
import AdminModel from "../models/AdminModel.js";
import JournalisteModel from "../models/JournalisteModel.js";
import Typography from "@mui/material/Typography";
import {useRef} from "react";
import List from "@mui/material/List";
import * as React from "react";
import Box from "@mui/material/Box";



export default function MenuUtilisateur(){
    const userId = useRef();
    let users = genererUtilisateurs(utilisateursJson);

    const usersList = users.map(user => <Utilisateur key={user.id} utilisateur={user}/>);

    /**
     * Cette methode a pour but de le lire la source de donnee et de les encapsuler dans la classe
     * Utlisateur
     *
     * elle retourne une liste de d'utilisateurs.
     * @param utilisateursJson
     */
    function genererUtilisateurs(utilisateursJson){
        let users = [];

        utilisateursJson.forEach(user => {
            users.push(
                user.role === "admin" ?
                    new AdminModel(
                        user.nom,
                        user.dateInscription,
                        user.dateNaissance,
                        user.id
                    )
                    :
                    new JournalisteModel(
                        user.nom,
                        user.dateInscription,
                        user.dateNaissance,
                        user.id
                    )
            );

            userId.current = user.id; // on sauvegarde la derniere valeur de l'id
        });

        return users;
    }


    return (

        <Box className={"makeitglass menuUtilisateur"}>
            <Typography variant="h5" sx={{ml: 2}} gutterBottom>
                Menu Utilisateur
            </Typography>
            <List dense sx={{justifyContent: "center", textAlign: "center"}}>
                {usersList}
            </List>

        </Box>
    );
}