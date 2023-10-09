import React from 'react'
import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Learning from '../Pages/Learning';
import Project from '../Pages/Project';
import Contact from '../Pages/Contact'
import Blog from '../Pages/Blog';
import Google from '../Pages/Google'
import Logo from '../Assets/LogoTU.png'
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css'
import AddBlog from '../Pages/AddBlog';
import axios from 'axios';
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [blogs, setBLogs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/server/blog')
            .then(response => {
                setBLogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            <div>
                {/* navbarrrr */}                                                           \

                <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top" id="main-nav" style={{ background: isScrolled ? "black" : "black" }} >
                    <div className="container">
                        <a className="navbar-brand fs-4 text-black" href="/"><img src={Logo} alt="" srcset="" width="150px" /></a>
                        {/* toggle button */}
                        <button className="navbar-toggler  shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* sidebarrrrrr */}
                        <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        }}>
                            {/* sidebarrrrrr headerrr */}
                            <div className=" offcanvas-header text-black border-bottom">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navbar</h5>
                                <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            {/* sidevarr body */}
                            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                                <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                                    <li className="nav-item mx-2">
                                        <a className="nav-link active text-black" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-black" to="/about">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-black" to="/learning">Our Learning</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-black" to="/project">Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-black" to="/blog">Blogs</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <Link className="nav-link text-black" to="/google">Google</Link>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link className="nav-link text-black" to="/contact">Contact Us</Link>
                                    </li>

                                </ul>
                                {/* login signin */}
                                {/* <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">

                                    <Link to='/signup' className="text-white text-decoration-none px-3 py-1 rounded-2" style={{ backgroundColor: 'black' }}>Know More</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/project" element={<Project />} />
                <Route path="/blog" element={<Blog blogs={blogs} />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/google" element={<Google />} /> */}
                <Route path='/add-blog' element={<AddBlog />} />

            </Routes>
        </div>

    )
}

export default Navbar

//
// 
/*
 <nav className={`navbar navbar-expand-lg ${isScrolled ? 'navbar-dark bg-black' : 'navbar-light bg-transparent'} fixed-top`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/path/to/your/logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    Your Brand
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
             <li className="nav-item">
                                        <Link className="nav-link text-black" to="/learning">Our Learning</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-black" to="/project">Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-black" to="/blog">Blogs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-black" to="/contact">Contact Us</Link>
                                    </li>
                        </ul>
                        </div>
                    </div>
                     <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">

                                    <Link to='/signup' className="text-white text-decoration-none px-3 py-1 rounded-2" style={{ backgroundColor: 'black' }}>Know More</Link>
                                </div>
                </nav>
                */