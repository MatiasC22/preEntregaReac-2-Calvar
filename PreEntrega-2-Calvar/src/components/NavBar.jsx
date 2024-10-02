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

            <button>
            <Link to="/category/vehiculos">Vehículos</Link>
            </button>

            <button>
            <Link to="/category/electronica">Electrónica</Link>
            </button>

            <button>
            <Link to="/category/ropa">Ropa</Link>
            </button>
            
        </nav>
    );
};


