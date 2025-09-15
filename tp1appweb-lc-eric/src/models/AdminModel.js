import UtilisateurModel from "./UtilisateurModel.js";
import Role from "./Role.js";

export default class AdminModel extends UtilisateurModel{

    constructor(nom, dateInscription, dateNaissance, id) {
        super(nom, dateInscription, dateNaissance, Role.ADMIN, id);
    }


}