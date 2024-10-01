import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">

                <Link to="/">Mi Tienda</Link>
            </div>
            <ul className="navbar-menu">

                <li className="navbar-item">
                    <Link to="/category/vehiculos">Vehículos</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/category/electronica">Electrónica</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/category/ropa">Ropa</Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
};


