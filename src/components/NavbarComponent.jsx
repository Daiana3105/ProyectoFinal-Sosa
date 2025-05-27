import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CartWidget from "./CartWidgetIcon";
import { FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [infoVisible, setInfoVisible] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [ignorarScroll, setIgnorarScroll] = useState(false); // NUEVO
  const buttonRef = useRef(null);
  const infoRef = useRef();
  const navigate = useNavigate();

  const handleToggleInfo = (section) => {
    if (section === 'categorias' && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      });
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

  // Scroll + menú desde footer
  useEffect(() => {
    window.toggleCategoriasDesdeFooter = () => {
      const target = document.getElementById("boton-categorias");
      if (target) {
        const yOffset = 0;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        setIgnorarScroll(true); // Evitar cierre automático
        window.scrollTo({ top: y, behavior: 'smooth' });

        setTimeout(() => {
          handleToggleInfo("categorias");
          setIgnorarScroll(false);
        }, 100);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        setInfoVisible(null);
      }
    };

    const handleScroll = () => {
      if (!ignorarScroll) {
        setInfoVisible(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ignorarScroll]);

  return (
    <div ref={infoRef} style={{ position: 'relative' }}>
      <nav className='navContainer'>
        <NavLink className='navlink' to='/'>
          <img src='../logo.png' alt='logo' className='logo' />
        </NavLink>

        <div className='navLinksContainer'>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
              ref={buttonRef}
              id="boton-categorias"
              className='navButton'
              onClick={() => handleToggleInfo('categorias')}
            >
              <FaBars style={{ marginRight: '5px' }} />
              Categorías
            </button>
          </div>

          <div style={{ position: 'relative' }}>
            <Link to="/contacto" className="navButton">Contacto</Link>
          </div>

          <div style={{ position: 'relative' }}>
            <button className='navButton' onClick={() => handleToggleInfo('quienes')}>
              Quiénes Somos
            </button>
          </div>

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

        <NavLink className='navlink' to="/cart">
          <CartWidget />
        </NavLink>
      </nav>

      {/* Menú flotante de categorías */}
      {infoVisible === 'categorias' && (
  <div
    className="infoSection"
    style={{
      position: 'absolute',
      top: coords.top - 10,
      left: coords.left + 50,
      zIndex: 9999
    }}
  >

          <button className="dropdownItem" onClick={() => handleCategoryClick('category/todos')}>Todos los Productos</button>
          <button className="dropdownItem" onClick={() => handleCategoryClick('category/mujer')}>Perfumes Mujer</button>
          <button className="dropdownItem" onClick={() => handleCategoryClick('category/hombre')}>Perfumes Hombre</button>
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;
