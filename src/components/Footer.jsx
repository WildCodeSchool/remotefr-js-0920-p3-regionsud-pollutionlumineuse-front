import React from 'react';
import '../css/Footer.css';
import logosprnc from '../image/logosprnc.png';

export default function Footer() {
  return (
    <div className="footer">
      <img
        src={logosprnc}
        alt="Parcs naturels régionaux de Camargue, du Lubero, du Queyras et du Verdon"
      />
      <span>
        SIT des Parcs naturels régionaux de Provence-Alpes-Côte d'Azur |{' '}
        <a
          href="http://geo.pnrpaca.org"
          title="Système d'Information Territorial"
        >
          geo.pnrpaca.org
        </a>
      </span>
    </div>
  );
}
