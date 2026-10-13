
console.log(global);

setTimeout(() => {
    console.log("Salut le monde, affiché après 2 secondes");
}, 2000);

let compteur = 0;

const intervalId = setInterval(() => {
    compteur++;
    console.log("exécution...", compteur);

    if (compteur >= 6) {
        clearInterval(intervalId);
        console.log("Interval arrêté après 3 secondes");
    }
}, 500);

const immediateId = setImmediate(() => {
    console.log("setImmediate exécuté");
});

clearImmediate(immediateId);

queueMicrotask(() => {
    console.log("Microtâche exécutée");
});

console.log("Code principal exécuté avant la microtâche");

const original = { a: 1, b: { c: 2 } };
const copie = structuredClone(original);
copie.b.c = 42;

console.log("Original :", original.b.c);
console.log("Copie :", copie.b.c);

const message = "Hello World";
const encoded = btoa(message);
console.log("Encodé :", encoded);
console.log("Décodé :", atob(encoded));

const start = performance.now();

for (let i = 0; i < 1000000; i++) {
}

const end = performance.now();
console.log(`Temps d'exécution : ${end - start} ms`);

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log("Données récupérées :", json))
    .catch(err => console.log("Erreur :", err.message));

if (typeof navigator !== "undefined") {
    console.log("User Agent :", navigator.userAgent);
} else {
    console.log("navigator n'est pas disponible dans cet environnement Node.js");
}

const crypto = require("crypto");
const hash = crypto.createHash("sha256");
hash.update("Hello World");

console.log("Hachage SHA-256 :", hash.digest("hex"));
