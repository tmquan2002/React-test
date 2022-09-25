import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <header>
            <nav className="navbar" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <ul>
                    <li><a className='active' href='#home'>Home</a></li>
                    <li><a style={{ color: theme.color }} href='#news'>News</a></li>
                    <li><a style={{ color: theme.color }} href='#about'>About</a></li>
                    <li><a style={{ color: theme.color }} href='#contact'>Contact</a></li>
                    <li className='switch-mode'>
                        <a href="#changeMode" onClick={toggle}
                            style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: 'none',
                                transition: 'all 0.5s ease-in-out'
                            }} data-testid="toggle-theme-btn"
                        >
                            Switch to {!dark ? 'Dark' : 'Light'} mode
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
