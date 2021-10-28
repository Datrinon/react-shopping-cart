import '../../css/NavHeader.css';
import {Link, NavLink} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './Router';

import Logo from "../../images/logo.jpg";

function NavHeader(props) {
  
  const cart = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function computeCartQuantity() {
    let numItems = 0;
    Object.keys(cart).forEach(item => {
      numItems += cart[item]["quantity"];
    })

    return numItems;
  }

  return (
    <header className="header">
      Some header here.
      <nav>
        <ul>
          <li>
            <div className="logo-wrapper">
              <Link to="/">
                <img src={Logo} alt="The logo of Mako Bikes." className="logo"/>
              </Link>
            </div>
          </li>
          <li>
            <NavLink to="/products/ebikes" activeClassName="active">E-Bikes</NavLink>
          </li>
          <li>
            <NavLink to="/products/accessories" activeClassName="active">Accessories</NavLink>
          </li>
        </ul>
        <NavLink to="/cart">
        My Cart 🛒 {computeCartQuantity()}
        </NavLink>
      </nav>
    </header>
  )
}

export default NavHeader;