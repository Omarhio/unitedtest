const fs = require('fs');

function writeLog(message) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync('app.log', `[${timestamp}] ${message}\n`);
}

function simpleMultiplication(number) {
    try {
        const result = number % 2 === 0 ? number * 8 : number * 9;
        writeLog(`INFO: Multiplication effectuée - Entrée: ${number}, Résultat: ${result}`);
        return result;
    } catch (error) {
        writeLog(`ERROR: Échec de la multiplication - ${error.message}`);
        throw error;
    }
}

try {
    console.log(simpleMultiplication(5));  // 45
    console.log(simpleMultiplication(4));  // 32
} catch (error) {
    console.error("Erreur lors de l'exécution :", error);
}

module.exports = simpleMultiplication;
