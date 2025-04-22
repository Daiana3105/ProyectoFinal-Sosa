import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../service/firebase';
import '../App.css';
import ChatBubble from './ChatBubble';

function Home() {
  const [productos, setProductos] = useState([]);
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const prodCollection = collection(db, 'perfumes');
        const res = await getDocs(prodCollection);
        const list = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(list.slice(0, 12)); 
      } catch (error) {
        console.error("Error al traer productos:", error);
      }
    };

    getProductos();
  }, []);

  const toggleCategorias = () => {
    setMostrarCategorias(!mostrarCategorias);
  };

  return (
    <div>
      {/* Banner Principal */}
      <div className="banner">
        <h1>Descubrí tu aroma ideal</h1>
        <p>Bienvenido/a a nuestra tienda de perfumes, donde cada fragancia cuenta una historia.</p>
      </div>

      {/* Galería de Productos en Imágenes */}
      <div className="galeria-imagenes mt-5 text-center">
        <h2>Nuestros perfumes</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {productos.map((prod) => (
            <img
              key={prod.id}
              src={prod.img}
              alt={prod.name}
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                margin: '10px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Sección de Productos */}
<Container className="mt-5">
  <h2 className="text-center text-white mb-4">Explora nuestros productos</h2>

  <Row className="g-4 justify-content-center">
    {/* Perfumes Nuevos */}
    <Col md={4}>
      <Card className="product-card h-100 text-center">
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>Perfumes Nuevos</Card.Title>
            <Card.Text>Lo último en fragancias, recién llegadas para vos.</Card.Text>
          </div>
          <Link to="/category/nuevos">
            <Button variant="dark" className="w-100 mt-3">Ver más</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>

    {/* Más Vendidos */}
    <Col md={4}>
      <Card className="product-card h-100 text-center">
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>Más Vendidos</Card.Title>
            <Card.Text>Los favoritos de nuestros clientes.</Card.Text>
          </div>
          <Link to="/category/mas vendidos">
            <Button variant="dark" className="w-100 mt-3">Ver más</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>

    {/* Ofertas */}
    <Col md={4}>
      <Card className="product-card h-100 text-center">
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>Ofertas Exclusivas</Card.Title>
            <Card.Text>Promociones y descuentos imperdibles.</Card.Text>
          </div>
          <Link to="/category/ofertas">
            <Button variant="dark" className="w-100 mt-3">Ver más</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>


      {/* Sección de Regalos */}
      <div className="text-center mt-5">
        <h3>¿Querés sorprender con un regalo?</h3>
        <p>Elegí el perfume ideal para esa persona especial.</p>
        <Button 
          variant="outline primary" 
          style={{ 
            fontSize: '1.1rem', 
            padding: '8px 20px', // Reducido para que no se vea tan largo
            borderRadius: '30px', 
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
            transition: 'all 0.3s ease', 
            fontWeight: 'bold',
            borderColor: '#d4af37', // Tono dorado
            color: '#d4af37', // Tono dorado
            backgroundColor: 'transparent', // Fondo transparente para hacerlo más elegante
            width: 'auto', // Esto evita que se estire a lo largo de la pantalla
            margin: '0 auto', // Centra el botón en su contenedor
            display: 'block', // Asegura que el botón sea un bloque centrado
       
          }} 
          onClick={toggleCategorias}
          className="mb-4"
        >
          Empezar a comprar
        </Button>

        <Collapse in={mostrarCategorias}>
          <div className="mt-4">
            <Button 
              variant="light" 
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                marginBottom: '10px', 
                borderRadius: '8px', 
                fontWeight: 'bold', 
                backgroundColor: '#f8f9fa', 
                borderColor: '#ccc', 
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <Link to="/category/nuevos" style={{ textDecoration: 'none', color: 'inherit' }}>
                Perfumes Nuevos
              </Link>
            </Button>

            <Button 
              variant="light" 
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                marginBottom: '10px', 
                borderRadius: '8px', 
                fontWeight: 'bold', 
                backgroundColor: '#f8f9fa', 
                borderColor: '#ccc', 
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <Link to="/category/mas vendidos" style={{ textDecoration: 'none', color: 'inherit' }}>
                Más Vendidos
              </Link>
            </Button>

            <Button 
              variant="light" 
              style={{ 
                width: '100%', 
                padding: '12px 20px', 
                marginBottom: '10px', 
                borderRadius: '8px', 
                fontWeight: 'bold', 
                backgroundColor: '#f8f9fa', 
                borderColor: '#ccc', 
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <Link to="/category/ofertas" style={{ textDecoration: 'none', color: 'inherit' }}>
                Ofertas Exclusivas
              </Link>
            </Button>
          </div>
        </Collapse>
      </div>

      <footer style={{
        height: '60px',
        marginTop: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ChatBubble />
        <p style={{ margin: 0, color : 'grey' }}>© 2025 Tu Tienda de Perfumes</p>
      </footer>
      <ChatBubble />
    </div>
  );
}

export default Home;
