import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/definition.css';
import Loader from '../components/Loader';

export default function Definition() {
  const [defShow, setdefShow] = useState(null);
  const [def, setdef] = useState(null);
  useEffect(() => {
    (async () => {
      const definition = await (await axios.get('/definitions')).data;
      setdefShow(definition[0]);
      setdef(definition);
    })();
  }, []);
  if (!def)
    return (
      <div className="definition_page">
        <h2>Définitions</h2>
        <main>
          <Loader />
        </main>
      </div>
    );
  return (
    <div className="definition_page">
      <h2>Définitions</h2>
      <main>
        <section className="definition_title">
          {def.map((d) =>
            d.id === defShow.id ? (
              <DefBulle
                changeDefinition={(id) =>
                  setdefShow(def.find((de) => de.id === id))
                }
                title={d.title}
                key={d.id}
                id={d.id}
                active
              />
            ) : (
              <DefBulle
                changeDefinition={(id) =>
                  setdefShow(def.find((de) => de.id === id))
                }
                title={d.title}
                key={d.id}
                id={d.id}
                active={false}
              />
            ),
          )}
        </section>
        <section className="definition_content">
          <DefCont desc={defShow.description} title={defShow.title} />
        </section>
      </main>
    </div>
  );
}

const DefBulle = ({ title, id, changeDefinition, active }) => (
  <div
    role="button"
    tabIndex="0"
    onClick={() => changeDefinition(id)}
    onKeyPress={() => changeDefinition(id)}
    className={
      id % 2 === 0
        ? active
          ? 'def_bulle active_bulle'
          : 'def_bulle'
        : active
        ? 'def_bulle def_bulle_right active_bulle'
        : 'def_bulle def_bulle_right'
    }
  >
    <h3>{title}</h3>
  </div>
);

const DefCont = ({ desc, title }) => {
  const messageCleMiseEnForme = desc.split('.');
  messageCleMiseEnForme[0] = `<h3>${title}</h3><strong>${messageCleMiseEnForme[0]}</strong>`;
  let messageCleFinal = messageCleMiseEnForme.join('.');
  messageCleFinal += '<p>PNR des Baronnies Provençales</p>';
  return (
    <>
      <article dangerouslySetInnerHTML={{ __html: messageCleFinal }} />
    </>
  );
};
