import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
 
  return (
    
    <>
      <nav className='navbar'>
        <div className='navbar_container'>
          <div className='menu_icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav_menu active' : 'nav_menu'}>
            <li className='nav_item'>
              <Link
                to='/home/create'
                className='nav_links'
                onClick={closeMobileMenu}
              >
                Ingresar Producto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
