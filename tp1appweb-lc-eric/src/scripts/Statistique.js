
export default class Statistique{

    _nbNouvelles;
    _nouvelles;


    constructor(nouvelles) {
        this._nouvelles = nouvelles;
        this._nbNouvelles = nouvelles.length;
    }

    get nbNouvelles() {
        return this._nbNouvelles;
    }

    /**
     * retourne la plus longue nouvelle  en termes de carctères
     * @returns {*|null}
     */
    plusLongueNouvelle() {
        if (this._nouvelles.length === 0) return null;
        return this._nouvelles.reduce((longest, current) => current.texte.trim().length > longest.texte.trim().length ? current : longest);
    }

    /**
     * retourne la nouvelle la plus courte en termes de caractères
     * @returns {*|null}
     */
    plusCourteNouvelle() {
        if (this._nouvelles.length === 0) return null;
        return this._nouvelles.reduce((shortest, current) => current.texte.trim().length < shortest.texte.trim().length ? current : shortest);
    }

    /**
     * retourne la taille moyenne des nouvelles
     * @returns {number}
     */
    tailleMoyenne() {
        if (this._nouvelles.length === 0) return 0;
        let total = this._nouvelles.reduce((somme, nouvelle) => somme + nouvelle.texte.trim().length, 0);
        return total / this._nouvelles.length;
    }

    /**
     * retourne la nouvelle la plus récente
     * @returns {*|null}
     */
    plusRecenteNouvelle() {
        if (this._nouvelles.length === 0) return null;
        return this._nouvelles.reduce((recent, current) => new Date(current.date) > new Date(recent.date) ? current : recent);
    }

    /**
     * retourne la nouvelle la plus ancienne
     * @returns {*|null}
     */
    plusAncienneNouvelle() {
        if (this._nouvelles.length === 0) return null;
        return this._nouvelles.reduce((ancien, current) => new Date(current.date) < new Date(ancien.date) ? current : ancien);
    }

}





