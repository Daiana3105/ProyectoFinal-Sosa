import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from "./CartWidgetIcon";
import { FaSearch } from 'react-icons/fa'; // Importamos el ícono de búsqueda


const NavbarComponent = () => {
  const [infoVisible, setInfoVisible] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false); // Estado para manejar la búsqueda
  const infoRef = useRef();

  const handleToggleInfo = (section) => {
    setInfoVisible(prev => (prev === section ? null : section));
  };

  const toggleSearch = () => {
    setSearchVisible(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        setInfoVisible(null);
      }
    };

    const handleScroll = () => {
      setInfoVisible(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={infoRef} style={{ position: 'relative' }}>
      <nav className='navContainer'>
        {/* Logo a la izquierda */}
        <NavLink className='navlink' to='/'>
          <img src='../logo.png' alt='logo' className='logo' />
        </NavLink>

        {/* Enlaces centrados */}
        <div className='navLinksContainer'>
          {/* Botón "Contacto" con info debajo */}
          <div style={{ position: 'relative' }}>
            <button className='navButton' onClick={() => handleToggleInfo('contacto')}>
              📞 Contacto
            </button>
            {infoVisible === 'contacto' && (
              <div className="infoSection">
                <p>📞 Puedes contactarnos al +54 351 1234567 o por correo a info@perfumes.com</p>
              </div>
            )}
          </div>

          {/* Botón "Quiénes Somos" con info debajo */}
          <div style={{ position: 'relative' }}>
            <button className='navButton' onClick={() => handleToggleInfo('quienes')}>
              👤 Quiénes Somos
            </button>
            {infoVisible === 'quienes' && (
              <div className="infoSection">
                <p>💜 Somos una tienda apasionada por los perfumes, buscando que encuentres tu aroma ideal.</p>
              </div>
            )}
          </div>

          {/* Lupa de Búsqueda */}
          <button className='searchButton' onClick={toggleSearch}>
            <FaSearch size={20} color="white" />
          </button>
          {searchVisible && (
            <input
              type="text"
              className="searchInput"
              placeholder="Buscar..."
            />
          )}
        </div>

        {/* Carrito a la derecha */}
        <NavLink className='navlink' to="/cart">
          <CartWidget />
        </NavLink>
      </nav>
    </div>
  );
};

export default NavbarComponent;
