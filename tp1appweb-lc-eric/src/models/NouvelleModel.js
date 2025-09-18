export default class NouvelleModel {

    date;
    titre;
    noReference;
    image;
    texte;
    resume;


    constructor(noReference, date, titre, image, texte, resume) {
        this.date = date;
        this.titre = titre;
        this.noReference = noReference;
        this.image = image;
        this.texte = texte;
        this.resume = resume;
    }


}