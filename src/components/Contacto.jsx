import React from 'react';

const Contacto = () => {
  return (
    <div className="contacto-wrapper"style={{ paddingTop: '160px' }}>
        
      <h1>Contáctanos</h1>
      <div className="contact-info">
        <p>📞 <strong>+506 60190259 / +506 62531144</strong></p>
        <p>🏠 San Martin 123,Villa Mercedes, San Luis</p>
      </div>

      <div className="contact-content">
        {/* Formulario */}
        <form className="contact-form" onSubmit={(e) => {
  e.preventDefault();
  alert("¡Gracias por tu mensaje! Te responderé pronto 😊");
}}>
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" required />

          <label>Correo electrónico</label>
          <input type="email" placeholder="nombre@ejemplo.com" required />

          <label>Mensaje</label>
          <textarea rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>

          <button type="submit">Enviar</button>
        </form>

        {/* Mapa */}
        <div className="mapa">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.327951779565!2d-84.08801468553189!3d9.716956493052342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa06e7e97c773c1%3A0x264f22d248ae7dc1!2sVaca%20Flaca%20zona%20Biker%20(El%20Trapiche)!5e0!3m2!1ses-419!2scr!4v1682809742941!5m2!1ses-419!2scr"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
