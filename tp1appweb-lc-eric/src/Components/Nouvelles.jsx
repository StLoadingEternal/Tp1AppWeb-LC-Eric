import Nouvelle from "./Nouvelle.jsx";
import {useContext, useRef} from "react";
import {Grid} from "@mui/material";
import {NewsContext} from "./NewsContext.jsx";

export default function Nouvelles(){


    const newsContext = useContext(NewsContext)
    //A voir l'utilisation de la référence
    //const noReference = useRef(10);

    const nouvelles = newsContext.news.map(news => <Nouvelle
            {...news}
            key={news.id}
        >
        </Nouvelle>
    )


    return(
        //Nouvelles englobe les nouvelles dans un Grid qui utilise css Flex box
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {nouvelles}
        </Grid>
    );

}