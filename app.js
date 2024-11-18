// importer le framework Express.js
// import express from "express";
const express = require("express");

const url = require('url');

//crée l'application express.js dans la variable app
const app = express();


/* le serveur retourne la réponse ci-dessous peu importe la requête
app.use((req, res) => {
    res.json({message : "Votre message a bien été reçu"});
}) */




// on va définir une route de type GET
app.get("/", (req, res) => { // ("/") veut dire que la route est par défaut
    res.end("Bonjour, dagoni woho");
});

app.get("/accueil", (req, res) => {
    res.end("Bienvenue à l'acceuil");
});

app.get("/apropos", (req, res) => {
    res.end("Qui sommes-nous");
});

app.get("/services", (req, res) => {
    res.end("Les propositions");
});

app.get("/contact", (req, res) => {
    res.end("Le formulaire à remplir");
});

// créer une route avec la methode POST = créer une route
app.post("/formulaire", (req, res) => {
    res.end("Ton formulaire doit être à jour");
});

// créer une route avec la méthode PUT qui permet de modifier une route
app.put("/accueil", (req, res) => {
    res.end("Welcome to my home");
});


// créer une route avec la méthode DELETE qui permet de supprime une route
app.delete("/services", (req, res) => {
    res.end("On a supprimé l'onglet services");
});

/*
//lancer l'application
app.listen(3001, () => {
    console.log("Serveur écoute le port 3001");
});
*/

app.get("/api/nom", (req, res, next) => {
    const monObjet = [{
        nom : "ABDOU",
        prenom : "Kamal"
}];
    res.status(200).json(monObjet);
});

app.get("/api/url", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/htlm'});
    res.write(req.url);
    res.end();
});

app.get("/param", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let param = req.query.annee;
    res.end(param);
});



module.exports = app ;