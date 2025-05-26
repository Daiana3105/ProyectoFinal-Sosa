import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CartWidget from "./CartWidgetIcon";
import { FaSearch, FaBars } from 'react-icons/fa';
import { Collapse } from 'react-bootstrap';

const NavbarComponent = () => {
  const [infoVisible, setInfoVisible] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const buttonRef = useRef(null);
  const infoRef = useRef();
  const navigate = useNavigate();
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const handleToggleInfo = (section) => {
    if (section === 'categorias' && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    }
    setInfoVisible(prev => (prev === section ? null : section));
  };

  const handleCategoryClick = (path) => {
    navigate(path);
    setInfoVisible(null);
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
        {/* Logo */}
        <NavLink className='navlink' to='/'>
          <img src='../logo.png' alt='logo' className='logo' />
        </NavLink>

        {/* Enlaces centrales */}
        <div className='navLinksContainer'>
          {/* Categorías flotante estilo chat */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
              ref={buttonRef}
              className='navButton'
              onClick={() => handleToggleInfo('categorias')}
            >
              <FaBars style={{ marginRight: '5px' }} />
              Categorías
            </button>
          </div>

          {/* Contacto */}
          <div style={{ position: 'relative' }}>
            <button className='navButton' onClick={() => handleToggleInfo('contacto')}>
               Contacto
            </button>
            <Collapse in={infoVisible === 'contacto'}>
              <div className="infoSection">
                <p>📞 Puedes contactarnos al +54 351 1234567 o por correo a info@perfumes.com</p>
              </div>
            </Collapse>
          </div>

          {/* Quiénes Somos */}
          <div style={{ position: 'relative' }}>
            <button className='navButton' onClick={() => handleToggleInfo('quienes')}>
               Quiénes Somos
            </button>
            <Collapse in={infoVisible === 'quienes'}>
              <div className="infoSection">
                <p>💜 Somos una tienda apasionada por los perfumes, buscando que encuentres tu aroma ideal.</p>
              </div>
            </Collapse>
          </div>

          {/* Búsqueda */}
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

        {/* Carrito */}
        <NavLink className='navlink' to="/cart">
          <CartWidget />
        </NavLink>
      </nav>

      {/* Menú de Categorías flotante estilo chat */}
      {infoVisible === 'categorias' && (
  <div
    style={{
      position: 'absolute',
      top: coords.top - 150,
      left: coords.left + 50,
      backgroundColor: 'white',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      padding: '10px',
      borderRadius: '10px',
      zIndex: 9999,
      minWidth: '180px'
    }}
  >
    <button className="dropdownItem" onClick={() => handleCategoryClick('category/todos')}>Todos los Productos</button>
    <button className="dropdownItem" onClick={() => handleCategoryClick('category/mujer')}>Perfumes Mujer</button>
    <button className="dropdownItem" onClick={() => handleCategoryClick('category/hombre')}>Perfumes Hombre</button>
    {/*<button className="dropdownItem" onClick={() => handleCategoryClick('category/marcas')}>Por Marcas</button>*/}
  </div>
)}

    </div>
  );
};

export default NavbarComponent;
