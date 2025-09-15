"use strict";

export default class UtilisateurModel {
    _id;
    _nom;
    _dateInscription;
    _dateNaissance;
    _role;


    constructor(nom, dateInscription, dateNaissance, role, id) {
        this._nom = nom;
        this._dateInscription = dateInscription;
        this._dateNaissance = dateNaissance;
        this._role = role;
        this._id = id;
    }


    get nom() {
        return this._nom;
    }

    set nom(value) {
        this._nom = value;
    }

    get dateInscription() {
        return this._dateInscription;
    }

    set dateInscription(value) {
        this._dateInscription = value;
    }

    get dateNaissance() {
        return this._dateNaissance;
    }

    set dateNaissance(value) {
        this._dateNaissance = value;
    }

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }

    get id() {
        return this._id;
    }

}
