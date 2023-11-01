import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Learning from '../Pages/Learning';
import Project from '../Pages/Project';
import Contact from '../Pages/Contact';
import Blog from '../Pages/Blog';
import Logo from '../Assets/LogoTU.png';
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css';
import AddBlog from '../Pages/AddBlog';
import axios from 'axios';
import "../Components/NewNav.css"

export const Navnew = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [blogs, setBLogs] = useState([]);
    const [navbarCollapsed, setNavbarCollapsed] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/server/blog')
            .then((response) => {
                setBLogs(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavbarCollapse = () => {
        setNavbarCollapsed(!navbarCollapsed);
    };

    const closeNavbar = () => {
        setNavbarCollapsed(true);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/learning">Our Learning</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <a className="logo" href='/'><img src={Logo} alt="" srcset="" width="150px" /></a>
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
        </nav>
    );
};

export default Navnew;
