import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ressource.css';
import SingleRessource from '../components/SingleRessource';
import Loader from '../components/Loader';

export default function Ressource() {
  const [showPro, setShowPro] = useState(false);
  const [ressourceList, setRessource] = useState(null);

  useEffect(() => {
    (async () => {
      const { ressource } = await (
        await axios.get(
          'https://john32313.github.io/api_pollution_lumineuse/db.json',
        )
      ).data;
      setRessource(ressource);
    })();
  }, []);

  if (!ressourceList)
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
        {ressourceList.map((card) =>
          !showPro
            ? card.professional === 0 &&
              card.url.includes('pdf') && (
                <SingleRessource
                  key={card.id}
                  url={card.url}
                  title={card.title}
                />
              )
            : card.url.includes('pdf') && (
                <SingleRessource
                  key={card.id}
                  url={card.url}
                  title={card.title}
                />
              ),
        )}
      </article>
      <h3>Sites à consulter</h3>
      <article className="sites">
        {ressourceList.map((card) =>
          !showPro
            ? card.professional === 0 &&
              !card.url.includes('pdf') && (
                <SingleRessource
                  key={card.id}
                  url={card.url}
                  title={card.title}
                />
              )
            : !card.url.includes('pdf') && (
                <SingleRessource
                  key={card.id}
                  url={card.url}
                  title={card.title}
                />
              ),
        )}
      </article>
    </div>
  );
}
