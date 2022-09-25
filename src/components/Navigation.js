import React from 'react'
export default function Navigation() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className='active navbar-brand' href='#home'>Home</a>
                <a class="navbar-brand" href='#news'>News</a>
                <a class="navbar-brand" href='#about'>About</a>
                <a class="navbar-brand" href='#contact'>Contact</a>
            </div>
        </nav>
    )
}
