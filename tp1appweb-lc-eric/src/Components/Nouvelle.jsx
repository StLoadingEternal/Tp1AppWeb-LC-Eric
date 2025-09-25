import NouvelleBody from "./MUIComponents/NouvelleBody.jsx";
import {Grid} from "@mui/material";




export default function Nouvelle({newsProps, editer, supprimer}){
 return (
     <Grid size={4} >
         <NouvelleBody editer={editer} supprimer={supprimer} newsProps = {newsProps}></NouvelleBody>
     </Grid>

 );
}