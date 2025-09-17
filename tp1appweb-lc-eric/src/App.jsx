import './App.css'
import {useState} from "react";
import Nouvelles from "./Components/Nouvelles.jsx";
import {nouvelles} from "./scripts/nouvelles.js"
import {NewsContext} from "./Components/NewsContext.jsx";
import MenuUtilisateur from "./Components/MenuUtilisateur.jsx";


function App() {

    //Etat des nouvelles
    const [news, setNews] = useState(nouvelles)

    return (
        <>
            <NewsContext.Provider value={{news, setNews}}>
                <div>
                    <Nouvelles/>
                </div>
                <MenuUtilisateur/>
            </NewsContext.Provider>
        </>

    )
}

export default App
