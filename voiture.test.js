const { Voiture, Vehicule, writeLog } = require('./voiture');

describe('Tests pour la classe Voiture et Vehicule', () => {

    test('Création d\'une instance de Voiture', () => {
        const voiture = new Voiture('Renault', 'Clio', 2020);
        writeLog('Test - Voiture créée :', voiture);
        expect(voiture.marque).toBe('Renault');
        expect(voiture.modele).toBe('Clio');
        expect(voiture.annee).toBe(2020);
    });

    test('Création d\'une instance de Vehicule avec héritage de Voiture', () => {
        const vehicule = new Vehicule('Toyota', 'Corolla', 2024, 'Vert');
        writeLog('Test - Vehicule créé :', vehicule);
        expect(vehicule.marque).toBe('Toyota');
        expect(vehicule.modele).toBe('Corolla');
        expect(vehicule.annee).toBe(2024);
        expect(vehicule.couleur).toBe('Vert');
    });

    test('Vehicule doit être une instance de Voiture', () => {
        const vehicule = new Vehicule('Tesla', 'Model 3', 2023, 'Rouge');
        writeLog('Test - Instance de Vehicule (Tesla) :', vehicule);
        expect(vehicule instanceof Voiture).toBe(true);
        expect(vehicule instanceof Vehicule).toBe(true);
    });
});
