import React from 'react';
import './Ressource.css';
import SingleRessource from '../components/SingleRessource';
import kitPratiquePourRallumer from '../ressource/kit-pratique-pour-rallumer-les-etoiles.pdf';
import leCoteObscurDesPNR from '../ressource/le-cote-obscur-des-parcs-naturels-regionaux.pdf';
import livretPedagogique from '../ressource/livret-pedagogique-monde-nocturne.pdf';
import guidePourUnEclairageDeQualiteDansLeVercors from '../ressource/guide-pour-un-eclairage-de-qualite-dans-le-vercors.pdf';
import nuitsDeNoe from '../ressource/nuits-de-noe-pour-la-biodiversite-nocturne.pdf';

const ressource = [
  {
    id: 0,
    title: 'Kit pratique pour rallumer les etoiles',
    url: kitPratiquePourRallumer,
    professional: 0,
  },
  {
    id: 1,
    title: 'Le côté obscur des parcs naturels régionaux',
    url: leCoteObscurDesPNR,
    professional: 1,
  },
  {
    id: 2,
    title: 'Livret pédagogique Monde nocturne',
    url: livretPedagogique,
    professional: 0,
  },
  {
    id: 3,
    title: 'Guide pour un éclairage de qualité dans le Vercors',
    url: guidePourUnEclairageDeQualiteDansLeVercors,
    professional: 1,
  },
  {
    id: 4,
    title: 'Les nuits de Noe',
    url: nuitsDeNoe,
    professional: 1,
  },
  {
    id: 5,
    title: 'parc-prealpesdazur.fr',
    url:
      'https://www.parc-prealpesdazur.fr/actualite/reserve-internationale-de-ciel-etoile-alpes-aur-mercantour/',
    professional: 1,
  },
  {
    id: 6,
    title: 'parc-prealpesdazur.fr',
    url:
      'https://www.parc-prealpesdazur.fr/en-action/ciel-etoile/reserve-de-ciel-etoile/',
    professional: 1,
  },
  {
    id: 7,
    title: 'trameverteetbleue.fr',
    url:
      'http://www.trameverteetbleue.fr/vie-tvb/groupe-echange-tvb/trame-noire',
    professional: 0,
  },
  {
    id: 8,
    title: 'jourdelanuit.fr',
    url: 'https://www.jourdelanuit.fr/',
    professional: 0,
  },
  {
    id: 9,
    title: 'anpcen.fr',
    url: 'https://www.anpcen.fr/',
    professional: 1,
  },
  {
    id: 10,
    title: 'opepa.ademe.fr',
    url: 'http://opepa.ademe.fr/',
    professional: 1,
  },
  {
    id: 11,
    title: 'pnrpaca.org',
    url: 'http://sit.pnrpaca.org/pnr_regionsud-pollution-lumineuse/index.html',
    professional: 0,
  },
  {
    id: 12,
    title: 'darkskylab.com',
    url: 'https://darkskylab.com/publications.html',
    professional: 1,
  },
  {
    id: 13,
    title: 'parc-causses-du-quercy.fr',
    url:
      'https://www.parc-causses-du-quercy.fr/destination-parc/voir-faire/la-tete-dans-les-etoiles',
    professional: 0,
  },
  {
    id: 14,
    title: 'parc-causses-du-quercy.fr',
    url:
      'https://www.parc-causses-du-quercy.fr/le-parc-votre-service/ressources-pour-les-acteurs-de-leducation/ressources-pedagogiques/jeux/le-jeu-',
    professional: 0,
  },
  {
    id: 15,
    title: 'villagessouslesetoiles.fr',
    url: 'http://villagessouslesetoiles.fr/author/admin/',
    professional: 1,
  },
  {
    id: 16,
    title: 'noe.org',
    url:
      'http://noe.org/tout-sur-noe/actualite/noe-publie-10-fiches-pour-inciter-les-municipalites-entamer-la-transition-vers-un-eclairage-public-respectueux-de-la-biodiversite-nocturne/',
    professional: 1,
  },
];

export default function Ressource() {
  return (
    <div className="Ressource">
      <h2>Ressources</h2>
      <h3>Documentation à télécharger</h3>
      <article className="documentations">
        {ressource.map((card) => (
          <SingleRessource url={card.url} title={card.title} />
        ))}
      </article>
      <h3>Sites à consulter</h3>
      <article className="sites">
        {ressource.map((card) => (
          <SingleRessource url={card.url} title={card.title} />
        ))}
      </article>
    </div>
  );
}
