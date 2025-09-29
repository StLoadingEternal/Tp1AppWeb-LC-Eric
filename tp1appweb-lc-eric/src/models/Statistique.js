import {nouvelles} from "../scripts/nouvelles.js";

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

    plusLongueNouvelle() {
        if (this._nouvelles.length === 0) return null;
        return this._nouvelles.reduce((longest, current) => current.resume.length > longest.resume.length ? current : longest);
    }

    plusCourteNouvelle() {
        if (this._nouvelles.length === 0) return null;
        return this._nouvelles.reduce((shortest, current) => current.resume.length < shortest.resume.length ? current : shortest);
    }

    tailleMoyenne() {
        if (this._nouvelles.length === 0) return 0;
        let total = this._nouvelles.reduce((somme, nouvelle) => somme + nouvelle.resume.length, 0);
        return total / this._nouvelles.length;
    }

    plusRecenteNouvelle() {
        if (this._nouvelles.length === 0) return null;
        return this._nouvelles.reduce((recent, current) => new Date(current.date) > new Date(recent.date) ? current : recent);
    }

    plusAncienneNouvelle() {
        if (this._nouvelles.length === 0) return null;
        return this._nouvelles.reduce((ancien, current) => new Date(current.date) < new Date(ancien.date) ? current : ancien);
    }


    // nombreNouvellesSelonCritere(nouvelles, critere){
    //
    // }

}





