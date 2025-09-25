export default  class CritereModel{
    _id
    _titre
    _noReference
    _date
    _categorie
    _anneeNouvelle
    _motsCles


    constructor(id, noReference, titre, date, categorie, anneeNouvelle, motsCles) {
        this._id = id;
        this._titre = titre;
        this._noReference = noReference;
        this._date = date;
        this._categorie = categorie;
        this._anneeNouvelle = anneeNouvelle;
        this._motsCles = motsCles;
    }

    get id(){
        return this._id;
    }

    get noReference() {
        return this._noReference;
    }

    set noReference(value) {
        this._noReference = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get categorie() {
        return this._categorie;
    }

    set categorie(value) {
        this._categorie = value;
    }

    get anneeNouvelle() {
        return this._anneeNouvelle;
    }

    set anneeNouvelle(value) {
        this._anneeNouvelle = value;
    }

    get motsCles() {
        return this._motsCles;
    }


    get titre() {
        return this._titre;
    }

    set titre(value) {
        this._titre = value;
    }

    set motsCles(value) {
        this._motsCles = value;
    }
}