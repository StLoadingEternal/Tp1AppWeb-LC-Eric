import './App.css'
import {useState} from "react";
import Nouvelles from "./Components/Nouvelles.jsx";
import {nouvelles} from "./scripts/nouvelles.js"



function App() {

    const [news, setNews] = useState(nouvelles)
  return (
    <div>
        <Nouvelles news={news} setNews={setNews}>
        </Nouvelles>
    </div>
  )
}

export default App
