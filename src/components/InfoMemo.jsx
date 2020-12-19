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
    title: 'La chauve-souris',
    description:
      "Impactées par l'éclairage nocturne, les chauves-souris, ainsi que d'autres espèces, fuient les villes et voient leur territoire de chasse considérablement réduit. Leur reproduction est également impactée.",
  },
  {
    id: 1,
    image: insecte,
    title: 'Les insectes',
    description:
      'Une majorité de nos insectes volants sont nocturnes. Des milliers sont tués chaque nuit par l&apos;éclairage public qui attire irrésistiblement certains insectes : ceux-ci finissent par mourir d&apos;épuisement... D&apos;autres espèces d&apos;insectes nocturnes fuient cette lumière instrusive, ce qui les fait disparaître de la zone géographique éclairée. Cela génère une réaction en chaîne, et c&apos;est toute la biodiversité qui en est perturbée.',
  },
  {
    id: 2,
    image: etoile,
    title: 'Le ciel étoilé',
    description:
      "Apercevoir un soir d'été la beauté de la voie lactée, ou observer les planètes et les constellations avec un télescope... devient impossible dans certaines zones géographiques. Une meilleure gestion de l'éclairage nocturne permet de retrouver nos chères étoiles filantes !",
  },
  {
    id: 3,
    image: homme,
    title: "L'homme",
    description:
      "Notre horloge biologique est en partie basée sur l'alternance jour/nuit (lumière/obscurité). Trop d'éclairage nocturne perturbe la sécrétion de l'hormone du sommeil (mélatonine), causant insomnies, troubles du sommeil, etc.",
  },
  {
    id: 4,
    image: lampadaire,
    title: 'Les lampadaires',
    description:
      "Il est important pour les villes de s'équiper en lampadaires plus adaptés aux besoins réels. Certains sont capables de centraliser la lumière sur un point précis (plûtot que de la diffuser), le choix des ampoules est également important.",
  },
  {
    id: 5,
    image: plante,
    title: 'La flore urbaine',
    description:
      "La flore se voit touchée, notamment lorsqu'elle se développe près d'une source lumineuse. Elle voit son développement accéléré. Les arbres par exemple ont un bourgeonnement précoce, ce qui boulverse toute la biodiversité...",
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
