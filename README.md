# Projet de Notification d'Offres d'Emploi

Ce projet vise à développer une Progressive Web App (PWA) fiable et performante, capable de fonctionner hors-ligne et d’envoyer des notifications push sécurisées grâce à l'authentification VAPID.

## Langages de Programmation Utilisés

- **JavaScript** : Utilisé pour le frontend (React) et le backend (Node.js/Express).

## Dépendances

### Backend dans le repo backend

- **Node.js** : Environnement d'exécution JavaScript pour le backend.
- **Express** : Framework minimaliste pour créer l'API backend.
- **web-push** : Utilisé pour envoyer des notifications push avec le support VAPID.
- **dotenv** : Charge les variables d'environnement à partir d'un fichier `.env`.
- **body-parser** : Middleware pour analyser le corps des requêtes HTTP.
- **cors** : Middleware pour gérer les Cross-Origin Resource Sharing (CORS).

### Frontend

- **React** : Bibliothèque JavaScript pour construire l'interface utilisateur.
- **Tailwind CSS** : Framework CSS pour la mise en forme et le style des composants.
- **Service Worker** : Permet de gérer les notifications push et le cache.

### Installation des Dépendances

Pour installer toutes les dépendances, exécutez la commande suivante dans le répertoire du projet :

```bash
npm install
```

### Lancer le frontend

Pour lancer le frontend, exécutez la commande suivante dans le répertoire (à la racine)du projet :

```bash
npm run dev
```

## Fonctionnalités Développées

### Backend

1. **Gestion des Offres d'Emploi** : Permet de lire, ajouter et récupérer des offres d'emploi spécifiques.
   - **GET /api/jobs** : Récupère toutes les offres d'emploi disponibles.
   - **POST /api/jobs** : Ajoute une nouvelle offre d'emploi et envoie une notification push aux abonnés.
   - **GET /api/jobs/:id** : Récupère les détails d'une offre d'emploi spécifique par ID.
2. **Notifications Push** : Envoie une notification push aux utilisateurs abonnés chaque fois qu'une nouvelle offre d'emploi est ajoutée.

   - **web-push** : Envoie les notifications via les clés VAPID.
   - **Service Worker** : Gère les notifications et redirige vers la page de l'offre en cas de clic.

3. **API d'Abonnement aux Notifications** :
   - **POST /subscribe** : Enregistre un nouvel abonné pour recevoir des notifications push.

### Frontend

1. **Affichage des Offres d'Emploi** :
   - **Page d’accueil** : Affiche la liste des nouvelles offres ajoutées.
   - **Page de notification** : Affiche les détails de la dernière offre ajoutée ou d'une offre spécifique.
2. **Notifications Push** :

   - Notifications envoyées aux utilisateurs lorsqu'une nouvelle offre est ajoutée.
   - Redirection vers la page de l'offre spécifique en cliquant sur la notification.

3. **Composant Notification** : Bouton qui affiche le nombre de notifications disponibles et redirige vers la page des notifications.

## Installation et Exécution

1. Clonez ce dépôt :

   ```bash
   git clone <URL_du_dépôt>
   cd <nom_du_dossier>
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Créez un fichier `.env` dans le répertoire racine du projet et ajoutez les clés VAPID pour les notifications push :

   ```plaintext
   PUBLIC_VAPID_KEY=votre_cle_publique
   PRIVATE_VAPID_KEY=votre_cle_privee
   Port: votre port
   ```

4. Lancez le serveur :

   ```bash
   node server.js
   ```

5. Accédez à l'application dans votre navigateur à l'adresse [http://localhost:5000](http://localhost:5000).

## Structure du Projet

- `server.js` : Fichier principal du backend, configure les routes et gère les notifications.
- `custom-service-worker.js` : Service Worker pour gérer les notifications push et le cache.
- `src/components` : Composants React pour l’interface utilisateur, y compris `NotificationsButton` et `PageOffre`.
- `public` : Fichiers publics, y compris le service worker et les icônes.
- `.env` : Fichier pour stocker les variables d'environnement, y compris les clés VAPID.

## Auteurs

Développé par :

Amina LOZI
Mustapha SAID
Vladislav PITENTI
Mariya ABAAKIL
