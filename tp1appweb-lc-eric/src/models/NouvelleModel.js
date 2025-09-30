export default class NouvelleModel {

    _date;
    _titre;
    _id;
    _image;
    _texte;
    _resume;
    _createur;
    _categorie;


    constructor(noReference, date, titre, image, texte, resume, createur, categorie) {
        this._id = noReference;
        this._date = date;
        this._titre = titre;
        this._image = image;
        this._texte = texte;
        this._resume = resume;
        this._createur = createur;
        this._categorie = categorie;
    }


    get noReference() {
        return this._noReference;
    }

    set noReference(value) {
        this._noReference = value;
    }

    get categorie() {
        return this._categorie;
    }

    set categorie(value) {
        this._categorie = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get titre() {
        return this._titre;
    }

    set titre(value) {
        this._titre = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get texte() {
        return this._texte;
    }

    set texte(value) {
        this._texte = value;
    }

    get resume() {
        return this._resume;
    }

    set resume(value) {
        this._resume = value;
    }


    get createur() {
        return this._createur;
    }

    set createur(value) {
        this._createur = value;
    }

    toJSON() {
        return {
            id: this._id,
            date: this._date,
            titre: this._titre,
            image: this._image,
            texte: this._texte,
            resume: this._resume,
            createur: this._createur,
            categorie: this._categorie
        };
    }
}