import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavbarStyles.css'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideBar from './SideBar';

export default function NavbarComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <div class='navigation'>
      <div class='navbar-container'>
        <button className='navbar-menu' onClick={handleShow}>
          <FontAwesomeIcon className='fas fa-bars fa-2x' icon={faBars} />
        </button>
        <a href="#" class='logo'><h1>VerboSphere</h1></a>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
          <SideBar />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
