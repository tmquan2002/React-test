import React from 'react'
export default function Navigation() {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><a className='active' href='#home'>Home</a></li>
                    <li><a href='#news'>News</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
