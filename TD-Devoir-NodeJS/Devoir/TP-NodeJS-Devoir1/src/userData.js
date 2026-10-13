

const users = [
    { name: "Marie Durand", age: 20, email: "marie@example.com" },
    { name: "Jean Dupont", age: 17, email: "jean@example.com" },
    { name: "Sarah Martin", age: 25, email: "sarah@example.com" }
];

function formatUsers(users) {
    return users.map(user =>
        `Nom: ${user.name}, Age: ${user.age}, Email: ${user.email}`
    );
}

function getAdults(users) {
    return users.filter(user => user.age >= 18);
}

function findUserByEmail(users, email) {
    return users.find(user => user.email === email) || null;
}

module.exports = { users, formatUsers, getAdults, findUserByEmail };
