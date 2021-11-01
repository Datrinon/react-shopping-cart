import '../../css/NavHeader.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './Router';

import MenuButton from './MenuButton';

import Logo from "../../images/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function NavHeader(props) {

  const cart = useContext(CartContext);

  function computeCartQuantity() {
    let numItems = 0;
    Object.keys(cart).forEach(item => {
      numItems += cart[item]["quantity"];
    })

    return numItems;
  }

  function toggleMenu() {
    document.querySelector(".website-links").classList.toggle("closed");
  }

  return (
    <header className="header">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={Logo} alt="The logo of Mako Bikes." className="logo" />
        </Link>
      </div>
      <nav className="website-links closed">
        <ul>
          <li className="link">
            <NavLink to="/products/ebikes" activeClassName="active">E-Bikes</NavLink>
          </li>
          <li className="link">
            <NavLink to="/products/accessories" activeClassName="active">Accessories</NavLink>
          </li>
        </ul>
      </nav>
      <div className="cart-and-menu">
        <div className="cart">
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span className="cart-quantity">
              {computeCartQuantity()}
            </span>
          </NavLink>
        </div>
        <div className="menu mobile-only">
          <MenuButton 
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </header>
  )
}

export default NavHeader;