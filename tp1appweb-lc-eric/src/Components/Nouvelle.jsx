import NouvelleBody from "./MUIComponents/NouvelleBody.jsx";
import {Grid} from "@mui/material";



export default function Nouvelle({nouvelleModel}){
 return (
     <Grid
         size={4}>
        <NouvelleBody nouvelleModel={nouvelleModel}></NouvelleBody>
     </Grid>

 );
}