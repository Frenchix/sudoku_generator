# GENERATEUR DE GRILLES SUDOKU

API en NodeJs qui permet de générer des grilles de sudoku aléatoire

Un front est également disponible pour montrer l'utilisation de l'API

# Comment l'utiliser

Cloner le dépot en local

```bash
git clone <url de ce dépôt>
```

Installer les dépéndances

```bash
npm install
```
Renommer .env.example en .env et modifier le port si nécessaire

# Lancement
 pour lancer avec nodemon
```bash
npm run dev
```

## Précisions 

Le chemin de l'API pour avoir la génération des nombres est: localhost:3000/generate (3000 ou autre selon .env)

L'API renvoi un tableau de 81 chiffres


Lancer le fichier index.html dans le dossier public pour avoir un apercu en Front 

Si le port du serveur express n'est pas 3000 il faut le changer lors de l'appel fetch dans la fonction getNumbers dans le fichier public/js/app.js
