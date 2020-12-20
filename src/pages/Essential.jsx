/* eslint-disable no-lonely-if */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './essential.css';
import backgroundArticle from './background_article.jpg';
import Loader from '../components/Loader';

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

export default function Essential() {
  const [activeIdMessage, setActiveIdMessage] = useState(0);
  const [messageKey, setMessageKey] = useState({});
  const [keyMessage, setKeymessage] = useState(null);
  const [keyNumber, setKeyNumber] = useState(null);
  const [keyNumberRand, setKeyNumberRand] = useState([]);

  useEffect(() => {
    (async () => {
      const { keymessage, keynumber } = await (
        await axios.get(
          'https://john32313.github.io/api_pollution_lumineuse/db.json',
        )
      ).data;
      setKeymessage(keymessage);
      setKeyNumber(keynumber);
      setKeyNumberRand(generateRandomTab2Key(0, keynumber.length - 1));
      setMessageKey(keymessage[0]);
    })();
  }, []);

  useEffect(() => {
    if (keyMessage !== null) {
      setMessageKey(keyMessage.find((k) => k.id === activeIdMessage));
    }
  }, [activeIdMessage]);

  if (!keyMessage || !keyNumber)
    return (
      <div className="essential">
        <h2>L'essentiel</h2>
        <Loader />
      </div>
    );
  return (
    <div className="essential">
      <h2>L'essentiel</h2>
      <section className="essential_bloc">
        <aside className="keynumber_bloc">
          <h2>Chiffres-clés</h2>
          <div className="keynumber_details">
            {keyNumberRand.length !== 0 &&
              keyNumberRand.map((k, itt) =>
                itt === 1 ? (
                  <KeyMessageBulle
                    align="keymessage_bulle_right"
                    key={keyNumber[k].id}
                    text={keyNumber[k].text}
                  />
                ) : (
                  <KeyMessageBulle
                    key={keyNumber[k].id}
                    text={keyNumber[k].text}
                  />
                ),
              )}
          </div>
        </aside>

        <article className="keymessage_bloc">
          <h2>Messages - clés</h2>
          <div className="button_keymessage_bloc">
            {keyMessage.map((k) => (
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

const ArticleKeyMessage = ({ imgBackground, title, description }) => {
  let descc;
  if (description) {
    const desc = description.split('.');
    desc[0] = `<strong>${desc[0]}</strong>`;
    descc = desc.join('.');
  }
  return (
    <>
      <div className="image_article">
        <img
          className="image_article"
          alt="article_image"
          src={imgBackground}
        />
        <h2>{title}</h2>
      </div>
      <div
        className="text_article"
        dangerouslySetInnerHTML={{ __html: descc }}
      />
    </>
  );
};

const KeyMessageBulle = ({ text, align }) => (
  <div
    dangerouslySetInnerHTML={{ __html: colorNumberInText(text) }}
    className={align ? `keynumber_bulle ${align}` : 'keynumber_bulle'}
  />
);
