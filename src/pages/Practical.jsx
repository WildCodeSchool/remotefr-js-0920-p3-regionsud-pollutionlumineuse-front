import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Practical.css';
import PracticalDescription from '../components/PracticalDescription';
import Loader from '../components/Loader';

export default function Practical() {
  const [detail, setDetail] = useState(null);
  const [toolList, setToolList] = useState(null);
  useEffect(() => {
    (async () => {
      const { tools } = await (
        await axios.get(
          'https://john32313.github.io/api_pollution_lumineuse/db.json',
        )
      ).data;
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
      <h2>Les outils pour explorer la nuit</h2>
      <div className="photos">
        <article className="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </article>
        {toolList.map((t) => (
          <img
            id={t.id}
            key={t.id}
            src={t.image}
            alt={t.title}
            onKeyPress={(e) => {
              setDetail(toolList.find((u) => u.id === Number(e.target.id)));
            }}
            onClick={(e) => {
              setDetail(toolList.find((u) => u.id === Number(e.target.id)));
            }}
          />
        ))}
      </div>
      <PracticalDescription
        title={detail.title}
        description={detail.description}
        utility={detail.utility}
        image={detail.image}
      />
    </div>
  );
}
