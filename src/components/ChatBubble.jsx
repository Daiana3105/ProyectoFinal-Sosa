import React, { useState } from "react";
import "./ChatBubble.css";  // Asegúrate de que el CSS esté bien vinculado

// Usamos el logo de WhatsApp


const ChatBubble = () => {
  // Estado para manejar la visibilidad del chat
  const [showChat, setShowChat] = useState(false);

  // Función para abrir o cerrar el chat
  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div>
      {/* Icono de WhatsApp */}
      <div className="chat-bubble" onClick={toggleChat}>
        <img src='../logowpp.png' alt="Chat con WhatsApp" />
      </div>

      {/* El chat que se abre */}
      {showChat && (
        <div className="chat-container">
          <h3>¡Hola! ¿Cómo podemos ayudarte?</h3>
          <textarea placeholder="Escribe tu mensaje..." rows="4" style={{ width: '100%' }}></textarea>
          <button className="send-button">Enviar</button>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;

