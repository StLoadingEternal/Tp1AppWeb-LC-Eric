import Utilisateur from "./Utilisateur.js";
import Role from "./Role.js";

export default class Admin extends Utilisateur{

    constructor(nom, dateInscription, dateNaissance, id) {
        super(nom, dateInscription, dateNaissance, Role.ADMIN, id);
    }


}