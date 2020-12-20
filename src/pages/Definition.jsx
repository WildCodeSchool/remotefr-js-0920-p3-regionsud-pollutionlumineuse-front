import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './definition.css';
import pollutiondef from '../image/pollutiondef.jpg';
import Loader from '../components/Loader';

export default function Definition() {
  const [defShow, setdefShow] = useState(null);
  const [def, setdef] = useState(null);
  useEffect(() => {
    (async () => {
      const { definition } = await (
        await axios.get(
          'https://john32313.github.io/api_pollution_lumineuse/db.json',
        )
      ).data;
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
          {def.map((d) => (
            <DefBulle
              changeDefinition={(id) =>
                setdefShow(def.find((de) => de.id === id))
              }
              title={d.title}
              key={d.id}
              id={d.id}
            />
          ))}
        </section>
        <section className="definition_content">
          <DefCont desc={defShow.description} />
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
