import './App.css'
import {useEffect, useRef, useState} from "react";
import Nouvelles from "./Components/Nouvelles.jsx";

import {NewsContext} from "./Components/NewsContext.jsx";
import MenuUtilisateur from "./Components/MenuUtilisateur.jsx";
import {Container, Grid} from "@mui/material";
import MenuUtilisateurBody from "./Components/MUIComponents/MenuUtilisateursBody.jsx";
import Box from "@mui/material/Box";
import NouvelleAppBar from "./Components/MUIComponents/NouvelleAppBAr.jsx";
import {nouvelles} from "./scripts/nouvelles.js";
import NouvelleModel from "./models/NouvelleModel.js";


/**
 * cette methode permet de generer les nouvelles a partir d'un json dans le cas
 *  ou le localStorage est vide
 *  Mais si ce dernier ne l'est pas on recupere son contenu et on le passe en tant qu'Etat.
 * @returns {*}
 */
function genererNouvelles(){
    let nouvellesGenereres = [];
    let sauvegarde = window.localStorage.getItem("nouvelles");

    if (sauvegarde === null) { // Si le localStorage est vide
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
    else { // Si le localStorage n'est pas vide.
        let parsed = JSON.parse(sauvegarde);
        nouvellesGenereres = parsed.map(nouvelle => new NouvelleModel(
            nouvelle.noReference,
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

    // Sauvegarder les elements dans le localStorage en cas de changement sur l'etat news
    useEffect(() => {
        window.localStorage.setItem("nouvelles", JSON.stringify(news));
    }, [news]);

    return (
        <>
            <Box sx={{
                backgroundImage: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
                height: "100%",
                width: '100%',
                position: "relative",
            }}>
                <NouvelleAppBar></NouvelleAppBar>
                <Grid
                    className={"corps"}
                    container spacing={1}>
                    <Grid sx={{ height: "100vh", overflowY: 'scroll'}} size={10}>
                            <NewsContext.Provider value={{news, setNews}}>
                                    <Nouvelles/>
                            </NewsContext.Provider>
                    </Grid>
                    <Grid  size={2}>
                        <MenuUtilisateurBody>
                            <MenuUtilisateur className={"menuUtilisateur"}/>
                        </MenuUtilisateurBody>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

export default App
