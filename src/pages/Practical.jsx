import React from 'react';
import './Practical.css';
import PracticalDescription from '../components/PracticalDescription';
import skyQualityMeter from '../image/sky-quality-meter.png';
import luxmetre from '../image/luxmetre.png';
import jumelles from '../image/jumelles.png';
import carteDesEtoiles from '../image/carte-des-etoiles.jpg';
import amplificateur from '../image/amplificateur-de-son.png';

const tools = [
  {
    id: 0,
    title: 'Sky quality meter',
    description:
      'C’est un petit boitier muni d’un capteur avec une lentille qui sert à mesurer la noirceur du ciel et à constater l’état de la qualité du ciel nocturne autour de soi.',
    utility:
      'Vous allez pouvoir évaluer la qualité du ciel nocturne autour de vous (près de chez soi ou lors d’une randonnée nocturne par exemple). Il peut aussi servir à cartographier une zone à partir d’un fond de carte de la commune où vous vous trouvez en réalisant des relevés à plusieurs endroits. Cette activité peut par exemple, être proposée avec des élèves avec un prêt de SQM à utiliser en soirée chez eux avec l’aide des parents.',
    image: skyQualityMeter,
  },
  {
    id: 1,
    title: 'Luxmètre',
    description:
      "Le luxmètre mesure la quantité de lumière à un endroit donné : l’« éclairement ». Son unité de mesure est le lux (lumière en latin). Le fonctionnement d'un luxmètre repose sur un capteur : celui-ci reçoit un flux de photons qu'il convertit en signal électrique plus ou moins fort en fonction de l'intensité du flux de lumière reçu. ",
    utility:
      'Il va nous permettre de mesurer la quantité de lumière/éclairement en un point donné, reçue des différentes sources de lumière nous entourant : les définir (lampes, projecteurs, lampadaires, spots, phares de voitures)',
    image: luxmetre,
  },
  {
    id: 2,
    title: 'Jumelles',
    description:
      "Les jumelles nous permettent de voir plus loin ! Elles sont un dispositif optique binoculaire grossissant destiné à l'observation d'objets à distance, constitué de deux lunettes symétriques montées en parallèle. La lumière (même faible) entre dans le système optique par les objectifs comportant plusieurs lentilles à l'extrémité de chaque tube.",
    utility:
      'L’observation des étoiles à l’œil nu est déjà très intéressante : on peut s’émerveiller devant leur foisonnement, distinguer leurs nuances de couleurs bleutées, orangées, voire rougeâtres. On peut aussi s’entraîner à reconnaître les constellations : certaines sont très faciles comme la Grande Ourse, Orion ou Cassiopée.',
    image: jumelles,
  },
  {
    id: 3,
    title: 'Carte des étoiles',
    description:
      'En papier ou en carton, la carte des étoiles se présente sous la forme d’un disque comportant une carte du ciel sur lequel on ajoute un masque avec une fenêtre évidée. En faisant tourner le disque selon l’heure et la date, on peut retrouver dans la fenêtre les astres, étoiles et planètes, visibles lors de l’observation.',
    utility:
      'La carte du ciel va permettre d’identifier la partie de ciel visible à une date et un horaire donné. Elle permettra ensuite de reconnaître les astres visibles et de se repérer.',
    image: carteDesEtoiles,
  },
  {
    id: 4,
    title: 'Amplificateur de son',
    description:
      'L’amplificateur de son est un appareil constitué d’une parabole et d’un casque audio. Il permet d’écouter, voire d’enregistrer, des sons d’une faible intensité à 20 ou 30 mètres de distance et des sons plus forts à une distance de 100 mètres. L’amplificateur va augmenter les sons et les restitue dans le casque.',
    utility:
      'Cet appareil va nous permettre d’écouter les bruits tout autour de nous, ceux auxquels on ne fait pas forcément attention, ceux que l’on n’entend pas bien. Nous allons découvrir l’un après l’autre le bruit de la vie, la nuit.',
    image: amplificateur,
  },
];

export default function Practical() {
  const [detail, setDetail] = React.useState(tools[0]);
  return (
    <div className="Practical">
      <h2>Les outils pour explorer la nuit</h2>
      <div className="photos">
        <article className="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </article>
        {/* eslint-disable-next-line */}
        <img
          id="0"
          src={skyQualityMeter}
          alt={tools[0].title}
          onClick={(e) => {
            setDetail(tools.find((t) => t.id === Number(e.target.id)));
          }}
        />
        {/* eslint-disable-next-line */}
        <img
          id="1"
          src={luxmetre}
          alt={tools[1].title}
          onClick={(e) => {
            setDetail(tools.find((t) => t.id === Number(e.target.id)));
          }}
        />
        {/* eslint-disable-next-line */}
        <img
          id="2"
          src={jumelles}
          alt={tools[2].title}
          onClick={(e) => {
            setDetail(tools.find((t) => t.id === Number(e.target.id)));
          }}
        />
        {/* eslint-disable-next-line */}
        <img
          id="3"
          src={carteDesEtoiles}
          alt={tools[3].title}
          onClick={(e) => {
            setDetail(tools.find((t) => t.id === Number(e.target.id)));
          }}
        />
        {/* eslint-disable-next-line */}
        <img
          id="4"
          src={amplificateur}
          alt={tools[4].title}
          onClick={(e) => {
            setDetail(tools.find((t) => t.id === Number(e.target.id)));
          }}
        />
      </div>
      <PracticalDescription
        title={detail.title}
        description={detail.description}
        utility={detail.utility}
        image={detail.image}
      />
    </div>
  );
}
