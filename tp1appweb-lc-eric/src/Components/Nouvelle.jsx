import NouvelleBody from "./MUIComponents/NouvelleBody.jsx";
import {Grid} from "@mui/material";




export default function Nouvelle({editer, supprimer, ...props}){
 return (
     <Grid size={4}>
         <NouvelleBody editer={editer} supprimer={supprimer} {...props}></NouvelleBody>
     </Grid>

 );
}