import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaCar, FaTools, FaEnvelope, FaUsers, FaShoppingCart, FaCommentDots, FaPercent } from 'react-icons/fa';
import './style.css';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <FaHome size={20} /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/car/:id">
                                <FaCar size={20} /> Cars
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/carparts">
                                <FaTools size={20} /> Car Parts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reviews">
                                <FaCommentDots size={20} /> Reviews
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/special-offers">
                                <FaPercent size={15} /> Special Offers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                <FaEnvelope size={20} /> Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">
                                <FaUsers size={20} /> About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <FaShoppingCart size={20} /> Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;


