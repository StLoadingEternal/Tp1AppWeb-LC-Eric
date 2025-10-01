import NouvelleBody from "./MUIComponents/NouvelleBody.jsx";
import {Grid} from "@mui/material";




export default function Nouvelle({newsProps, editer, supprimer, lire}){
    return (
        <Grid size={{xs: 12, md: 4 }}>
            <NouvelleBody lire={lire} editer={editer} supprimer={supprimer} newsProps = {newsProps}></NouvelleBody>
        </Grid>

    );
}