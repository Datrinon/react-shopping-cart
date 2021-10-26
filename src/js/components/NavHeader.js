import '../../css/NavHeader.css';
import {NavLink} from 'react-router-dom';

function NavHeader() {
  return (
    <header className="header">
      Some header here.
      <nav>
        <ul>
          <li>
            Mako Bikes (LOGO)
          </li>
          <li>
            <NavLink to="/products/ebikes" activeClassName="active">E-Bikes</NavLink>
          </li>
          <li>
            <NavLink to="/products/accessories" activeClassName="active">Accessories</NavLink>
          </li>
        </ul>
        <NavLink to="/cart">
        Cart 🛒  
        </NavLink>
      </nav>
    </header>
  )
}

export default NavHeader;