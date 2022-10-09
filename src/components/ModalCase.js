import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { Button } from 'react-materialize'
export default function ModalCase({ setIsOpen, film }) {
    const { theme } = useContext(ThemeContext)
    return (
        <div className='modal-show' >
            <div id="modal1" className='modal' style={{ display: 'block', top: '10%', backgroundColor: theme.backgroundColor }}>
                <div className='modal-content'>
                    <div style={{ fontSize: '20px', textAlign: 'center' }}>Trailer for {film.title}</div>
                    <p><iframe width="100%" height="525px" src={film.clip} title={film.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </p>
                    <Button className="modal-close" onClick={() => setIsOpen(false)}><strong>Close</strong></Button>
                </div>
            </div>
        </div>
    )
}