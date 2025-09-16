import {createContext} from "react";
import {nouvelles} from "../scripts/nouvelles.js";

//Contexte qui transporte l'etat des nouvelles
export const NewsContext = createContext(nouvelles)