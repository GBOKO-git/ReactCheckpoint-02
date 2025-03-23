// fichier players.js  contient un tableau d'objets JSON contenant les détails des joueurs (au moins quatre joueurs).
// importer les image de chaque joueur


const players = [
    // Les attributs pour chaque joueur sont le nom, l'équipe, la nationalité, le numéro de maillot, l'âge et une URL d'image pour le joueur.

    {
        name:'Lionel Messi',
        club: 'Inter Miami cf',
        country: 'Argentine',
        shirtNumber: 10,
        age: 37,
        image: '/goat.webp',
        footballeur: 'Footballeur'
    },
    {
        name:'Ousmane Dembélé',
        club: 'Paris Saint-Germain',
        country: 'France',
        shirtNumber: 10,
        age: 27,
        image: 'dembele.jpg',
        footballeur: 'Footballeur'
    },
    {
        name:'Franck Kessie',
        club: 'Al Ahli',
        country: `Cote d'ivoire`,
        shirtNumber: 79,
        age: 28,
        image: 'kessie.jpg',
        footballeur: 'Footballeur'
    },
    {
        name:'Aitana Bonmatí',
        club: 'Barcelone fc',
        country: 'Espagne',
        shirtNumber: 14,
        age: 27,
        image: 'bonmati.avif',
        // juste pour personnalisé le titre
        footballeur: 'Footballeuse'
    }
]

// exporter le tableau d'objet
export default players;