import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // clicked: false,
    };
  }

  // handleClick = () => {
  // const { clicked } = this.state;
  // this.setState({ clicked: !clicked });
  // };
  render() {
    return (
      <div className="header">
        <img
          src="https://www.pnr-queyras.fr/ecmedias/2020/05/tampon-PNR-PACA.jpg"
          className="logoRegionSud"
          alt="logo region sud"
        />
        <h1>La Poluttion Lumineuse</h1>

        <ul>
          <li>
            <Link className="nav-homepage" to="/">
              Homepage
            </Link>
          </li>
          <li>
            <Link className="nav-message-cle" to="/mot-message-cle">
              Messages-cles
            </Link>
          </li>
          <li>
            <Link className="nav-definitions" to="/definition">
              Definitions
            </Link>
          </li>
          <li>
            <Link className="nav-pratique" to="/pratique">
              Passons à la pratique
            </Link>
          </li>
          <li>
            <Link className="nav-jeu" to="/jeu">
              Jeu
            </Link>
          </li>
          <li>
            <Link className="nav-ressource" to="/ressource">
              Ressources
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
