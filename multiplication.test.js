const simpleMultiplication = require('./multiplication');

describe('Tests pour la fonction simpleMultiplication', () => {

    test('Multiplication par 8 si le nombre est pair', () => {
        expect(simpleMultiplication(4)).toBe(32);  // 4 * 8 = 32
        expect(simpleMultiplication(2)).toBe(16);  // 2 * 8 = 16
        expect(simpleMultiplication(0)).toBe(0);   // 0 * 8 = 0
    });

    test('Multiplication par 9 si le nombre est impair', () => {
        expect(simpleMultiplication(3)).toBe(27);  // 3 * 9 = 27
        expect(simpleMultiplication(5)).toBe(45);  // 5 * 9 = 45
        expect(simpleMultiplication(1)).toBe(9);   // 1 * 9 = 9
    });

    test('Gestion des nombres négatifs', () => {
        expect(simpleMultiplication(-4)).toBe(-32);  // -4 * 8 = -32
        expect(simpleMultiplication(-3)).toBe(-27);  // -3 * 9 = -27
    });
});
