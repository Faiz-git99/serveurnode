// Importe le protocole htpp
// On peut l'écrire de façon suivante aussi import {createServer} from "http"
const http = require('http');

const app = require('./app');

const numPort = 3002;

app.set("port", numPort);

const server = http.createServer(app);

// déclaration du serveur en utilsant http
// Il y a cette façon comme ça const server = http.createServer((req, res) => {});
//const server = http.createServer((req, res) => {
   // res.end("Bonjour, je suis le serveur. "); // res suivi de la methode .end() permet de retourner le message affiché
//});

// récupère l'heure
const date = new Date(); // déclare une variable qui pour valeur un objet d'instance date
const time = date.toLocaleTimeString(); // affiche l'heure locale géographiquement
 
// Le serveur est disponible sur le port 3000
server.listen(numPort, () => {
    console.log(date.toLocaleDateString(), date.toLocaleTimeString(), " - Le serveur est activé au port : ", numPort);
}); // listen() veut dire "écoute" permet d'indiquer le lieu de l'affichage



// importer le serveur app
//const app = require("./app");

// préciser l'entrée
//app.set("port", 3000);

//création du serveur
//const server = createServer(app);

