
const {
    users,
    formatUsers,
    getAdults,
    findUserByEmail
} = require("./userData");

console.log("__filename :", __filename);
console.log("__dirname :", __dirname);

console.log("\nListe formatée des utilisateurs :");
console.log(formatUsers(users));

console.log("\nUtilisateurs majeurs :");
console.log(formatUsers(getAdults(users)));

console.log("\nRecherche d'un utilisateur :");
const found = findUserByEmail(users, "marie@example.com");
console.log(found ? found : "Utilisateur introuvable");

console.log("\nRecherche d'un utilisateur inexistant :");
const notFound = findUserByEmail(users, "inconnu@example.com");
console.log(notFound ? notFound : "Utilisateur introuvable");
