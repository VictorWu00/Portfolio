import React from 'react'
import { useState , useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import logo from '../img/wuslogo.png'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('aboutMe');
    const [scrolled,setSrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setSrolled(true)
            }
            else {
                setSrolled(false)
            }
        }
        
        window.addEventListener("scroll", onScroll)

        return ()=> window.addEventListener("scroll", onScroll)
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

    return (
            <Navbar expand='lg' className={scrolled ? "scrolled" : ""}>
                <Container>
                <Navbar.Brand href="/Home">
                    <img src={logo} alt='logo'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/About" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>About</Nav.Link>
                    <Nav.Link href="/Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    {/* <span className='navbar-text'>
                        <button className='vvd' onClick={()=>{window.location.href =''}}>Contact Me!</button>
                    </span> */}
                </Navbar.Collapse>
                </Container>
            </Navbar>
        
    )
}