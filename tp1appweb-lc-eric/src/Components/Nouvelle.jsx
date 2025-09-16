import NouvelleBody from "./NouvelleBody.jsx";
import {Grid} from "@mui/material";



export default function Nouvelle(props){
 return (
     <Grid size={4}>
        <NouvelleBody {...props}></NouvelleBody>
     </Grid>

 );
}