# React JS Fundamentals - Checkpoint 02
Bienvenue dans le projet React Checkpoint 02 où vous apprendrez à créer des cartes de joueur FIFA en utilisant React.

# Objectif
Dans ce projet, vous allez construire une interface qui affiche des informations sur différents joueurs de football sous forme de cartes. Vous utiliserez les concepts fondamentaux de React, tels que les composants, les props et le passage de données entre les composants.

# Instructions
# 1. Créez un projet avec create-react-app
Commencez par créer un nouveau projet React avec la commande suivante :

Utilisez npx create-react-app pour créer votre projet.

Accédez au répertoire du projet créé.

# 2. Créez un fichier players.js
Créez un fichier appelé players.js dans le dossier src/ pour définir un tableau d'objets JSON contenant les informations des joueurs. Ajoutez au moins 4 joueurs avec les informations suivantes :

Nom du joueur

Équipe du joueur

Nationalité du joueur

Numéro de maillot

Âge du joueur

URL de l'image du joueur

# 3. Créez un fichier Player.js
Créez un composant Player qui affichera les informations de chaque joueur sous forme de carte. Utilisez React-Bootstrap pour la mise en page et les styles. Assurez-vous de :

Déstructurer les props pour chaque joueur.

Utiliser un style en ligne pour personnaliser l'apparence de la carte.

# 4. Créez un fichier PlayersList.js
Créez un composant PlayersList qui affiche tous les joueurs en parcourant le tableau de joueurs avec la méthode .map(). Assurez-vous de :

Passer les informations du joueur comme props au composant Player.

# 5. Modifiez App.js
Dans le fichier App.js, importez le composant PlayersList et affichez-le dans le rendu de l'application.

# 6. Installez React-Bootstrap
Assurez-vous d'installer React-Bootstrap pour pouvoir utiliser les composants comme les cartes. Pour ce faire :

Installez React-Bootstrap et Bootstrap.

Importez le fichier CSS de Bootstrap dans le fichier index.js.

# Tester le projet
Pour tester votre projet, exécutez la commande suivante dans le terminal à partir du répertoire de votre projet :

Lancez le serveur de développement avec npm start.

Ouvrez votre navigateur et accédez à http://localhost:3000 pour voir l'application en action.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
