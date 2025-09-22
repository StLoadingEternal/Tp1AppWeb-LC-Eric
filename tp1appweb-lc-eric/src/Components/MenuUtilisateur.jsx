import UtilisateurModel from "../models/UtilisateurModel.js";
import Role from "../models/Role.js";

import Utilisateur from "./Utilisateur.jsx";
import {utilisateursJson} from "../scripts/utilisateurs.js";
import AdminModel from "../models/AdminModel.js";
import JournalisteModel from "../models/JournalisteModel.js";
import Typography from "@mui/material/Typography";
import {UtilisateurContext} from "./utilisateurContext.jsx";
import {useRef} from "react";



export default function MenuUtilisateur(){
    const userId = useRef();
    let usersList = genererUtilisateurs(utilisateursJson);


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

        <div className={"menuUtilisateur"} >
            <Typography variant="h6" gutterBottom>
                Menu Utilisateur
            </Typography>
            {usersList.map(user => <Utilisateur  utilisateur={user}/>)}
        </div>
    );
}