import React from 'react';
import { BiCartAlt } from "react-icons/bi";
import './CartWidget.css'; // Importa los estilos

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <BiCartAlt className="cart-icon" />
      <span className="cart-count"></span> {0}
    </div>
  );
};

export default CartWidget;