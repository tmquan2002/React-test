import React from 'react'
import { FilmList } from '../shared/ListOfFilms'
import { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { Link, Outlet } from 'react-router-dom'

export default function Films() {
    const [film, setFilm] = useState([])
    const [popup, setPopup] = useState('hide');
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <div className='film-container' id={theme.containerID}>
                {FilmList.map((film) => (
                    <Link to={`detail/${film.id}`}>
                        {/* <button className='film-column' onClick={() => { setFilm(film); setPopup('overlay') }}> */}
                        <button className='film-column'>
                            <div className='card' style={{ backgroundColor: theme.backgroundColor }}>
                                <img src={film.img} alt='' />
                                <div className='title'>{film.title}</div>
                                <div className='year'>{film.year}</div>
                                <div className='nation'>{film.nation}</div>
                            </div>
                        </button>
                    </Link>
                ))}
            </div>
            <div id='popup1' className={popup}>
                <div className='popup' style={{ backgroundColor: theme.backgroundColor }}>
                    <img src={film.img} alt="A popup" />
                    <div className='content'>
                        <div className='title' style={{ color: theme.color }}>{film.title}</div>
                        <div className='info' style={{ color: theme.color }}>
                            {film.info}
                        </div>
                        <button className='close' onClick={() => { setPopup('hide') }}>Close</button>
                    </div>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}