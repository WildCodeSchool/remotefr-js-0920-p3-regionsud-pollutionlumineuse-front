/* eslint-disable no-lonely-if */
import React, { useState, useEffect } from 'react';
import './essential.css';
import backgroundArticle from './background_article.jpg';

function generateRandomTab2Key(min, max) {
  const num = Math.floor(Math.random() * max);
  return num === max ? [num, min] : [num, num + 1];
}

function colorNumberInText(chaine) {
  const chaineSplitted = chaine.split(' ');
  let isBracket = false;
  let isNumberRead = false;

  for (let i = 0; i < chaineSplitted.length; i += 1) {
    if (chaineSplitted[i].includes('(')) {
      isBracket = true;
    }
    if (
      !Number.isNaN(parseInt(chaineSplitted[i], 10)) &&
      isNumberRead === false &&
      isBracket === false
    ) {
      isNumberRead = true;
      chaineSplitted[i] = `<span class='keyNumberRed'>${chaineSplitted[i]}`;
    } else {
      if (
        Number.isNaN(parseInt(chaineSplitted[i], 10)) &&
        isBracket === false
      ) {
        if (isNumberRead && chaineSplitted[i] === '%') {
          chaineSplitted[i] = `${chaineSplitted[i]}</span>`;
          isNumberRead = false;
        } else {
          chaineSplitted[i] = `</span>${chaineSplitted[i]}`;
          isNumberRead = false;
        }
      }
    }

    if (chaineSplitted[i].includes(')')) {
      isBracket = false;
    }
  }
  return chaineSplitted.join(' ');
}

const keymessage = [
  {
    id: 1,
    title: 'La nuit et l’homme',
    description:
      'La nuit est à la fois mystérieuse et chargée d’une certaine magie. Elle attire, intrigue, fait parfois peur. De l’enfant qui vérifie sous son lit de peurLa nuit est à la fois mystérieuse et chargée d’une certaine magie. Elle attire, intrigue, fait parfois peur. De l’enfant qui vérifie sous son lit de peurLa nuit est à la fois mystérieuse et chargée d’une certaine magie. Elle attire, intrigue, fait parfois peur. De l’enfant qui vérifie sous son lit de peur',
  },
  {
    id: 2,
    title: 'La nuit et lmme',
    description:
      'La nuit est à la fois mystérieuse et chargée d’une certaine magie. Elle attire, intrigue, fait parfois peur. De l’enfant qui vérifie sous son lit de peur',
  },
  {
    id: 3,
    title: 'La nuit et akd',
    description:
      'La nuit est à la fois mystérieuse et chargée d’une certaine magie. Elle attire, intrigue, fait parfois peur. De l’enfant qui vérifie sous son lit de peur',
  },
  {
    id: 4,
    title: 'La nuit et l’homme',
    description: 'La nuit est à la fois mystérieuse et charg de peur',
  },
  {
    id: 5,
    title: 'La nuit et l’homme',
    description:
      'La nuit est à la fois mystérieuse et chargée d’une certaine magie. Elle attire, intrigue, fait parfois peur. De l’enfant qui vérifie sous son lit de peur',
  },
  {
    id: 6,
    title: 'La nuit et l’homme',
    description:
      'La nuit est à la fois mystérieuse et chargée d’une certaine magie. Elle attire, intrigue, fait parfois peur. De l’enfant qui vérifie sous son lit de peur',
  },
  {
    id: 7,
    title: 'La nuit et l’homme',
    description:
      'La nuit est à la fois mystérieuse et chargée d’une certaine magie. Elle attire, intrigue, fait parfois peur. De l’enfant qui vérifie sous son lit de peur',
  },
  {
    id: 0,
    title: 'La nuit et l’homme',
    description:
      'La nuit est à la fois mystérieuse et chargée d’une certaine magie. Elle attire, intrigue, fait parfois peur. De l’enfant qui vérifie sous son lit de peur',
  },
];

const keynumber = [
  {
    id: 0,
    text:
      '30 % des vertébrés et plus de 60 % des invertébrés sont nocturnes (Hölker et al., 2010)',
  },
  {
    id: 1,
    text:
      'Le nombre d’insectes tués est estimé à 150 par lampadaire et par nuit d’été ce qui représente pour la France, près d’1,5 milliard par nuit (Eisenbeis et Hassel, 2000)',
  },
  {
    id: 2,
    text:
      'En France, le parc d’éclairage public est constitué de 10,5 millions de points lumineux qui consomment 5 milliards de KWH par an et coute représente 450 M€. (Source Association Française de l’Eclairage Public chiffres 2019 Le nombre de points lumineux a doublé en 25 ans en France (Ademe)',
  },
  {
    id: 3,
    text:
      'L’éclairage public représente 41 % de la consommation d’électricité des communes et 17 % de leurs dépenses énergétiques',
  },
  {
    id: 4,
    text:
      'En 2019 près de 80 % de la planète est touchée par la pollution lumineuse (Web Radiance Light Trends). 60 % des Européens ne voient plus la Voie lactée',
  },
];

export default function Essential() {
  const [activeIdMessage, setActiveIdMessage] = useState(0);
  const [messageKey, setMessageKey] = useState({});

  useEffect(() => {
    setMessageKey(keymessage.find((k) => k.id === activeIdMessage));
  }, [activeIdMessage]);

  const [keyNumberRand, setKeyNumberRand] = useState([]);

  useEffect(() => {
    setKeyNumberRand(generateRandomTab2Key(0, keynumber.length - 1));
  }, []);

  return (
    <div className="essential">
      <h1>L'essentiel</h1>
      <section className="essential_bloc">
        <aside className="keynumber_bloc">
          <h2>Chiffres-clés</h2>
          <div className="keynumber_details">
            {keyNumberRand.length !== 0 &&
              keyNumberRand.map((k, itt) =>
                itt === 1 ? (
                  <KeyMessageBulle
                    align="keymessage_bulle_right"
                    key={keynumber[k].id}
                    text={keynumber[k].text}
                  />
                ) : (
                  <KeyMessageBulle
                    key={keynumber[k].id}
                    text={keynumber[k].text}
                  />
                ),
              )}
          </div>
        </aside>

        <article className="keymessage_bloc">
          <h2>Messages - clés</h2>
          <div className="button_keymessage_bloc">
            {keymessage.map((k) => (
              <ButtonKeyMessage
                handleClickKeyButton={(id) => setActiveIdMessage(id)}
                key={k.id}
                id={k.id}
                title={k.title}
              />
            ))}
          </div>
          <div className="article_bloc">
            {messageKey !== {} && (
              <ArticleKeyMessage
                imgBackground={backgroundArticle}
                title={messageKey.title}
                description={messageKey.description}
              />
            )}
          </div>
        </article>
      </section>
    </div>
  );
}

const ButtonKeyMessage = ({ id, title, handleClickKeyButton }) => (
  <button
    onClick={() => handleClickKeyButton(id)}
    type="button"
    className="button_keyMessage_title"
  >
    {title}
  </button>
);

const ArticleKeyMessage = ({ imgBackground, title, description }) => (
  <>
    <div className="image_article">
      <img className="image_article" alt="article_image" src={imgBackground} />
      <h2>{title}</h2>
    </div>
    <div className="text_article">{description}</div>
  </>
);

const KeyMessageBulle = ({ text, align }) => (
  <div
    dangerouslySetInnerHTML={{ __html: colorNumberInText(text) }}
    className={align ? `keynumber_bulle ${align}` : 'keynumber_bulle'}
  />
);
