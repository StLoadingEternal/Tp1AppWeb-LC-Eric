import NouvelleBody from "./MUIComponents/NouvelleBody.jsx";
import {Grid} from "@mui/material";



export default function Nouvelle({editer, supprimer, ...props}){
 return (
        <NouvelleBody editer={editer} supprimer={supprimer} {...props}></NouvelleBody>
 );
}