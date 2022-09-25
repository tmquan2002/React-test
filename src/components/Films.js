import React from 'react'
import { FilmList } from '../shared/ListOfFilms'
import { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Players() {
    const [film, setFilm] = useState([])
    const [popup, setPopup] = useState('hide');
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <div className='film-container' id={theme.containerID}>
                {FilmList.map((film) => (
                    <button className='film-column' onClick={() => { setFilm(film); setPopup('overlay') }}>
                        <div className='card'>
                            <img src={film.img} alt='' />
                            <h3>{film.title}</h3>
                            <h3>{film.year}</h3>
                            <h4>{film.nation}</h4>
                        </div>
                    </button>
                ))}
            </div>
            <div id='popup1' className={popup}>
                <div className='popup' style={{ backgroundColor: theme.backgroundColor }}>
                    <img src={film.img} alt="A popup" />
                    <div className='content'>
                        <h2 style={{ color: theme.color }}>{film.title}</h2>
                        <div className='info' style={{ color: theme.color }}>
                            {film.info}
                        </div>
                        <button className='close' onClick={() => { setPopup('hide') }}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}