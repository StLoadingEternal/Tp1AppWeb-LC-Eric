import './App.css'
import {useEffect, useState} from "react";
import Nouvelles from "./Components/Nouvelles.jsx";
import {NewsContext} from "./Components/NewsContext.jsx";
import MenuUtilisateur from "./Components/MenuUtilisateur.jsx";
import {Card, CardContent, Container, Grid} from "@mui/material";
import MenuUtilisateurBody from "./Components/MUIComponents/MenuUtilisateursBody.jsx";
import Box from "@mui/material/Box";

import {nouvelles} from "./scripts/nouvelles.js";
import NouvelleModel from "./models/NouvelleModel.js";
import {UtilisateurContext} from "./Components/utilisateurContext.jsx";
import {CritereContext} from "./Components/CritereContext.jsx";
import FormCritere from "./Components/FormComponents/FormCritere.jsx";
import CritereModel from "./models/CritereModel.js";
import Typography from "@mui/material/Typography";
import BarreCriteres from "./Components/BarreCriteres.jsx";
import BarDrawer from "./Components/DrawerComponents/BarDrawer.jsx";


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
            nouvelle.resume,
            nouvelle.createur,
            nouvelle.categorie
        ));
        window.localStorage.setItem("nouvelles", JSON.stringify(nouvellesGenereres));
    }
    else { // Si le localStorage n'est pas vide.
        let parsed = JSON.parse(sauvegarde);
        nouvellesGenereres = parsed.map(nouvelle => new NouvelleModel(
            nouvelle.id,
            nouvelle.date,
            nouvelle.titre,
            nouvelle.image,
            nouvelle.texte,
            nouvelle.resume,
            nouvelle.createurs,
            nouvelle.categorie
        ));

    }

    return nouvellesGenereres;
}

function lireCriteresSauvegardes(){
    let critereGeneres = [];
    let sauvegarde = window.localStorage.getItem("criteres");

    if (sauvegarde !== null ){
        let parsed = JSON.parse(sauvegarde);
        critereGeneres = parsed.map(cr => new CritereModel(
            cr.id,
            cr.noReference,
            cr.titre,
            cr.date,
            cr.categorie,
            cr.anneeNouvelle,
            cr.motsCles
        ));
    }

    return critereGeneres;
}


function App() {

    //Le modèle affichait un bug à régler
    const [news, setNews] = useState(genererNouvelles());
    const [userActuId, setUserActu] = useState(1);
    const [criteres, setCriteres] = useState(lireCriteresSauvegardes);

    let criteresEnFonctionUser =criteres.filter(cr => cr.noReference === userActuId); // les criteres sont tries en fonction de l'user connecte
    let nouvelleEnFonctionUser = nouvelles.filter(n => n.createur.includes(userActuId));  // les nouvelles sont tries en fonction de l'user connecte

    //Recuperer l'utilisateur connecté

    // Sauvegarder les elements dans le localStorage en cas de changement sur l'etat news
    useEffect(() => {
        window.localStorage.setItem("nouvelles", JSON.stringify(news));
    }, [news]);

    // sauvegarder les criteres
    useEffect(() => {
        window.localStorage.setItem("criteres", JSON.stringify(criteres));
    }, [criteres]);


    const barreCritere = <BarreCriteres criteres={criteresEnFonctionUser} />

    return (
        <>
            <UtilisateurContext.Provider value={{userActuId, setUserActu}}>
                <CritereContext.Provider value={{criteres, setCriteres}}>
                    <Box className={"contenuPage"}>
                        <BarDrawer >
                            {barreCritere}
                            <Grid
                                className={"corps"}
                                container spacing={1}>
                                <Grid sx={{ height: "100vh", overflowY: 'scroll'}} size={10}>
                                    <NewsContext.Provider value={{news, setNews}}>
                                        <Nouvelles nouvelles = {nouvelleEnFonctionUser} setNouvelles={setNews} criteres={criteresEnFonctionUser}/>
                                    </NewsContext.Provider>
                                </Grid>
                                <Grid  size={2}>

                                    <MenuUtilisateurBody>
                                        <MenuUtilisateur className={"menuUtilisateur"}/>

                                    </MenuUtilisateurBody>
                                </Grid>
                            </Grid>

                        </BarDrawer>



                    </Box>
                </CritereContext.Provider>
            </UtilisateurContext.Provider>
        </>
    )
}

export default App
