
// Importation des données et des fonctions du module.
const {
    users,
    formatUsers,
    getAdults,
    findUserByEmail
} = require("./userData");

// Affiche le chemin complet du fichier et celui de son dossier.
console.log("__filename :", __filename);
console.log("__dirname :", __dirname);

// Affiche la liste de tous les utilisateurs.
console.log("\nListe formatée des utilisateurs :");
console.log(formatUsers(users));

// BONUS 1 : affiche uniquement les utilisateurs majeurs.
console.log("\nUtilisateurs majeurs :");
console.log(formatUsers(getAdults(users)));

// BONUS 2 : recherche un utilisateur par son e-mail.
console.log("\nRecherche d'un utilisateur :");
const found = findUserByEmail(users, "marie@example.com");
console.log(found ? found : "Utilisateur introuvable");

// Test avec une adresse e-mail inexistante.
console.log("\nRecherche d'un utilisateur inexistant :");
const notFound = findUserByEmail(users, "inconnu@example.com");
console.log(notFound ? notFound : "Utilisateur introuvable");
