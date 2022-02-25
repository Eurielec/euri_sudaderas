import AppContext from "/context/AppContext";
import { useState } from "react";

function Message(props) {
  const [ignore, setIgnore] = useState(false);

  return (
    <div className="message-container">
      <div className="message">
        <p>
          ¡El primer pedido ya está aquí! Mira tu correo para las instrucciones de recogida.
        </p>
        <p>
          En <b>marzo</b> haremos el <b>segundo y último</b> pedido del curso. ¡Aprovecha y pide la tuya!
        </p>
        <p>
          ¿Alguna consulta? Escríbenos a 722 51 56 06 (Pedro).
        </p>
      </div>
    </div>
  );
}

export default Message;
