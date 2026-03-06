import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Our Work', path: '/work' },
        { name: 'Contact Us', path: '/contact' }
    ];

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/" onClick={closeMobileMenu}>
                    <img src="/assets/goaero-logo.png" alt="GoAero Logo" className="logo-img" />
                </Link>
            </div>

            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                <i className={isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>

            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                {links.map((link) => (
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                            onClick={closeMobileMenu}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
