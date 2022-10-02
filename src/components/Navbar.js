import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSunFill } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import './Navbar.css'

function Navbar({ themeToggler }) {
    const [show, setShow] = useState(false)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  ">
                <div className="container-fluid">
                    <div className="col-3">
                        <div className="d-flex justify-content-lg-start">
                            <h3 className='heading'
                                style={{
                                    float: "left",
                                    marginLeft: "7%",
                                    marginTop: "6%",
                                    textDecoration: 'none',
                                    fontWeight: "bold",
                                    fontSize: "30px"
                                }}>
                                <Link to="/"> Nivethitha</Link>
                            </h3>

                        </div>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{ backgroundColor: "deeppink" }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-9 navbar-expand-lg">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 "
                                style={{ fontSize: "20px", color: "white" }}>
                                <li className="nav-item">
                                    {show ? (
                                        <button className="btn border-0" onClick={() => themeToggler()}>
                                            <BsSunFill />
                                        </button>
                                    ) : (
                                        <button className='btn border-0' onClick={() => themeToggler()}>
                                            <MdOutlineDarkMode />
                                        </button>
                                    )}
                                </li>
                                <li className="nav-item">
                                    <Link to="/"> Home</Link> </li>
                                <li className="nav-item">
                                    <Link to="/about">About</Link> </li>
                                <li className="nav-item">
                                    <Link to="/skills">Skills</Link> </li>
                                <li className="nav-item">
                                    <Link to="/project">Project</Link></li>
                                <li className="nav-item">
                                    <Link to="/contact">Contact</Link></li>


                            </ul>
                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar