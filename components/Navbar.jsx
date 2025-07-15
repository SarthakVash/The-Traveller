import React from 'react'
import './Navbar.css'
import logo from '../img/logo.png'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid head bg-dark p-0">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid bg-dark navv">
                        <h1>The Traveller</h1>
                        <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="togglee">
                                <p></p>
                                <p></p>
                                <p></p>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">BLOG</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">DESTINATION</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CATEGORIES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">GALLERY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">ABOUT</a>
                                </li>
                                <li className="icon">
                                    <i className="bi bi-search"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
