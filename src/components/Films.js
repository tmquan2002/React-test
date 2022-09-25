import React from 'react'
export default function Films({ films }) {
    console.log(films);
    return (
        <div className='film-container id={theme.containerID}'>
            {films.map((film) => (
                <div className='film-column'>
                    <div className='card'>
                        <img src={film.img} />
                        <h3>{film.title}</h3>
                        <h3>{film.year}</h3>
                        <h4 className='detail'>{film.nation}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}
