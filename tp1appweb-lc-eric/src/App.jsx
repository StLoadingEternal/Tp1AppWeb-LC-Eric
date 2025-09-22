import './App.css'
import {useState} from "react";
import Nouvelles from "./Components/Nouvelles.jsx";
import {nouvelles} from "./scripts/nouvelles.js"
import {NewsContext} from "./Components/NewsContext.jsx";
import MenuUtilisateur from "./Components/MenuUtilisateur.jsx";
import {Container, Grid} from "@mui/material";
import MenuUtilisateurBody from "./Components/MUIComponents/MenuUtilisateursBody.jsx";
import Box from "@mui/material/Box";
import NouvelleAppBar from "./Components/MUIComponents/NouvelleAppBAr.jsx";


function App() {

    //Etat des nouvelles
    const [news, setNews] = useState(nouvelles)

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
