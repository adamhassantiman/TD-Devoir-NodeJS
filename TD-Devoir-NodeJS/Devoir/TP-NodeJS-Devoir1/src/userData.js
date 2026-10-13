
// Module contenant les utilisateurs et les fonctions associées.

const users = [
    { name: "Marie Durand", age: 20, email: "marie@example.com" },
    { name: "Jean Dupont", age: 17, email: "jean@example.com" },
    { name: "Sarah Martin", age: 25, email: "sarah@example.com" }
];

// Formate chaque utilisateur en une chaîne de caractères.
function formatUsers(users) {
    return users.map(user =>
        `Nom: ${user.name}, Age: ${user.age}, Email: ${user.email}`
    );
}

// BONUS 1 : retourne uniquement les utilisateurs majeurs.
function getAdults(users) {
    return users.filter(user => user.age >= 18);
}

// BONUS 2 : recherche un utilisateur par son adresse e-mail.
function findUserByEmail(users, email) {
    return users.find(user => user.email === email) || null;
}

// Exporte les données et les fonctions pour les autres fichiers.
module.exports = { users, formatUsers, getAdults, findUserByEmail };
