import React from 'react'
import { FilmList } from '../shared/ListOfFilms'
import { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { Link, Outlet } from 'react-router-dom'
import { Col, Row } from 'react-materialize'

export default function Films() {
    const [film, setFilm] = useState([])
    const [popup, setPopup] = useState('hide');
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <Row id={theme.containerID} className='film-container'>
                {FilmList.map((film) => (
                    <Col xl={4} l={6} m={12}><Link to={`detail/${film.id}`}>
                        {/* <button className='film-column' onClick={() => { setFilm(film); setPopup('overlay') }}> */}
                        <button className='film-column' style={{ backgroundColor: theme.backgroundColor }}>
                            <div style={{ backgroundColor: theme.backgroundColor }}>
                                <img className='home-img' src={film.img} alt='' />
                                <h3 style={{ fontSize: '20px' }}>{film.title} ({film.year})</h3>
                            </div>
                        </button>
                    </Link></Col>
                ))}
            </Row>
            {/* <div id='popup1' className={popup}>
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
            </div> */}
            <Outlet />
        </div>
    )
}