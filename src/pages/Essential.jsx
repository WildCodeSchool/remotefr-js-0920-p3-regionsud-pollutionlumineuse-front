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
    id: 0,
    title: 'La nuit et l’homme',
    description:
      'La nuit est à la fois mystérieuse et chargée d’une certaine magie. Elle attire, intrigue, fait parfois peur. De l’enfant qui vérifie sous son lit de peur du monstre, à l’adulte qui s’émerveille devant les étoiles, il y a chez chacun une fascination pour cette période à part. Elle éveille chez l’Homme, animal diurne, la palette de ses émotions de la peur primale datant du début de notre évolution associant la nuit au prédateur jusqu’à à la création artistique ou la nuit est la muse de nombreux artistes.',
  },
  {
    id: 1,
    title: 'La nuit et la santé humaine',
    description:
      'L’Homme étant habitué à une alternance de jour et de nuit, son cycle de sommeil est synchronisé avec le cycle de lumière et d’obscurité de la Terre. L’éclairage artificiel nocturne perturbe celui-ci et a notamment des effets sur sa santé comme la perturbation de la production des hormones, du sommeil, de la digestion, de la régénération des cellules. En matière de pollution lumineuse l’homme est principalement soumis à la lumière intrusive : une lumière non voulue qui envahie son habitat du fait de la présence d’éclairage extérieur.',
  },
  {
    id: 2,
    title: 'La nuit son coût',
    description:
      'Les chiffres cités dans la rubrique « Chiffres clés – le saviez-vous ? » témoignent de l’impact économique important et varié aussi bien positivement que négativement. L’éclairage public est pourvoyeur d’emplois pour sa gestion et son entretien et la recherche d’innovations. Les enjeux autours de la biodiversité, l’énergie, la santé humaine, la culture et le patrimoine, sont autant de motivations pour les constructeurs pour rechercher des solutions plus performantes en termes de consommation énergétique et d’impacts sanitaires tout en assurant le service souhaité des usagers En France, le parc de luminaires publics est globalement vétuste, 40 % des luminaires en service ont plus de 25 ans (chiffres Syndicat de l’éclairage). Il présente un vaste potentiel de réduction des nuisances lumineuses et des consommations d’énergie grâce à une réflexion objective sur le besoin réel d’éclairage, l’installation de lampes plus efficaces, d’une meilleure orientation des zones à éclairer (le sol et non le ciel), et éventuellement l’extinction de l’éclairage en pleine nuit dans certaines zones. L’éclairage privé nocturne : supermarchés, lotissements privés, particuliers, zones d’activités, industries... consomme également une part importante d’énergie. Des actions doivent aussi être entreprises pour en réduire leurs impacts.L’éclairage public ne relève pas d’une obligation réglementaire. Il n’y a donc pas d’obligation pour les maires d’installer des systèmes d’éclairement. Certaines communes d’ailleurs n’en ont pas du tout. Le maire peut décider d’en installer dans le cadre de sa mission « de bon ordre, de sûreté, de sécurité et de salubrité publiques ». Une fois mis en place, il a en revanche l’obligation de garantir son intégrité et son bon fonctionnement.',
  },
  {
    id: 3,
    title: 'La nuit et la science',
    description:
      'Depuis la nuit des temps, le ciel étoilé a fait l’objet d’observations, pour se repérer, se diriger, pour comprendre la place de notre planète dans l’espace qui l’entoure, pour mesurer le temps, les saisons, comprendre le fonctionnement de notre bonne vieille Terre... Source inépuisable de données, la nuit est donc un domaine d’exploration scientifique. Voir dans le noir, voir au-delà du noir, tel est le défi que nous pose la nuit et auxquels ont tenté de répondre de nombreuses générations de chercheurs. Parmi toutes les disciplines scientifiques, une particulière permet d’aborder la pollution lumineuse puisqu’elle représente une gêne pour son exercice : l’astronomie. Ce sont les astronomes qui ont alerté les premiers sur la disparition de notre patrimoine naturel céleste. Fait marquant, c’est la lumière de l’Univers qui nous ouvre ses portes et la nôtre qui nous aveugle. C’est elle aussi qui nous révèle la pollution de l’air puisque c’est sur les particules que contient l’atmosphère que se reflète notre trop-plein de lumière artificielle. Car sans matière, pas de lumière. Pour bien voir la nuit, il nous faut apprendre à éteindre la lumière et laisser celle des étoiles nous montrer la voie.',
  },
  {
    id: 4,
    title: 'La nuit et la flore',
    description:
      'La lumière du soleil est vitale pour les plantes, car elle permet la photosynthèse, processus par lequel elles fabriquent des sucres indispensables à leur croissance et à la chaîne alimentaire. Parmi les plantes, on distingue les plantes de jour court et celles de jour long. Les premières ont besoin d’une dizaine d’heures de lumière chaque 24 h pour accomplir leur cycle. En prolongeant la durée du jour par des lumières artificielles, on dérègle la période de floraison qui peut s’allonger ou se raccourcir selon les espèces. Ce dérèglement induit ensuite un déphasage entre l’apparition des fleurs et celle des insectes pollinisateurs. La fructification s’en retrouve perturbée. Par ailleurs, la plupart des graines ont besoin de vivre une période d’obscurité pour germer ; exposées en permanence à la lumière, elles ne germent pas.',
  },
  {
    id: 5,
    title: 'La nuit et la faune',
    description:
      'L’éclairage artificiel nocturne affecte en particulier les animaux dans leur mobilité en provoquant deux comportements contradictoires : l’attraction ou la répulsion. Il modifie ainsi la fréquence, la temporalité ou encore le but des déplacements de la faune. Il réduit les surfaces d’habitats favorables des espèces qui fuient la lumière la nuit. Il influence ainsi la répartition de certaines espèces. L’introduction de la lumière artificielle pendant des périodes d’obscurité naturelle vient perturber les milieux dans lequel évolue la faune en perturbant notamment les relations traditionnelles proies-prédateurs. La lumière artificielle perturbe aussi les migrations de certaines espèces (oiseaux, mais aussi poissons qui utilisent le soleil ou les étoiles lors de leurs migrations comme source d’orientation), les déplacements vers les lieux de ponte ou l’orientation des jeunes (tortues qui se dirigent vers les lumières des côtes plutôt que vers la mer, pétrels à la Réunion qui percutent les immeubles, etc.). Particulièrement sensibles, les insectes subissent un double effet de l’éclairage nocturne : - l’effet de « fixation » ou de « captivité » : quand un insecte approche la zone d’attraction d’un point lumineux, et qu’il ne peut s’en échapper jusqu’à en mourir : brulé, d’épuisé ou capturé par un prédateur. -. L’effet «crash barrier» : les insectes se retrouvent bloqués sur leur parcours par la barrière lumineuse qu’ils ne peuvent pas franchir comme par exemple l’éclairage routier.',
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
