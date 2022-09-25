import React from 'react'
import { FilmList } from '../shared/ListOfFilms'
export default function Films({ films }) {
    console.log(films);
    return (
        <div>
            <div className='film-container'>
                {FilmList.map((film) => (
                    <button className='film-column'>
                        <div className='card'>
                            <img src={film.img} alt='' />
                            <h3>{film.title}</h3>
                            <h3>{film.year}</h3>
                            <h4>{film.nation}</h4>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}
