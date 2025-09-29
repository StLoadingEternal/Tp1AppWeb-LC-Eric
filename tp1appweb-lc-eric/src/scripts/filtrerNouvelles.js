

/**
 * Cette methode permet de checker si la nouvelle est verifi/e le critere
 * @param cr
 * @param nouvelle
 * @returns {false|*|boolean}
 */
function verifieCriteres(cr, nouvelle) {
    const texteNouvelle = (nouvelle.texte + " " + nouvelle.resume).toLowerCase();
    const anneeNouvelle = new Date(nouvelle.date).getFullYear();

    console.log(nouvelle.categorie)
    return (
        // si l'annee selectionne correspond
        (parseInt(cr.anneeNouvelle) === anneeNouvelle) &&
        // si l'un des mots cles est contenu dans le resume ou le texte
        cr.motsCles.some(mot => texteNouvelle.includes(mot.toLowerCase())) &&
        // si la categorie correspond
        cr.categorie.toLowerCase() === nouvelle.categorie.toString().toLowerCase()
    );
}

export default function appliquerFiltres(nouvelles, critere) {
    return nouvelles
        .filter(nouvelle => {


            // Si aucun critère, on affiche tout
            if (!critere)
                return true;

            // tester si le critere verifie la nouvelle
            return verifieCriteres(critere, nouvelle);

        })

}