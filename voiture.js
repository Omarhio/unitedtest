const fs = require('fs');

function writeLog(message) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync('app.log', `[${timestamp}] ${message}\n`);
}

class Voiture {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        writeLog(`Voiture créée : ${this.marque} ${this.modele}, Année : ${this.annee}`);
    }
}

class Vehicule extends Voiture {
    constructor(marque, modele, annee, couleur) {
        super(marque, modele, annee);
        this.couleur = couleur;
        writeLog(`Vehicule créé : ${this.marque} ${this.modele}, Couleur : ${this.couleur}`);
    }
}

const voiture = new Vehicule("Toyota", "Corolla", 2024, "Vert");

writeLog(`Couleur de la voiture : ${voiture.couleur}`);
module.exports = { Voiture, Vehicule, writeLog };
