import React from 'react';
import './Homepage.css';

export default function Homepage() {
  return (
    <div className="Homepage">
      <article className="Ressource">
        <h2>Ressources</h2>
        <div className="toggle">
          <span>Particulier</span>
          <input type="checkbox" id="switch" />
          {/* eslint-disable-next-line */}
          <label for="switch"></label>
          <span>Professionnel</span>
        </div>
        <div className="couvpdf">
          <img src="https://via.placeholder.com/210x297?text=Couv+PDF" alt="" />
          <img src="https://via.placeholder.com/210x297?text=Couv+PDF" alt="" />
          <img src="https://via.placeholder.com/297x210?text=Couv+PDF" alt="" />
        </div>
      </article>

      <div className="articles">
        <article className="Definition">
          <img
            src="https://via.placeholder.com/600x297?text=Vous+avez+suivi+une+animation+?+Donnez-nous+votre+avis+!"
            alt=""
          />
        </article>

        <article className="articlePhare">
          <h2>La nuit et la santé humaine</h2>
          <p>
            L’Homme étant habitué à une alternance de jour et de nuit, son cycle
            de sommeil est synchronisé avec le cycle de lumière et d’obscurité
            de la Terre. L’éclairage artificiel nocturne perturbe celui-ci et a
            notamment des effets sur sa santé comme la perturbation de la
            production des hormones, du sommeil, de la digestion, de la
            régénération des cellules. En matière de pollution lumineuse l’homme
            est principalement soumis à la lumière intrusive : une lumière non
            voulue qui envahie son habitat du fait de la présence d’éclairage
            extérieur.
          </p>
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
        </article>
      </div>
    </div>
  );
}
