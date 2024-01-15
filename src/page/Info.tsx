import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import imagen from '../images/fondo.jpeg';
import logo from '../images/logo.png';
import '../styles/info.css';
import imgCapilla from '../images/Imagen 35.jpg';
import ModalDetalleComponent from '../components/infodetalle'; 

import pescadeportiva from '../images/Imagen 33.jpg';  
import gastronomia from '../images/Imagen 7.jpg';  
import habitacionesR from '../images/Imagen 5.jpg'; 
import tuImagen from '../images/imagen 2.jpg';
import Menu from '../images/imagen 20.jpg';

const InfoComponent: React.FC = () => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [detalleSeleccionado, setDetalleSeleccionado] = useState({ imagenSrc: '', descripcion: '', titulo: '' });

  const handleEmpezarClick = () => {
    console.log('Empezar clickeado');
    navigate('/habitaciones');
  };

  const handleDetalleClick = (imagenSrc: string, descripcion: string, titulo: string) => {
    setDetalleSeleccionado({ imagenSrc, descripcion, titulo });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const menuDriveLink = 'https://www.facebook.com/?locale=es_LA';

  return (
    <div>
      {/* Sección de inicio */}
      <div className="info-container">
        <div className="background-image" style={{ backgroundImage: `url(${imagen})` }} />
        <div className="overlay">
          <img className="logo" src={logo} alt="Logo" />
          <h1
            id="capillapamba"
             style={{
              fontFamily: 'Pacifico, sans-serif',
              fontSize: '1.5em',
              fontStyle: 'italic',
              color: '#ffffff',
              zIndex: 2,
             }}
             >
           Capillapamba
           
          </h1>
          <h3
            id="frase"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '2em',
              fontWeight: 'bold',
              color: '#ffffff',
              zIndex: 2,
            }}
          >
            "La riqueza de lo natural a tu alcance"
          </h3>

          <Button
            type="primary"
            size="large"
            className="start-button"
            onClick={handleEmpezarClick}
          >
            Empezar
          </Button>
        </div>
      </div>

      {/* Sección adicional más abajo */}
      <div className="seccion-quienes-somos" style={{ backgroundColor: '#f5f5f5', padding: '70px', marginTop: '50px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Lato, sans-serif', marginBottom: '30px', textAlign: 'left' }}>
          <h2 style={{ fontFamily: 'Pacifico, sans-serif', marginBottom: '20px', marginTop: '-20px' }}>
            ¿Quiénes somos Nosotros?
          </h2>
          <p style={{ color: '#555', marginBottom: '20px' }}>
            Hola, Bienvenido a nuestra página de reservas, ¿Quiénes somos nosotros? pues bien aquí te lo contamos. Somos Hostería Capillapamba ubicado a 45 minutos de la ciudad de Cuenca en el sector Migüir es un emprendimiento en crecimiento que se dedica a la producción de trucha, servicio de hospedaje, restaurante y cabalgatas.
          </p>
          <p style={{ color: '#555', marginBottom: '20px' }}>
            Ofrecer a nuestros visitantes una experiencia única y enriquecedora, inmersos en la belleza natural del Parque Nacional Cajas. Nos dedicamos a la producción sostenible de trucha, brindar un refugio acogedor y confortable, donde los viajeros pueden conectarse con la naturaleza, disfrutar de la tranquilidad y descubrir la riqueza cultural de la región.
          </p>
          <p style={{ color: '#555', marginBottom: '20px' }}>
            Convertirnos en un destino turístico de renombre internacional, reconocido por su compromiso con la sostenibilidad ambiental, la producción responsable y calidad de trucha, esforzándonos por ser líderes en la industria turística, ofreciendo experiencias auténticas y enriquecedoras que resalten la belleza del Parque Nacional Cajas y fomenten la conciencia ambiental entre nuestros visitantes. Contribuyendo significativamente al desarrollo local, creando oportunidades para la comunidad y preservando el patrimonio natural.
          </p>
        </div>
        <div style={{ marginBottom: '30px' }}>
          <img src={imgCapilla} alt="Ejemplo" style={{ maxWidth: '80%', borderRadius: '10px', margin: '0 auto' }} />
        </div>
      </div>

      {/* Nueva sección de detalles */}
      <div className="seccion-detalles" style={{ marginTop: '70px', textAlign: 'center', backgroundColor: '#f5f5f5', padding: '20px' }}>
        <h2
          style={{
            fontFamily: 'Pacifico, sans-serif',
            marginBottom: '20px',
            fontSize: '2em',
            color: '#333',
          }}
        >
          Detalles
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          {/* Primera imagen de detalles */}
          <div style={{ flex: 1, textAlign: 'center', margin: '10px' }} onClick={() => handleDetalleClick(pescadeportiva, 'Descripción del detalle 1', 'Pesca Deportiva')}>
            <img src={pescadeportiva} alt="Detalle 1" style={{ width: '80%', height: '80%', borderRadius: '10px', cursor: 'pointer' }} />
            <p
              style={{
                fontSize: '1em',
                color: '#333',
                marginTop: '10px',
              }}
            >
              Pesca Deportiva
            </p>
          </div>

          {/* Segunda imagen de detalles */}
          <div style={{ flex: 1, textAlign: 'center', margin: '10px' }} onClick={() => handleDetalleClick(gastronomia, 'Descripción del detalle 2', 'Platos Gastronómicos')}>
            <img src={gastronomia} alt="Detalle 2" style={{ width: '80%', height: '80%', borderRadius: '10px', cursor: 'pointer' }} />
            <p
              style={{
                fontSize: '1em',
                color: '#333',
                marginTop: '10px',
              }}
            >
              Platos Gastronómicos
            </p>
          </div>

          {/* Tercera imagen de detalles */}
          <div style={{ flex: 1, textAlign: 'center', margin: '10px' }} onClick={() => handleDetalleClick(habitacionesR, 'Descripción del detalle 3', 'Reservación de Habitaciones')}>
            <img src={habitacionesR} alt="Detalle 3" style={{ width: '80%', height: '80%', borderRadius: '10px', cursor: 'pointer' }} />
            <p
              style={{
                fontSize: '1em',
                color: '#333',
                marginTop: '10px',
              }}
            >
              Habitaciones
            </p>
          </div>
        </div>
      </div>
{/* Sección "Menú" */}
<div className="seccion-menu" style={{ marginTop: '50px', textAlign: 'center', backgroundColor: '#f5f5f5', padding: '20px' }}>
      <h2
        style={{
          fontFamily: 'Pacifico, sans-serif',
          marginBottom: '20px',
          fontSize: '2em',
          color: '#333',
        }}
      >
        Menú
      </h2>
      <p
        style={{
          fontFamily: 'Lato, sans-serif',
          color: '#555',
          marginBottom: '20px',
        }}
      >
       "Descubre la variedad de experiencias que te ofrece Hostería Capillapamba. Desde la emoción de la pesca deportiva hasta la delicia de nuestros exquisitos platos gastronómicos, sumérgete en un festín para tus sentidos. Nuestro menú, cuidadosamente elaborado, celebra la frescura de los ingredientes locales y ofrece una experiencia culinaria única. ¡Explora sabores, texturas y aromas que te transportarán a la esencia misma de la naturaleza en cada bocado! En Hostería Capillapamba, la comida es más que una simple necesidad; es una celebración de la vida y la conexión con la riqueza del entorno natural que nos rodea."
      </p>
      {/* Centra la imagen y coloca el botón debajo */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Imagen centrada */}
        <img
          src={Menu}
          alt="Imagen Estándar"
          style={{ width: '400px', height: 'auto', marginBottom: '20px' }}
        />
        {/* Botón para ver el menú */}
        <Button
          type="primary"
          size="large"
          href={menuDriveLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: '#8FDB82', borderColor: '#8FDB82' }}
        >
          Ver Menú Completo
        </Button>
      </div>
    </div>

      {/* Sección adicional más abajo */}
      <div className="seccion-frase-imagen" style={{ marginTop: '50px', textAlign: 'center', backgroundColor: '#f5f5f5', padding: '20px' }}>
        <h2
          style={{
            fontFamily: 'Pacifico, sans-serif',
            marginBottom: '20px',
          }}
        >
          Capillapamba
        </h2>
        <p
          style={{
            fontFamily: 'Lato, sans-serif',
            color: '#555',
          }}
        >
          "La belleza de la naturaleza se encuentra en cada rincón de Hosteria Capillapamba. Descubre la armonía entre el hombre y el entorno que nos rodea."
        </p>
        <img src={tuImagen} alt="Imagen Inspiradora" style={{ width: '50%', borderRadius: '10px', marginTop: '20px', maxWidth: '100%' }} />
      </div>
      

      {/* Pie de página */}
      <div style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px' }}>
        <p style={{ margin: '0', fontSize: '1.2em' }}>Hostería Capillapamba</p>
        <p style={{ margin: '0', fontSize: '0.9em' }}>Copyright © 2023, Powered by Pedro Pulgarin y Steven Fernandez</p>
      </div>
      {/* Agrega el ModalDetalleComponent */}
      <ModalDetalleComponent
        visible={modalVisible}
        onClose={closeModal}
        imagenSrc={detalleSeleccionado.imagenSrc}
        descripcion={detalleSeleccionado.descripcion}
        titulo={detalleSeleccionado.titulo}
      />
    </div>
  );
};

export default InfoComponent;
