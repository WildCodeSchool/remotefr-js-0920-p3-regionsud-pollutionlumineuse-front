/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import chauvesouris from '../image/chauvesouris.png';
import insecte from '../image/insecte.png';
import etoile from '../image/etoile.png';
import homme from '../image/homme.png';
import lampadaire from '../image/lampadaire.png';
import plante from '../image/plante.png';
import frontcard from '../image/backcardmemo.png';

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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Memo({ changeLeftEven, infoToModal }) {
  useEffect(() => {
    let firstcard = null;
    let secondcard = null;
    function reset() {
      [firstcard, secondcard] = [null, null];
    }

    function disableCard() {
      firstcard.removeEventListener('click', flipCard);
      secondcard.removeEventListener('click', flipCard);
      reset();
    }
    async function unflipCards() {
      await sleep(200);
      firstcard.children[0].classList.toggle('flipped');
      firstcard.children[1].classList.toggle('flipped');
      secondcard.children[0].classList.toggle('flipped');
      secondcard.children[1].classList.toggle('flipped');

      reset();
    }
    function flipCard() {
      this.children[0].classList.toggle('flipped');
      this.children[1].classList.toggle('flipped');
      if (this === firstcard) return;
      if (firstcard === null) {
        firstcard = this;
        return;
      }

      secondcard = this;
      if (firstcard.dataset.card === secondcard.dataset.card) {
        infoToModal(
          memory.find((c) => c.id === Number(secondcard.dataset.card)),
        );
        changeLeftEven((old) => old - 1);
        disableCard();
      } else {
        unflipCards();
      }
    }

    const allCard = document.querySelectorAll('.memory-card');
    allCard.forEach((card) => {
      const randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });

    allCard.forEach((card) => card.addEventListener('click', flipCard));
  }, []);

  return (
    <div className="game_bloc">
      {memory.concat(memory).map((card, itt) => (
        // eslint-disable-next-line react/no-array-index-key
        <MemoryCard image={card.image} id={card.id} key={itt} />
      ))}
    </div>
  );
}

const MemoryCard = ({ image, id }) => (
  // card = memory-card
  <div className="memory-card" data-card={id}>
    <img className="front-face" src={frontcard} alt="cartfront" />
    <img className="back-face" src={image} alt="JS Badge" />
  </div>
);
