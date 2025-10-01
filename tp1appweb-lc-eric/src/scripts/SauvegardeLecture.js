import {nouvelles} from "./nouvelles.js";
import NouvelleModel from "../models/NouvelleModel.js";
import CritereModel from "../models/CritereModel.js";


/**
 * cette methode permet de generer les nouvelles a partir d'un json dans le cas
 *  ou le localStorage est vide
 *  Mais si ce dernier ne l'est pas on recupere son contenu et on le passe en tant qu'Etat.
 * @returns {*}
 */

export function genererNouvelles(){
    let nouvellesGenereres = [];
    let sauvegarde = window.localStorage.getItem("nouvelles");
    if (sauvegarde === null) { // Si le localStorage est vide
        nouvellesGenereres = nouvelles.map(nouvelle => new NouvelleModel(
            nouvelle.id,
            nouvelle.date,
            nouvelle.titre,
            nouvelle.image,
            nouvelle.texte,
            nouvelle.resume,
            nouvelle.createur,
            nouvelle.categorie
        ));
        window.localStorage.setItem("nouvelles", JSON.stringify(nouvellesGenereres));
    }
    else { // Si le localStorage n'est pas vide.
        let parsed = JSON.parse(sauvegarde);
        nouvellesGenereres = parsed.map(nouvelle => new NouvelleModel(
            nouvelle.id,
            nouvelle.date,
            nouvelle.titre,
            nouvelle.image,
            nouvelle.texte,
            nouvelle.resume,
            nouvelle.createur,
            nouvelle.categorie
        ));

    }

    return nouvellesGenereres;
}



/**
 * cette methode permet de generer les Criteres a partir d'un json dans le cas
 *  ou le localStorage est vide
 *  Mais si ce dernier ne l'est pas on recupere son contenu et on le passe en tant qu'Etat.
 * @returns {*}
 */
export function lireCriteresSauvegardes(){
    let critereGeneres = [];
    let sauvegarde = window.localStorage.getItem("criteres");

    if (sauvegarde !== null ){
        let parsed = JSON.parse(sauvegarde);
        critereGeneres = parsed.map(cr => new CritereModel(
            cr.id,
            cr.noReference,
            cr.titre,
            cr.date,
            cr.categorie,
            cr.anneeNouvelle,
            cr.motsCles
        ));
    }

    return critereGeneres;
}


export function sauvegarderDonnees(nomChamp, donnees){

    window.localStorage.setItem(nomChamp, JSON.stringify(donnees));

}
