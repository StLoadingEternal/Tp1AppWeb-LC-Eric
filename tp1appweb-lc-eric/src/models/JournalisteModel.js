import Role from "./Role.js";
import UtilisateurModel from "./UtilisateurModel.js";


export default class JournalisteModel extends UtilisateurModel{
    _nouvelles;

    constructor(nom, dateInscription, dateNaissance, id, nouvelles) {
        super(nom, dateInscription, dateNaissance, Role.JOURNALISTE, id);
        this._nouvelles = nouvelles;
    }

    publierNouvelle(nouvelle){
        this._nouvelles.add(nouvelle);
    }

    supprimerNouvelle(idNouvelle){
        this._nouvelles.remove(idNouvelle);
    }


    get nouvelles() {
        return this._nouvelles;
    }

    set nouvelles(value) {
        this._nouvelles = value;
    }
}

