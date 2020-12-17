import React from 'react';
import './Footer.css';
import logosprnc from '../image/logosprnc.png';

export default function Footer() {
  return (
    <div className="footer">
      <img src={logosprnc} alt="logos des Parc naturel" />
      <div className="lien-site-pnr">
        <a href="geo.pnrpaca.org">geo.pnrpaca.org</a>
      </div>
    </div>
  );
}
