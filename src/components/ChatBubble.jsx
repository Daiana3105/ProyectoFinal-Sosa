import React, { useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';
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
    <a
      href="https://api.whatsapp.com/send?phone=3512294152"
      target="_blank"
      rel="noopener noreferrer"
      className="chat-bubble"
    >
      <FaWhatsapp size={32} color="#fff" />
    </a>
  );
};

export default ChatBubble;

