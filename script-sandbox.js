// Initialiser AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Fonction pour exécuter le code JavaScript entré par l'utilisateur
function runCode() {
    const code = document.getElementById("code").value;
    const divResultat = document.getElementById("resultat");
    divResultat.innerHTML = ""; // Vider l'ancien résultat

    try {
        const consoleCapture = [];

        // Fausse console.log pour capturer les sorties
        const fakeConsole = {
            log: function(message) {
                consoleCapture.push(message);
            }
        };

        // Fausse alert pour capturer aussi les alertes
        const fakeAlert = function(message) {
            consoleCapture.push("ALERT: " + message);
        };

        // Exécuter le code de l'utilisateur dans une fonction sécurisée
        const fonctionUtilisateur = new Function('console', 'alert', code);
        fonctionUtilisateur(fakeConsole, fakeAlert);

        divResultat.innerHTML = consoleCapture.join("<br>");
    } catch (error) {
        divResultat.innerHTML = "Erreur : " + error.message;
    }
}
  