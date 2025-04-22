import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidgetIcon from './CartWidgetIcon';
import { useCart } from "../context/CartContext";
import '../app.css'

function NavBarBootstrap() {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src='../logo.png' alt="Logo" width="200" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/nuevos">Nuevos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/estampados">Estampados</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/lisos">Lisos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default NavBarBootstrap;
