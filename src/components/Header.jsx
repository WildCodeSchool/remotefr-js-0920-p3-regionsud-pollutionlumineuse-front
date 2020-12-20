import React, { useEffect } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    window.addEventListener('mouseup', (e) => {
      const navi = document.querySelector('.header');
      const nav = e.composedPath();
      if (!nav.includes(navi)) {
        const check = document.querySelector('#burger_menu');
        check.checked = false;
      }
    });
    window.addEventListener('touchend', (e) => {
      const navi = document.querySelector('.header');
      const nav = e.composedPath();
      if (!nav.includes(navi)) {
        const check = document.querySelector('#burger_menu');
        check.checked = false;
      }
    });

    const linkNav = document.querySelectorAll('.header_nav a');
    linkNav.forEach((link) => {
      link.addEventListener('click', () => {
        const check = document.querySelector('#burger_menu');
        check.checked = false;
      });
    });
  });

  return (
    <div className="header">
      <div className="header_brand">
        <img
          src="https://www.pnr-queyras.fr/ecmedias/2020/05/tampon-PNR-PACA.jpg"
          className="logoRegionSud"
          alt="Parcs Naturels Régionaux de Provence-Alpes-Côte d'Azur"
        />

        <Link className="nav-homepage" to="/">
          <h1>La Pollution Lumineuse</h1>
        </Link>
      </div>
      <label htmlFor="burger_menu" className="burger_menu">
        <span
          className="iconify"
          data-icon="radix-icons:hamburger-menu"
          data-inline="false"
        />
      </label>
      <input className="burger_ckbox" type="checkbox" id="burger_menu" />

      <ul className="header_nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/mot-message-cle">L'essentiel</Link>
        </li>
        <li>
          <Link to="/definition">Définitions</Link>
        </li>
        <li>
          <Link to="/pratique">Les outils</Link>
        </li>
        <li>
          <Link to="/jeu">Jouer</Link>
        </li>
        <li>
          <Link to="/ressource">Ressources</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
