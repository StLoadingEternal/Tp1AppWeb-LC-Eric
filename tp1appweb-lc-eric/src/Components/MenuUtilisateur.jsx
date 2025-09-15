import UtilisateurModel from "../models/UtilisateurModel.js";
import Role from "../models/Role.js";
import {useRef} from "react";
import Utilisateur from "./Utilisateur.jsx";


export default function MenuUtilisateur(){
    let userId = useRef(1);
    const utilisateurs = genererUtilisateurs()


    /**
     * Cette methode a pour but de le lire la source de donnee et de les encapsuler dans la classe
     * Utlisateur
     *
     * elle retourne une liste de d'utilisateurs.
     * @param utilisateursJson
     */
    function genererUtilisateurs(utilisateursJson){
        let users = []
        utilisateursJson.forEach(user => {
            users.add(
                new UtilisateurModel(user.nom,
                    user.dateInscription,
                    user.dateNaissance,
                    user.role === "admin" ? Role.ADMIN : Role.JOURNALISTE,
                    user.id
                    )
            );

            userId.current.currentTime = user.id; // on sauvegarde la derniere valeur de l'id
        });

        return users;
    }

    return (
        <div>
            {utilisateurs.map(user => <Utilisateur utilisateur={user}/>)}
        </div>
    );
}