import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <header>
            <Navbar collapseOnSelect bg={theme.containerID} expand="lg" variant={theme.containerID} fixed="top">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: theme.backgroundColor, color: theme.color }} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={NavLink} end to="/" style={{ color: theme.color }}>Home</Nav.Link>
                            <Nav.Link style={{ color: theme.color }}>News</Nav.Link>
                            <Nav.Link style={{ color: theme.color }}>About</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" style={{ color: theme.color }}>Contact</Nav.Link>
                            <Nav.Link className='switch-mode' href="#changeMode" onClick={toggle}
                                style={{
                                    backgroundColor: theme.backgroundColor,
                                    color: theme.color,
                                    outline: 'none',
                                    transition: 'all 0.5s ease-in-out'
                                }} data-testid="toggle-theme-btn"
                            >
                                Switch to {!dark ? 'Dark' : 'Light'} mode
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header>
    )
}
