import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../assets/images/profile.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] =  useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={ logo } alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>    
                            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                            <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
                            <Nav.Link href="#blogs" className={activeLink === 'blogs' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('blogs')}>Blogs</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://linkedin.com/in/adama-daffeh" target="_blank"><FaLinkedin /></a>
                                <a href="https://github.com/A-Daffeh" target="_blank"><FaGithub /></a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let's Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}

export default NavBar;