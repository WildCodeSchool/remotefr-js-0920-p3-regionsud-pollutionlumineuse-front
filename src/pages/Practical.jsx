import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Practical.css';
import PracticalDescription from '../components/PracticalDescription';
import Loader from '../components/Loader';

export default function Practical() {
  const [detail, setDetail] = useState(null);
  const [toolList, setToolList] = useState(null);
  useEffect(() => {
    (async () => {
      const tools = await (await axios.get('/tools')).data;
      setDetail(tools[0]);
      setToolList(tools);
    })();
  }, []);
  if (!toolList || !detail)
    return (
      <div className="Practical">
        <h2>Les outils pour explorer la nuit</h2>
        <Loader />
      </div>
    );
  return (
    <div className="Practical">
      <h2>Quelques outils pour explorer la nuit</h2>
      <div className="photos">
        <article className="intro">
          Qui dit matériel dit bien souvent technique… L’utilisation du matériel
          va permettre aux animateurs d’animer des séquences, des « moments »
          avec le public. Le matériel de ce kit doit vous permettre d’animer des
          séances de découvertes, s’appuyant sur la manipulation du matériel,
          qui vous permettront d’aborder plusieurs thèmes et enjeux liés à la
          pollution lumineuse. Mais l’animation, c’est aussi et avant tout un
          temps d’échange, d’écoute… surtout la nuit&nbsp;!
        </article>
        {toolList.map((t) =>
          t.id === detail.id ? (
            <img
              id={t.id}
              key={t.id}
              src={`${process.env.REACT_APP_URL_API}${t.image.url}`}
              alt={t.title}
              style={{ opacity: '0.4' }}
              onKeyPress={(e) => {
                setDetail(toolList.find((u) => u.id === Number(e.target.id)));
              }}
              onClick={(e) => {
                setDetail(toolList.find((u) => u.id === Number(e.target.id)));
              }}
            />
          ) : (
            <img
              id={t.id}
              key={t.id}
              src={`${process.env.REACT_APP_URL_API}${t.image.url}`}
              alt={t.title}
              onKeyPress={(e) => {
                setDetail(toolList.find((u) => u.id === Number(e.target.id)));
              }}
              onClick={(e) => {
                setDetail(toolList.find((u) => u.id === Number(e.target.id)));
              }}
            />
          ),
        )}
      </div>
      <PracticalDescription
        title={detail.title}
        description={detail.description}
        utility={detail.utility}
        image={`${process.env.REACT_APP_URL_API}${detail.image.url}`}
      />
    </div>
  );
}
