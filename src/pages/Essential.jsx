import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import '../css/essential.css';
import backgroundArticle from '../image/background_article_essentiel.jpg';
import Loader from '../components/Loader';

// Number of key messages per page
const NPP = 2;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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
  const [keyNumberIndex, setKeyNumberIndex] = useState(0);
  const [keyNumberPages, setKeyNumberPages] = useState(0);
  // const [keyNumberRand, setKeyNumberRand] = useState([]);

  useEffect(() => {
    (async () => {
      const keymessage = await (await axios.get('/keymessages')).data;
      const keynumber = await (await axios.get('/keynumbers')).data;
      setKeymessage(keymessage);
      setKeyNumber(shuffle(keynumber));
      // setKeyNumberRand(generateRandomTab2Key(0, keynumber.length - 1));
      setKeyNumberPages(Math.ceil(keynumber.length / NPP));
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
          <div className="keynumber_header">
            <h2>Chiffres-clés</h2>
            <span className="keynumber_nav">
              {keyNumberPages > 0 && (
                <>
                  <button
                    type="button"
                    disabled={keyNumberIndex === 0}
                    onClick={() => setKeyNumberIndex((pi) => pi - 1)}
                  >
                    <span className="icon-arrow-left" />
                  </button>
                  {new Array(keyNumberPages).fill(0).map((_, i) => (
                    <button
                      type="button"
                      className={
                        i === keyNumberIndex
                          ? 'kn_nav_bullet active'
                          : 'kn_nav_bullet'
                      }
                      onClick={() => setKeyNumberIndex(i)}
                    >
                      <span className="icon-circle" />
                    </button>
                  ))}
                  <button
                    type="button"
                    disabled={keyNumberIndex === keyNumberPages - 1}
                    onClick={() => setKeyNumberIndex((pi) => pi + 1)}
                  >
                    <span className="icon-arrow-right" />
                  </button>
                </>
              )}
            </span>
          </div>
          <div className="keynumber_details">
            {keyNumber.length > 0 &&
              keyNumber
                .slice(keyNumberIndex * NPP, (keyNumberIndex + 1) * NPP)
                .map((kn, itt) =>
                  itt === 1 ? (
                    <KeyMessageBulle
                      align="keymessage_bulle_right"
                      key={kn.id}
                      text={kn.text}
                    />
                  ) : (
                    <KeyMessageBulle key={kn.id} text={kn.text} />
                  ),
                )}
          </div>
        </aside>
        <article className="keymessage_bloc">
          <h2>Messages - clés</h2>
          <div className="button_keymessage_bloc">
            {keyMessage.map((k) =>
              k.id === messageKey.id ? (
                <ButtonKeyMessage
                  handleClickKeyButton={(id) => setActiveIdMessage(id)}
                  key={k.id}
                  id={k.id}
                  title={k.title}
                  active
                />
              ) : (
                <ButtonKeyMessage
                  handleClickKeyButton={(id) => setActiveIdMessage(id)}
                  key={k.id}
                  id={k.id}
                  title={k.title}
                  active={false}
                />
              ),
            )}
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

const ButtonKeyMessage = ({ id, title, handleClickKeyButton, active }) => (
  <button
    onClick={() => handleClickKeyButton(id)}
    type="button"
    className={
      active
        ? 'active_button_keyMessage_title button_keyMessage_title'
        : 'button_keyMessage_title'
    }
  >
    {title}
  </button>
);

const ArticleKeyMessage = ({ imgBackground, title, description }) => {
  return (
    <>
      <div className="image_article">
        <img
          className="image_article"
          alt="article_image"
          src={imgBackground}
        />
        <h2>{title}</h2>
        <p>PNR du Mont-Ventoux - Lenny Vidal</p>
      </div>
      <div className="text_article">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </>
  );
};

const KeyMessageBulle = ({ text, align }) => (
  <div
    dangerouslySetInnerHTML={{ __html: colorNumberInText(text) }}
    className={align ? `keynumber_bulle ${align}` : 'keynumber_bulle'}
  />
);
