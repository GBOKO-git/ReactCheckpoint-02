// Le composant Player doit rendre une carte react-bootstrap. La carte affichera tous les attributs pour chaque joueur défini dans players.js.
// Déstructurez tous les attributs pour le composant Player.
// importer react
import React from 'react';
// impoter le json
import {Card} from "react-bootstrap";

 const Player = ({ name, club, country, shirtNumber, age, image, footballeur }) =>{
    return(
    <Card className="card" style={{width: "25rem;"}}>
        <img src={image} alt={name} style={{ width: '150px', height: '150px', borderRadius: '10px' }} />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{footballeur}</Card.Title>
          <p>Nom: {name}</p>
          <p>Equipe: {club}</p>
          <p>Nationalité: {country}</p>
          <p>Numéro de maillot: {shirtNumber}</p>
          <p>Age: {age}</p>
        </Card.Body>
      </Card>
      );
};
// exporter player
export default Player;