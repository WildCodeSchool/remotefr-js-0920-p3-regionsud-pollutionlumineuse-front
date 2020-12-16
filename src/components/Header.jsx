import React from 'react';
import './Header.css';
import { Link, Router } from 'react-router-dom';

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
      <div>
        <img src="" className="logoRegionSud" alt="logo region sud" />
        <h1>La Poluttion Lumineuse</h1>
        <Router>
          <ul>
            <li>
              <Link className="nav-homepage" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-definitions" to="/mot-message-cle">
                Essential
              </Link>
            </li>
          </ul>
        </Router>
      </div>
    );
  }
}

export default Header;
