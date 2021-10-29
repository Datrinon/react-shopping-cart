import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function MenuButton(props) {

  const [isOpen, setIsOpen] = useState(false);

  const closed = (
    <FontAwesomeIcon icon={faBars} size="2x"/>
  );

  const open = (
    <FontAwesomeIcon icon={faTimes} size="2x"/>
  );

  
  function toggle() {
    setIsOpen((prevState) => !prevState);
    props.toggleMenu();
    // Animation for this dude.
  }

  return (
    <button className="menu-button" onClick={toggle}>
      {isOpen ? open : closed}
    </button>
  );
}