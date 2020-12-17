import React from 'react';
import './Footer.css';
import logosprnc from '../image/logosprnc.png';

export default function Footer() {
  return (
    <div className="footer">
      <img src={logosprnc} alt="logos des Parc naturel" />
      <p>
        SIT des Parcs naturels régionaux de Provence-Alpes-Côte d'Azur |{' '}
        <a href="http://geo.pnrpaca.org">geo.pnrpaca.org</a>
      </p>
    </div>
  );
}
