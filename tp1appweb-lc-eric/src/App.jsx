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
import {genererNouvelles, lireCriteresSauvegardes, sauvegarderDonnees} from "./scripts/SauvegardeLecture.js";



function App() {

    //Etat des nouvelles
    const [news, setNews] = useState(genererNouvelles);

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


    // Sauvegarder les elements dans le localStorage en cas de fermeture
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            // sauvegarde
            sauvegarderDonnees("nouvelles",news);
            sauvegarderDonnees("criteres", criteres);

        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [news, criteres]);





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
                                            critere={criteres.find(cr => cr.id === critereSelectedId)}/> {/* ON envoie le critere selectionne*/}
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
