/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import frontcard from '../image/backcardmemo.png';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Memo({ memoryList, changeLeftEven, infoToModal }) {
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
          memoryList.find((c) => c.id === Number(secondcard.dataset.card)),
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
      {memoryList.concat(memoryList).map((card, itt) => (
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
