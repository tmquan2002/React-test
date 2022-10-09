import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { NavLink } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize'

export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <header>
            <Navbar
                alignLinks="left"
                centerChildren
                id={theme.mobileID}
                menuIcon={<Icon style={{ color: theme.color }}>menu</Icon>}
                style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
            >
                <NavItem><NavLink end to="/" style={{ color: theme.color }}><Icon left>home</Icon>Home</NavLink></NavItem>
                <NavItem><NavLink to="/news" style={{ color: theme.color }}><Icon left>dvr</Icon>News</NavLink></NavItem>
                <NavItem><NavLink to="/about" style={{ color: theme.color }}><Icon left>info_outline</Icon>About</NavLink></NavItem>
                <NavItem><NavLink to="/contact" style={{ color: theme.color }}><Icon left>contacts</Icon>Contact</NavLink></NavItem>
                <NavItem><NavLink className='switch-mode' href="#changeMode" onClick={toggle}
                    style={{
                        color: theme.color,
                        outline: 'none',
                    }} data-testid="toggle-theme-btn"
                >
                    Switch to {!dark ? 'Dark' : 'Light'} mode
                </NavLink></NavItem>
            </Navbar >
        </header>
    )
}
