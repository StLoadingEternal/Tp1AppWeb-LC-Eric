import './App.css'
import {useEffect, useState} from "react";
import Nouvelles from "./Components/Nouvelles.jsx";
import {NewsContext} from "./Components/Contexts/NewsContext.jsx";
import MenuUtilisateur from "./Components/MenuUtilisateur.jsx";
import {Card, CardContent, Container, Grid, Paper, ThemeProvider} from "@mui/material";
import Box from "@mui/material/Box";

import {nouvelles} from "./scripts/nouvelles.js";
import NouvelleModel from "./models/NouvelleModel.js";
import {UtilisateurContext} from "./Components/Contexts/utilisateurContext.jsx";
import {CritereContext} from "./Components/Contexts/CritereContext.jsx";
import FormCritere from "./Components/FormComponents/FormCritere.jsx";
import CritereModel from "./models/CritereModel.js";
import Typography from "@mui/material/Typography";
import BarreCriteres from "./Components/BarreCriteres.jsx";
import BarDrawer from "./Components/DrawerComponents/BarDrawer.jsx";
import Statistique from "./models/Statistique.js";
import Statistiques from "./Components/Statistiques.jsx";
import {themeNouvelles} from "./theme/themeNouvelles.js";
import {utilisateursJson} from "./scripts/utilisateurs.js";
import Role from "./models/Role.js";
import {styled} from "@mui/material/styles";
import {categories} from "./scripts/categorie.js";


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
            nouvelle.createur,
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

    //Etat des nouvelles
    const [news, setNews] = useState(genererNouvelles());

    // Categories
    const [categoriesList, setCategorie] = useState(categories);

    //Etat utilisateur actuel son id et son role
    const [userActu, setUserActu] = useState({id: 1, role: Role.ADMIN});

    //Etat des criteres existants
    const [criteres, setCriteres] = useState(lireCriteresSauvegardes);

    // cet etat permet la selection d'un seul critere
    const [critereSelectedId, setCritereSelection] = useState();

    // les criteres sont tries en fonction de l'user connecte
    let criteresEnFonctionUser = criteres.filter(cr => cr.noReference === userActu.id);

    // les nouvelles sont tries en fonction de l'user connecte
    //L'admin voit toute les nouvelles
    let nouvelleEnFonctionUser = userActu.role === Role.ADMIN ? news : news.filter(n => n.createur === userActu.id);



    // Sauvegarder les elements dans le localStorage en cas de changement sur l'etat news
    useEffect(() => {
        window.localStorage.setItem("nouvelles", JSON.stringify(news));
    }, [news]);

    // sauvegarder les criteres
    useEffect(() => {
        window.localStorage.setItem("criteres", JSON.stringify(criteres));
    }, [criteres]);

    const FooterWithTheme = styled(Paper)(({theme}) => ({
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "97%",
        margin: theme.spacing(2)
    }));


    const barreCritere = <BarreCriteres criteres={criteresEnFonctionUser}
                                        critereSelectedId={critereSelectedId} // on envoie un etat pour gerer la selection de critere
                                        setCritereSelection={setCritereSelection}/>

    return (
        <>
            <ThemeProvider theme={themeNouvelles}>
                <UtilisateurContext.Provider value={{userActu, setUserActu}}>
                    <CritereContext.Provider value={{criteres, setCriteres}}>
                        <Box  sx={{
                            backgroundImage: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
                            height: "100%",
                            width: '100%',
                            position: "relative",
                        }}>
                            <BarDrawer >
                                {barreCritere}
                            </BarDrawer>
                            <Grid
                                className={"corps"}
                                container spacing={1}>
                                <Grid sx={{ height: "100%", overflowY: 'scroll'}} size={10}>
                                    <NewsContext.Provider value={{news, setNews}}>
                                        <Nouvelles
                                            nouvelles={nouvelleEnFonctionUser}
                                            currentUser={userActu}
                                            criteres={criteres.find(cr => cr.id === critereSelectedId)}/> {/* ON envoie le critere selectionne*/}
                                    </NewsContext.Provider>
                                </Grid>
                                <Grid size={2}>
                                    <MenuUtilisateur/>
                                    <Statistiques stat={new Statistique(news)}></Statistiques>
                                </Grid>
                            </Grid>
                            <FooterWithTheme>Copyright <span>2025{'\u24C7'}</span> - <strong>LASS & TED NEWS</strong></FooterWithTheme>
                        </Box>
                    </CritereContext.Provider>
                </UtilisateurContext.Provider>
            </ThemeProvider>
        </>
    )
}

export default App
