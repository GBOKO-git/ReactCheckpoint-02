// Import du composant Player et les données des joueurs à partir de players.js.
import Player from './Player';
import players from './Players';
//Affichez tous les joueurs à l'intérieur de PlayerList.js, en parcourant tous les éléments du tableau de joueurs (consultez la fonction .map).
 const PlayersList = () =>{
    return (
        <div>
            <h2>Listes des joueurs</h2>
            <div className='players-list'>
            {players.map(player =>(
            //Lors du parcours des joueurs, transmission les props au composant Player 
            // Utilisation de l'opérateur de propagation {...player} pour transmettre les propriétés de chaque joueur

                <Player key={player.name} {...player} />
            ))}
        </div>
        </div>
    )
}
//export du composant PlayerList.
export default PlayersList;