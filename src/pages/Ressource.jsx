import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Ressource.css';
import SingleRessource from '../components/SingleRessource';
import Loader from '../components/Loader';

export default function Ressource() {
  const [showPro, setShowPro] = useState(false);
  const [ressourceListDdl, setRessourceDdl] = useState(null);
  const [ressourceListLink, setRessourceLink] = useState(null);
  const [ressourceListVideo, setRessourceVideo] = useState(null);

  useEffect(() => {
    (async () => {
      const ressourceddl = await (await axios.get('/ressource-downloads')).data;
      const ressourcelink = await (await axios.get('/ressource-links')).data;
      const ressourcevideo = await (await axios.get('/ressource-videos')).data;
      setRessourceLink(ressourcelink);
      setRessourceDdl(ressourceddl);
      setRessourceVideo(ressourcevideo);
    })();
  }, []);

  if (!ressourceListDdl || !ressourceListLink || !ressourceListVideo)
    return (
      <div className="Ressource">
        <h2>Ressources</h2>
        <Loader />
      </div>
    );
  return (
    <div className="Ressource">
      <h2>Ressources</h2>
      <div className="toggle">
        <p>Particulier</p>
        <input
          value={showPro}
          checked={showPro}
          onChange={() => setShowPro((old) => !old)}
          type="checkbox"
          id="switch"
        />
        <label htmlFor="switch" />
        <p>Professionnel</p>
      </div>
      <h3>Documentation à télécharger</h3>
      <article className="documentations">
        {ressourceListDdl.map((card) =>
          !showPro ? (
            !card.professional && (
              <SingleRessource
                key={card.id}
                url={`${process.env.REACT_APP_URL_API}${card.url.url}`}
                title={card.title}
              />
            )
          ) : (
            <SingleRessource
              key={card.id}
              url={`${process.env.REACT_APP_URL_API}${card.url.url}`}
              title={card.title}
            />
          ),
        )}
      </article>
      <h3>Sites à consulter</h3>
      <article className="sites">
        {ressourceListLink.map((card) =>
          !showPro ? (
            !card.professional && (
              <SingleRessource
                key={card.id}
                url={card.url}
                title={card.title}
              />
            )
          ) : (
            <SingleRessource key={card.id} url={card.url} title={card.title} />
          ),
        )}
      </article>
      <h3>Vidéos</h3>
      <article className="sites video">
        {ressourceListVideo.map((card) =>
          !showPro ? (
            !card.professional && (
              <SingleRessource
                key={card.id}
                url={card.url}
                title={card.title}
              />
            )
          ) : (
            <SingleRessource key={card.id} url={card.url} title={card.title} />
          ),
        )}
      </article>
    </div>
  );
}
