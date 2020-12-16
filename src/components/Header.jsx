import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  };

  render() {
    const { clicked } = this.state;
    return (
      <nav className="navbar">
        <Link className="home-link" to="/">
          <img
            src="https://www.maregionsud.fr/fileadmin/user_upload/Documents/Institution/logo-vertical.jpg"
            alt="logo"
            className="navbar-logo"
          />
        </Link>
        <div className="menucenter">
          <button
            type="button"
            className="menu-icon"
            onClick={this.handleClick}
          >
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <span role="img" aria-label="Home">
                &#xe004;
              </span>
              <Link
                to="/"
                className="cool-link"
                onClick={this.handleClickCloseBurgerMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <span role="img" aria-label="Mea by Area">
                &#xe001;
              </span>
            </li>
            <li>
              <span role="img" aria-label="who you are?" />
            </li>
          </ul>
          <div className="title">
            <h1>La Pollution Lumineuse</h1>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
