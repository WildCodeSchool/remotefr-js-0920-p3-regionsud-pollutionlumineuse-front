import React from 'react';
import chauvesouris from '../image/chauvesouris.png';
import insecte from '../image/insecte.png';
import etoile from '../image/etoile.png';
import homme from '../image/homme.png';
import lampadaire from '../image/lampadaire.png';
import plante from '../image/plante.png';
import './infomemo.css';

const memory = [
  {
    id: 0,
    image: chauvesouris,
    title: 'La Chauve-Souris',
    description:
      "Impacter par l'éclairage nocturne, les chauves-souris, ainsi que d'autres espèces, fuit les villes et voient leur territoire de chasse considérablement réduit. Leur reproduction est également impacté.",
  },
  {
    id: 1,
    image: insecte,
    title: 'Les insectes',
    description:
      'Une majorité de nos insectes volants sont nocturnes. Ils sont tué a causes des éclairages publics notamment qui les attire pour certain, ou bien il fuit completement. Ce qui boulverse la biodiversité et fait fuire leur prédateurs.',
  },
  {
    id: 2,
    image: etoile,
    title: 'Le ciel étoilé',
    description:
      "L'éclairage nocturne empêche fortement d'admirer le spectacle nocturne au dessus de nos têtes. Appercevoir un soir d'été une rivière d'étoile et peut être quelques étoiles filantes est remis en question selon l'altitude avec ce type de pollution.. ",
  },
  {
    id: 3,
    image: homme,
    title: "L'Homme",
    description:
      "Notre systeme/horloge biologique est touché par la pollution lumineuse. La sécrétion de l'hormone du sommeil (mélatonine) est la principale victime ce qui peut causé des insomnies, troubles du sommeil, etc. ",
  },
  {
    id: 4,
    image: lampadaire,
    title: 'Les Lampadaires',
    description:
      "Il est importer pour les villes de s'équiper en lampadaire plus adapté au besoin. Certaine centralise la lumiere sur un point plûtot que de la diffuser, le type d'ampoule est également important.",
  },
  {
    id: 5,
    image: plante,
    title: 'La Flore urbaine',
    description:
      "La flore se voit touché, notamment lorsqu'elle se développe près d'une source lumineuse. Elle voit son développement accéléré. Les arbres par exemple ont un bourgeonnement précoce, ce qui boulverse tout la biodiversité...",
  },
];

export default function InfoMemo() {
  return (
    <div className="infomemo">
      {memory.map((m) => (
        <CardInfo
          key={m.id}
          title={m.title}
          image={m.image}
          description={m.description}
        />
      ))}
    </div>
  );
}

const CardInfo = ({ title, image, description }) => (
  <div className="cardInfo">
    <div className="cardInfo_header">
      <h3>{title}</h3>
    </div>
    <div className="cardInfo_body">
      <img src={image} alt="inforessource" />
      <p>{description}</p>
    </div>
  </div>
);
