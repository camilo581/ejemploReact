import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./header.css"


const Header = () => {
    const [activeTab, setActiveTab] = useState("Inicio");

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveTab("Inicio");
        } else if (location.pathname === "/add") {
            setActiveTab("Registro");
        } else if (location.pathname === "/about") {
            setActiveTab("Nosotros");
        }
    }, [location]);

    return (
        <div className='header'>
            <p className='logo'>Usuario Administrador</p>

            <div className='header-right'>
                <Link to="/">
                    <p className={`${activeTab === 'Inicio' ? 'active' : ''}`} onClick={() => setActiveTab("Inicio")}>Inicio</p>
                </Link>

                <Link to="/add">
                    <p className={`${activeTab === 'Registro' ? 'active' : ''}`} onClick={() => setActiveTab("Registro")}>Registro</p>
                </Link>

                <Link to="/about">
                    <p className={`${activeTab === 'Nosotros' ? 'active' : ''}`} onClick={() => setActiveTab("Nosotros")}>Nosotros</p>
                </Link>
            </div>
        </div>
    );
}

export default Header;


