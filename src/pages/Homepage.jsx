import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const messageCle =
  'L’Homme étant habitué à une alternance de jour et de nuit, son cycle de sommeil est synchronisé avec le cycle de lumière et d’obscurité de la Terre. L’éclairage artificiel nocturne perturbe celui-ci et a notamment des effets sur sa santé comme la perturbation de la production des hormones, du sommeil, de la digestion, de la régénération des cellules. En matière de pollution lumineuse l’homme est principalement soumis à la lumière intrusive : une lumière non voulue qui envahie son habitat du fait de la présence d’éclairage extérieur.';
const messageCleMiseEnForme = messageCle.split('.');
messageCleMiseEnForme[0] = `<strong>${messageCleMiseEnForme[0]}</strong>`;
const messageCleFinal = messageCleMiseEnForme.join('.');

const definition =
  'éclairage d’origine humaine qui est mis en place pour des besoins de visibilité la nuit. Il peut être installé pour des raisons de sécurité, de confort ou encore esthétiques (mise en valeur des patrimoines). Il peut être diffus et localisé, mais peut aussi être amplifié par des nuages, par un revêtement du sol particulier, créant ainsi un halo lumineux pouvant être visible sur de longues distances.';
const defMEF = definition.split('.');
defMEF[0] = `<strong>${defMEF[0]}</strong>`;
const definitionModif = defMEF.join('.');

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
          <img src="https://via.placeholder.com/210x297?text=Couv+PDF" alt="" />
          <img src="https://via.placeholder.com/210x297?text=Couv+PDF" alt="" />
          <img src="https://via.placeholder.com/297x210?text=Couv+PDF" alt="" />
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
          <img
            src="https://via.placeholder.com/600x190?text=Donnez-nous+votre+avis+!"
            alt=""
          />
        </article>

        <article className="articlePhare">
          <h2>La nuit et la santé humaine</h2>
          <p dangerouslySetInnerHTML={{ __html: messageCleFinal }} />
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
          <p dangerouslySetInnerHTML={{ __html: definitionModif }} />
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
