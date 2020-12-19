import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
// import animation from '../image/animation-nocturne.jpg';
import pdf1 from '../image/livret-pedagogique-monde-nocturne.PNG';
import pdf2 from '../image/le-cote-obscur-des-parcs-naturels-regionaux.PNG';
import pdf3 from '../image/kit-pratique-pour-rallumer-les-etoiles.PNG';

const messageCle =
  'L’Homme étant habitué à une alternance de jour et de nuit, son cycle de sommeil est synchronisé avec le cycle de lumière et d’obscurité de la Terre. L’éclairage artificiel nocturne perturbe celui-ci et a notamment des effets sur sa santé comme la perturbation de la production des hormones, du sommeil, de la digestion, de la régénération des cellules. En matière de pollution lumineuse l’homme est principalement soumis à la lumière intrusive : une lumière non voulue qui envahie son habitat du fait de la présence d’éclairage extérieur.';
const messageCleMiseEnForme = messageCle.split('.');
const messageCleFinal = `<strong>${messageCleMiseEnForme[0]}. </strong>${messageCleMiseEnForme[1]}`;

export default function Homepage() {
  return (
    <div className="Homepage">
      <article className="ressource">
        <h2>Ressources</h2>

        <div className="toggle">
          <p>Particulier</p>
          <input type="checkbox" id="switch" />
          {/* eslint-disable-next-line */}
          <label htmlFor="switch"></label>
          <p>Professionnel</p>
        </div>

        <div className="couvpdf">
          <a
            href="./livret-pedagogique-monde-nocturne.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pdf1} alt="" />
          </a>
          <a
            href="./le-cote-obscur-des-parcs-naturels-regionaux.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pdf2} alt="" />
          </a>
          <a
            href="./kit-pratique-pour-rallumer-les-etoiles.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pdf3} alt="" />
          </a>
        </div>

        <div className="buttons">
          <Link to="/ressource" title="">
            Découvrir toute la documentation
          </Link>
          <a
            href="https://www.youtube.com/"
            title=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir la chaîne Youtube
          </a>
        </div>
      </article>

      <div className="articles">
        <article className="imagePhare">
          <h2>Vous avez suivi une animation ?</h2>
          <a
            href="http://geo.pnrpaca.org/"
            title=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="avis">Donnez-nous votre avis&nbsp;!</p>
          </a>
        </article>

        <article className="articlePhare">
          <h2>La nuit et la santé humaine</h2>
          <p>{messageCleFinal}</p>
          <div className="buttons">
            <Link to="/mot-message-cle" title="">
              Lire la suite
            </Link>
            <Link to="/mot-message-cle" title="">
              Voir tous les messages-clés
            </Link>
          </div>
        </article>

        <article className="articlePhare">
          <h2>Eclairage artificiel : qu’est-ce que c’est ?</h2>
          <p>
            éclairage d’origine humaine qui est mis en place pour des besoins de
            visibilité la nuit. Il peut être installé pour des raisons de
            sécurité, de confort ou encore esthétiques (mise en valeur des
            patrimoines). Il peut être diffus et localisé, mais peut aussi être
            amplifié par des nuages, par un revêtement du sol particulier,
            créant ainsi un halo lumineux pouvant être visible sur de longues
            distances.
          </p>
          <div className="buttons">
            <Link to="/definition" title="">
              Lire la suite
            </Link>
            <Link to="/definition" title="">
              Voir toutes les définitions
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
