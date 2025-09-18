import './App.css'
import {useState} from "react";
import Nouvelles from "./Components/Nouvelles.jsx";
import {nouvelles} from "./scripts/nouvelles.js"
import {NewsContext} from "./Components/NewsContext.jsx";
import MenuUtilisateur from "./Components/MenuUtilisateur.jsx";
import {Container, Grid} from "@mui/material";
import MenuUtilisateurBody from "./Components/MUIComponents/MenuUtilisateursBody.jsx";


function App() {

    //Etat des nouvelles
    const [news, setNews] = useState(nouvelles)

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
                        <MenuUtilisateur className={"menuUtilisateur"}/>
                    </MenuUtilisateurBody>

                </Grid>

            </Grid>


        </>

    )
}

export default App
