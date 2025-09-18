import './App.css'
import {useRef, useState} from "react";
import Nouvelles from "./Components/Nouvelles.jsx";

import {NewsContext} from "./Components/NewsContext.jsx";
import MenuUtilisateur from "./Components/MenuUtilisateur.jsx";
import {Container, Grid} from "@mui/material";
import MenuUtilisateurBody from "./Components/MUIComponents/MenuUtilisateursBody.jsx";
import {nouvelles} from "./scripts/nouvelles.js";
import NouvelleModel from "./models/NouvelleModel.js";

function genererNouvelles(){
    let nouvellesGenereres = [];
    let sauvegarde = window.localStorage.getItem("nouvelles");

    if (sauvegarde === null) {
        nouvellesGenereres = nouvelles.map(nouvelle => new NouvelleModel(
            nouvelle.id,
            nouvelle.date,
            nouvelle.titre,
            nouvelle.image,
            nouvelle.texte,
            nouvelle.resume
        ));
        window.localStorage.setItem("nouvelles", JSON.stringify(nouvellesGenereres));
    }
    else {
        let parsed = JSON.parse(sauvegarde);
        nouvellesGenereres = parsed.map(nouvelle => new NouvelleModel(
            nouvelle.id,
            nouvelle.date,
            nouvelle.titre,
            nouvelle.image,
            nouvelle.texte,
            nouvelle.resume
        ));
    }

    return nouvellesGenereres;
}


function App() {


    //Etat des nouvelles
    const [news, setNews] = useState(genererNouvelles)

    //Recuperer l'utilisateur connecté
    let userRef = useRef();

    return (
        <>
            <Grid
                className={"corps"}
                container spacing={1}>
                <Grid
                    sx={{
                        height : "100vh",
                        overflowY : 'scroll'
                    }}
                    size={10}>
                    <item>
                        <NewsContext.Provider value={{news, setNews}}>
                            <div>
                                <Nouvelles/>
                            </div>

                        </NewsContext.Provider>
                    </item>
                </Grid>

                <Grid size={2}>
                    <MenuUtilisateurBody>
                        <MenuUtilisateur userRef={userRef} className={"menuUtilisateur"}/>
                    </MenuUtilisateurBody>

                </Grid>

            </Grid>


        </>

    )
}

export default App
