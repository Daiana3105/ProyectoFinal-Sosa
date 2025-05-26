import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../service/firebase';
import '../App.css';
import ChatBubble from './ChatBubble';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Social and contact icons
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function Home() {
  const [productos, setProductos] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    async function fetchPerfumes() {
      try {
        const snap = await getDocs(collection(db, 'perfumes'));
        const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(list.slice(0, 12));
      } catch (err) {
        console.error('Error fetching perfumes:', err);
      }
    }
    fetchPerfumes();
  }, []);

  // Keep autoplay on refresh
  useEffect(() => {
    if (swiperRef.current?.autoplay) swiperRef.current.autoplay.start();
  }, []);

  const ofertas = productos.filter(p => p.category === 'ofertas');

  const sliderSettings = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { clickable: true }
  };

  return (
    <div>
      {/* Banner Principal */}
      <div className="banner">
        <h1>Descubrí tu aroma ideal</h1>
        <p>Bienvenido/a a nuestra tienda de perfumes, donde cada fragancia cuenta una historia.</p>
      </div>

      {/* Carrusel de Ofertas Destacadas */}
      <div className="seccion-ofertas text-center">
        <h2 className="titulo-ofertas">🔥 OFERTAS DESTACADAS 🔥</h2>
        <Swiper
          {...sliderSettings}
          onSwiper={swiper => { swiperRef.current = swiper }}
          style={{ maxWidth: 350, margin: '2rem auto' }}
        >
          {ofertas.map(prod => (
            <SwiperSlide key={prod.id}>
              <div className="card-oferta text-center">
                <img src={prod.img} alt={prod.name} className="img-oferta" />
                <h5 className="nombre-oferta mt-2">{prod.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Galería de Productos */}
      <div className="galeria-imagenes mt-5 text-center">
        <h2>Nuestros perfumes</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {productos.map(prod => (
            <img
              key={prod.id}
              src={prod.img}
              alt={prod.name}
              style={{
                width: 200,
                height: 200,
                objectFit: 'cover',
                borderRadius: 10,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                margin: '10px'
              }}
            />
          ))}
        </div>
      </div>

      {/* Sección de Productos */}
      <Container className="mt-5">
        <h2 className="text-center text-white mb-4">Explora nuestros productos</h2>
        <Row className="g-4 justify-content-center">
          <Col md={4}>
            <Card className="product-card h-100 text-center">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>Perfumes Nuevos</Card.Title>
                  <Card.Text>Lo último en fragancias, recién llegadas para vos.</Card.Text>
                </div>
                <Link to="/category/nuevos">
                  <Button variant="dark" className="mt-3 w-100">Ver más</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="product-card h-100 text-center">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>Más Vendidos</Card.Title>
                  <Card.Text>Los favoritos de nuestros clientes.</Card.Text>
                </div>
                <Link to="/category/mas vendidos">
                  <Button variant="dark" className="mt-3 w-100">Ver más</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="product-card h-100 text-center">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>Ofertas Exclusivas</Card.Title>
                  <Card.Text>Promociones y descuentos imperdibles.</Card.Text>
                </div>
                <Link to="/category/ofertas">
                  <Button variant="dark" className="mt-3 w-100">Ver más</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Top Bar Redes Sociales */}
      <div className="social-bar">
        <Container className="d-flex justify-content-between align-items-center">
          <span>Buscanos en nuestras Redes Sociales</span>
          <div className="d-flex gap-3">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaFacebookF size={20} /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaInstagram size={20} /></a>
            <a href="https://api.whatsapp.com/send?phone=3512294152" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}><FaWhatsapp size={20} /></a>
          </div>
        </Container>
      </div>

      {/* Footer Principal */}
      <div className="footer-main">
        <Container>
          <Row>
            <Col md={3} className="mb-4">
              <h5 style={{ color: '#fff' }}>TU TIENDA DE PERFUMES</h5>
              <p>Aquí organizamos tu contenido. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Col>
            <Col md={3} className="mb-4">
              <h5 style={{ color: '#fff' }}>SECCIONES</h5>
              <ul className="list-unstyled">
                <li><Link to="/category" className="text-light">Menu</Link></li>
                <li><Link to="/category/nuevos" className="text-light">Perfumes Nuevos</Link></li>
                <li><Link to="/category/mas vendidos" className="text-light">Más Vendidos</Link></li>
                <li><Link to="/category/ofertas" className="text-light">Ofertas Exclusivas</Link></li>
              </ul>
            </Col>
            <Col md={3} className="mb-4">
              <h5 style={{ color: '#fff' }}>ENLACES DE INTERÉS</h5>
              <ul className="list-unstyled">
                <li>⚙️ Sitio desarrollado por SosaDaiana</li>
                <li><Link to="/contacto" className="text-light">¿Querés uno así para tu negocio?</Link></li>
              </ul>
              </Col>
            <Col md={3} className="mb-4">
              <h5 style={{ color: '#fff' }}>CONTACTO</h5>
              <ul className="list-unstyled">
                <li><FaMapMarkerAlt /> El Abejional, San Pablo de León Cortés</li>
                <li><FaEnvelope /> info@example.com</li>
                <li><FaPhone /> +506 60190259 / +506 62531144</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      {/* —————— COPYRIGHT BAR —————— */}
<div className="copyright-bar">
  <Container>
    <p>© {new Date().getFullYear()} Tu Tienda de Perfumes. Todos los derechos reservados.</p>
  </Container>
</div>

      {/* Chat Bubble Component */}
      <ChatBubble />
    </div>
  );
}

export default Home;
