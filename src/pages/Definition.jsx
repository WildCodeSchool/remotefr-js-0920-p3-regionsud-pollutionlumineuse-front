import React, { useState } from 'react';
import './definition.css';
import pollutiondef from '../image/pollutiondef.jpg';

const definition = [
  {
    id: 0,
    title: 'Pollution lumineuse',
    description:
      'Pollution gênante et anormale liée à la présence nocturne de l’éclairage artificiel et qui a des conséquences sur la faune, la flore, les écosystèmes ainsi que sur la santé humaine. La pollution lumineuse « astronomique », qui « obscurcit » la vue du ciel, se distingue de la pollution lumineuse « écologique » qui modifie le comportement des espèces dans l’écosystème. Ce sont les astronomes, dans les années 1980, qui ont tiré la sonnette d’alarme et signalé l’augmentation de l’éclairage artificiel qui empêche l’observation du ciel.',
  },
  {
    id: 1,
    title: 'Eclairage artificiel',
    description:
      'Eclairage d’origine humaine qui est mis en place pour des besoins de visibilité la nuit. Il peut être installé pour des raisons de sécurité, de confort ou encore esthétiques (mise en valeur des patrimoines). Il peut être diffus et localisé, mais peut aussi être amplifié par des nuages, par un revêtement du sol particulier, créant ainsi un halo lumineux pouvant être visible sur de longues distances.',
  },
  {
    id: 2,
    title: 'Réserve internationale de ciel étoilé (RICE)',
    description:
      'Une RICE est un espace public ou privé de grande étendue jouissant d’un ciel étoilé d’une qualité exceptionnelle. Des mesures ont été prises afin de minimiser la pollution lumineuse à des fins scientifiques, éducatives, culturelles ou dans un but de préservation de la nature. La réserve doit comprendre une zone cœur où la noirceur naturelle est préservée au maximum et une région périphérique où les administrateurs publics, les individus et les entreprises reconnaissent l’importance du ciel étoilé et s’engagent à le protéger à long terme. L’international Dark Sky Association (IDA) a défini 5 appellations de ciel étoilé (ou labels ??) : Communautés, Parcs, Réserves, Sanctuaires et Espaces Urbains.',
  },
  {
    id: 3,
    title: 'Trame noire',
    description:
      "La trame noire est une déclinaison du concept développé dans les années 1980 sur les trames vertes et bleues. La trame verte et bleue (TVB) est une démarche qui vise à maintenir et à reconstituer un réseau d’échanges pour que les espèces animales et végétales puissent, comme l’Homme, circuler, s’alimenter, se reproduire, se reposer... et assurer ainsi leur cycle de vie. Elle s’appuie sur les éléments physiques de terrain pour la définition d’espaces de circulation et de communication pour les espèces. La trame noire représente l'ensemble des corridors écologiques caractérisés par une certaine obscurité et empruntés par les espèces nocturnes.",
  },
  {
    id: 4,
    title: 'La chronobiologie',
    description:
      "La chronobiologie correspond à l’étude des rythmes biologiques dans l’organisme. La recherche scientifique a mis en évidence les nombreux mécanismes de régulation des horloges internes et les impacts de son dérèglement sur la santé. Tous les organismes vivants, animaux ou végétaux ont leur propre rythme biologique et les troubles de celui peuvent avoir des conséquences aussi bien sur le sommeil que le métabolisme, sur le rythme repas/digestion, les cycles de l'ovulation, les rythmes de floraison et fructification chez les plantes, ou la fructification saisonnière des champignons, ou encore en termes de migrations animales, changement saisonnier de couleur ou épaisseur de pelage, etc.",
  },
  {
    id: 5,
    title: 'Nyctalope',
    description:
      'qui est capable de voir dans l ’obscurité totale, sans la moindre source de lumière, si ténue soit-elle.',
  },
  {
    id: 6,
    title: 'Espèce lucifuge /espèce photophile',
    description:
      "Les lucifuges sont des êtres vivants ou organes végétaux qui fuient la lumière, à l’opposé les photophiles qui ont d'importants besoins en lumière pour se développer.",
  },
];

export default function Definition() {
  const [def, setdef] = useState(definition[0]);

  return (
    <div className="definition_page">
      <h2>Définitions</h2>
      <main>
        <section className="definition_title">
          {definition.map((d) => (
            <DefBulle
              changeDefinition={(id) =>
                setdef(definition.find((de) => de.id === id))
              }
              title={d.title}
              key={d.id}
              id={d.id}
            />
          ))}
        </section>
        <section className="definition_content">
          <DefCont desc={def.description} />
        </section>
      </main>
    </div>
  );
}

const DefBulle = ({ title, id, changeDefinition }) => (
  <div
    role="button"
    tabIndex="0"
    onClick={() => changeDefinition(id)}
    onKeyPress={() => changeDefinition(id)}
    className={id % 2 === 0 ? 'def_bulle' : 'def_bulle def_bulle_right'}
  >
    <h3>{title}</h3>
  </div>
);

const DefCont = ({ desc }) => (
  <>
    <img src={pollutiondef} alt="pollution" />
    <p>{desc}</p>
  </>
);
